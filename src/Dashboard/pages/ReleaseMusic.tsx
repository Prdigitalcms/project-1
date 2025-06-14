import React, { useState } from 'react';
import { Eye, Pencil, Share } from 'lucide-react';
import { AddReleaseButton } from '../components/AddReleaseButton';
import { useNavigate } from 'react-router-dom';

interface Release {
  cover: string;
  title: string;
  upc: string;
  artists: string;
  label: string;
  approvedAt: string;
  status: 'Delivered' | 'Takedown';
  contentId: string;
}

export default function ReleaseMusic() {
  const navigate = useNavigate();
  const [releases] = useState<Release[]>([
    {
      cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=50&h=50&fit=crop",
      title: "Lathi Goli Chalte Re",
      upc: "751451660748",
      artists: "Prem Raja",
      label: "PY Manjar",
      approvedAt: "Thu, 05 Dec 24 03:45 PM",
      status: "Delivered",
      contentId: "123456"
    },
    {
      cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=50&h=50&fit=crop",
      title: "Sit Down Son",
      upc: "751451651760",
      artists: "Param Mundi",
      label: "P4 Records",
      approvedAt: "Mon, 02 Dec 24 03:16 PM",
      status: "Takedown",
      contentId: "789012"
    }
  ]);

  const handleAddNew = () => {
    navigate('/cms/create-release');
  };

  return (
    <div className="p-6 transition-colors duration-200 dark:bg-gray-900">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold dark:text-white">Manage Releases</h1>
        <div className="flex items-center gap-4">
          <AddReleaseButton onClick={handleAddNew} />
          <div className="relative">
            <input
              type="search"
              placeholder="Search this list..."
              className="pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder-gray-400"
            />
            <span className="absolute right-3 top-2.5">🔍</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow transition-colors duration-200 dark:bg-gray-800">
        <table className="w-full">
          <thead>
            <tr className="border-b dark:border-gray-700">
              <th className="text-left p-4 dark:text-gray-200">Cover</th>
              <th className="text-left p-4 dark:text-gray-200">Title</th>
              <th className="text-left p-4 dark:text-gray-200">UPC</th>
              <th className="text-left p-4 dark:text-gray-200">Artists</th>
              <th className="text-left p-4 dark:text-gray-200">Label</th>
              <th className="text-left p-4 dark:text-gray-200">Approved At</th>
              <th className="text-left p-4 dark:text-gray-200">Status</th>
              <th className="text-left p-4 dark:text-gray-200">Actions</th>
            </tr>
          </thead>
          <tbody>
            {releases.map((release, index) => (
              <tr key={index} className="border-b dark:border-gray-700">
                <td className="p-4">
                  <img src={release.cover} alt={release.title} className="w-12 h-12 rounded object-cover" />
                </td>
                <td className="p-4 dark:text-gray-200">{release.title}</td>
                <td className="p-4 dark:text-gray-200">{release.upc}</td>
                <td className="p-4 dark:text-gray-200">{release.artists}</td>
                <td className="p-4 dark:text-gray-200">{release.label}</td>
                <td className="p-4 dark:text-gray-200">{release.approvedAt}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded ${
                    release.status === 'Delivered' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                      : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                  }`}>
                    {release.status}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex gap-2">
                    <button className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                      <Eye size={18} />
                    </button>
                    <button className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                      <Pencil size={18} />
                    </button>
                    <button className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                      <Share size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}