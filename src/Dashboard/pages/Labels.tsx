import React from 'react';

interface Label {
  name: string;
  type: string;
  url: string;
  status: 'Approved' | 'Pending' | 'Rejected';
  created: string;
  approved: string;
  expire: string;
  mode: string;
}

export default function Labels() {
  const labels: Label[] = [
    {
      name: 'PY Manjar',
      type: 'BOTH',
      url: 'https://youtube.com/channel/UCH_DdA0ZM146...',
      status: 'Approved',
      created: '11 Feb 2023, 9:41 pm',
      approved: '31 Jan 2024',
      expire: 'NA',
      mode: 'AUTORENEW'
    }
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Manage Labels</h1>
        <div className="flex gap-4">
          <input
            type="search"
            placeholder="Search label..."
            className="pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="text-left p-4">Name</th>
              <th className="text-left p-4">Type</th>
              <th className="text-left p-4">URL</th>
              <th className="text-left p-4">Status</th>
              <th className="text-left p-4">Created</th>
              <th className="text-left p-4">Approved</th>
              <th className="text-left p-4">Expire</th>
              <th className="text-left p-4">Mode</th>
            </tr>
          </thead>
          <tbody>
            {labels.map((label, index) => (
              <tr key={index} className="border-b">
                <td className="p-4">{label.name}</td>
                <td className="p-4">{label.type}</td>
                <td className="p-4">
                  <a href={label.url} className="text-blue-600 hover:underline truncate block max-w-xs">
                    {label.url}
                  </a>
                </td>
                <td className="p-4">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                    {label.status}
                  </span>
                </td>
                <td className="p-4">{label.created}</td>
                <td className="p-4">{label.approved}</td>
                <td className="p-4">{label.expire}</td>
                <td className="p-4">{label.mode}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="p-4 border-t flex justify-between items-center">
          <span>1-3 of 3 items</span>
          <div className="flex items-center gap-2">
            <select className="border rounded px-2 py-1">
              <option>25 / page</option>
              <option>50 / page</option>
              <option>100 / page</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}