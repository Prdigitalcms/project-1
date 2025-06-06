import React from 'react';

const logos: string[] = [
  "https://gallery.vision/wp-content/themes/Gallery-Vision/assets/images/apple.webp",
  "https://gallery.vision/wp-content/themes/Gallery-Vision/assets/images/Spotify.webp",
  "https://gallery.vision/wp-content/themes/Gallery-Vision/assets/images/amazon.webp",
  "https://gallery.vision/wp-content/themes/Gallery-Vision/assets/images/tidal-b.webp",
  "https://gallery.vision/wp-content/themes/Gallery-Vision/assets/images/Facebook.webp",
  "https://gallery.vision/wp-content/themes/Gallery-Vision/assets/images/tiktok.webp",
  "https://gallery.vision/wp-content/themes/Gallery-Vision/assets/images/vevo.webp",
  "https://gallery.vision/wp-content/themes/Gallery-Vision/assets/images/apple.webp",
  "https://gallery.vision/wp-content/themes/Gallery-Vision/assets/images/Spotify.webp",
  "https://gallery.vision/wp-content/themes/Gallery-Vision/assets/images/amazon.webp",
];

const Marquee: React.FC = () => {
  return (
    <div className="overflow-hidden h-10 w-full py-20 mt-10 m-18 aline-center bg-white dark:bg-black">
      <br /><div className="flex w-max animate-marquee">
        {[...logos, ...logos].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`icon-${index}`}
            className="mx-10 max-h-[25px] h-auto"
            loading="lazy"
            decoding="async"
          />
        ))}
      </div>
    </div>
  );
};

export default Marquee;
