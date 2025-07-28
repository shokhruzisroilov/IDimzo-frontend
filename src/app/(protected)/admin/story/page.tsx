import { Download, History } from "lucide-react";
import React from "react";

const Story = () => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-md ">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">История</h1>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
            Войдите
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition">
            Выходы
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left text-sm text-gray-700 uppercase">
              <th className="p-3">#</th>
              <th className="p-3">Название контракта</th>
              <th className="p-3">Дата начала</th>
              <th className="p-3">Дата окончания</th>
              <th className="p-3">Скачать</th>
              <th className="p-3">Дата создания</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            <tr className="border-b hover:bg-gray-50">
              <td className="p-3">1</td>
              <td className="p-3 flex items-center gap-2">
                <History className="text-blue-500 w-5 h-5" />
                <span>Контракт на деньги</span>
              </td>
              <td className="p-3">25.01.2025</td>
              <td className="p-3">28.01.2028</td>
              <td className="p-3">
                <button className="hover:text-blue-600 transition">
                  <Download className="w-5 h-5" />
                </button>
              </td>
              <td className="p-3">
                <span className="inline-block px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full mb-1">
                  Одобренный
                </span>
                <p className="text-xs text-gray-500">2025 25 Янв 12:28</p>
              </td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="p-3">1</td>
              <td className="p-3 flex items-center gap-2">
                <History className="text-blue-500 w-5 h-5" />
                <span>Контракт на деньги</span>
              </td>
              <td className="p-3">25.01.2025</td>
              <td className="p-3">28.01.2028</td>
              <td className="p-3">
                <button className="hover:text-blue-600 transition">
                  <Download className="w-5 h-5" />
                </button>
              </td>
              <td className="p-3">
                <span className="inline-block px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full mb-1">
                  Одобренный
                </span>
                <p className="text-xs text-gray-500">2025 25 Янв 12:28</p>
              </td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="p-3">1</td>
              <td className="p-3 flex items-center gap-2">
                <History className="text-blue-500 w-5 h-5" />
                <span>Контракт на деньги</span>
              </td>
              <td className="p-3">25.01.2025</td>
              <td className="p-3">28.01.2028</td>
              <td className="p-3">
                <button className="hover:text-blue-600 transition">
                  <Download className="w-5 h-5" />
                </button>
              </td>
              <td className="p-3">
                <span className="inline-block px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full mb-1">
                  Одобренный
                </span>
                <p className="text-xs text-gray-500">2025 25 Янв 12:28</p>
              </td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="p-3">1</td>
              <td className="p-3 flex items-center gap-2">
                <History className="text-blue-500 w-5 h-5" />
                <span>Контракт на деньги</span>
              </td>
              <td className="p-3">25.01.2025</td>
              <td className="p-3">28.01.2028</td>
              <td className="p-3">
                <button className="hover:text-blue-600 transition">
                  <Download className="w-5 h-5" />
                </button>
              </td>
              <td className="p-3">
                <span className="inline-block px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full mb-1">
                  Одобренный
                </span>
                <p className="text-xs text-gray-500">2025 25 Янв 12:28</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Story;
