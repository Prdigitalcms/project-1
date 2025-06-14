import React from 'react';
import { Youtube, Music, Instagram } from 'lucide-react';

interface Artist {
  id: string;
  name: string;
  image?: string;
  platforms: {
    spotify?: boolean;
    youtube?: boolean;
    instagram?: boolean;
    itunes?: boolean;
  };
}

export default function MyArtists() {
  const artists: Artist[] = [
    {
      id: '1',
      name: 'Prem Raja',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=128&h=128&fit=crop',
      platforms: { spotify: true, instagram: true }
    },
    {
      id: '2',
      name: 'Param Mundi',
      image: 'https://images.unsplash.com/photo-1520785643438-5bf77931f493?w=128&h=128&fit=crop',
      platforms: { spotify: true }
    },
    {
      id: '3',
      name: 'Sharp',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=128&h=128&fit=crop',
      platforms: { spotify: true, youtube: true, itunes: true }
    }
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold">My Artists</h2>
        <div className="relative">
          <input
            type="search"
            placeholder="Search artists..."
            className="pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="absolute right-3 top-2.5">🔍</span>
        </div>
      </div>

      <div className="grid gap-6">
        {artists.map((artist) => (
          <div
            key={artist.id}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              {artist.image ? (
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
              ) : (
                <div className="w-16 h-16 rounded-lg bg-gray-200 flex items-center justify-center text-gray-500">
                  {artist.name.split(' ').map(n => n[0]).join('')}
                </div>
              )}
              <h3 className="text-xl font-medium">{artist.name}</h3>
            </div>

            <div className="flex gap-4">
              {artist.platforms.spotify && (
                <span className="w-6 h-6 text-green-500">
                  <Music />
                </span>
              )}
              {artist.platforms.youtube && (
                <Youtube className="w-6 h-6 text-red-500" />
              )}
              {artist.platforms.instagram && (
                <Instagram className="w-6 h-6 text-purple-500" />
              )}
              {artist.platforms.itunes && (
                <Music className="w-6 h-6 text-gray-700" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}