"use client";

import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { RootState } from "@/redux/store";
import {
  loginStart,
  loginSuccess,
  loginFailure,
} from "@/redux/slices/authSlice";
import AuthService from "@/services/AuthService";

export default function VerifyPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { phone } = useSelector((state: RootState) => state.auth);

  const [code, setCode] = useState(["", "", "", ""]);
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const [timer, setTimer] = useState(60);
  const [resendActive, setResendActive] = useState(false);
  const [error, setError] = useState("");

  // If not tell nomer
  useEffect(() => {
    if (!phone) {
      router.replace("/login");
    }
  }, [phone, router]);

  // Countdown logic
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setResendActive(true);
    }
  }, [timer]);

  // Focus next input
  const handleInputChange = (value: string, index: number) => {
    if (!/^\d*$/.test(value)) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }

    if (e.key === "Enter" && code.every((c) => c !== "")) {
      handleVerify();
    }
  };

  const handleVerify = async () => {
    const finalCode = code.join("");

    if (finalCode.length < 4) {
      toast.error("Kodni to‘liq kiriting");
      return;
    }

    dispatch(loginStart());

    try {
      const res = await AuthService.verifyCode({
        phoneNumber: phone,
        code: finalCode,
      });

      dispatch(
        loginSuccess({
          accessToken: res.accessToken,
          refreshToken: res.refreshToken,
        })
      );

      toast.success("Tizimga muvaffaqiyatli kirdingiz!");
      router.push("/admin");
    } catch (err) {
      console.error(err);
      setError("Kod noto‘g‘ri yoki serverda muammo bor.");
      dispatch(loginFailure("Kod noto‘g‘ri"));
      toast.error("Kod xato yoki serverda xatolik.");
    }
  };

  const handleResend = async () => {
    try {
      await AuthService.sendCode(phone);
      toast.success("Kod qayta yuborildi!");
      setTimer(60);
      setResendActive(false);
      setCode(["", "", "", ""]);
      inputRefs.current[0]?.focus();
    } catch (err) {
      console.log(err);
      toast.error("Kod yuborilmadi.");
    }
  };

  return (
    <div className="flex-1 w-full overflow-hidden flex items-center justify-center bg-white py-20 px-4">
      <div className="w-[516px] h-[440px] relative bg-white rounded-[10px] shadow-[0px_0px_14px_0px_rgba(0,138,255,0.25)] p-10">
        <p className="text-2xl text-black font-bold mb-4">Tasdiqlash kodi</p>
        <p className="text-lg text-black mb-6">
          <b>{phone}</b> raqamiga tasdiqlash kodi yuborildi. Iltimos, kodni
          kiriting.
        </p>

        <div className="flex justify-between w-96 mx-auto mb-6">
          {code.map((value, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={value}
              ref={(el) => {
                if (el) inputRefs.current[index] = el;
              }}
              onChange={(e) => handleInputChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-14 h-14 text-center text-2xl text-black border-none outline-none bg-sky-500/10 rounded-[10px]"
            />
          ))}
        </div>

        {resendActive ? (
          <p
            className="text-center text-blue-600 font-semibold cursor-pointer mb-4"
            onClick={handleResend}
          >
            Kodni qayta yuborish
          </p>
        ) : (
          <p className="text-lg text-black text-center mb-4">
            Qayta yuborish uchun {timer} soniya qoldi
          </p>
        )}

        {error && (
          <p className="text-center text-red-500 text-sm mb-2">{error}</p>
        )}

        <button
          onClick={handleVerify}
          className={`w-full h-14 rounded-[10px] text-white text-lg font-semibold font-['Archivo_Black'] transition ${
            code.every((c) => c !== "")
              ? "bg-[#008AFF] hover:bg-[#0077d1]"
              : "bg-gray-400 cursor-not-allowed"
          }`}
          disabled={code.some((c) => c === "") || timer <= 0}
        >
          Tasdiqlash
        </button>
      </div>
    </div>
  );
}
