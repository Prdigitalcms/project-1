import React from 'react';
const logos = [
  { src: "https://gallery.vision/wp-content/themes/Gallery-Vision/assets/images/apple.webp", name: "Apple" },
  { src: "https://gallery.vision/wp-content/themes/Gallery-Vision/assets/images/Spotify.webp", name: "Spotify" },
  { src: "https://gallery.vision/wp-content/themes/Gallery-Vision/assets/images/amazon.webp", name: "Amazon" },
  { src: "https://gallery.vision/wp-content/themes/Gallery-Vision/assets/images/tidal-b.webp", name: "Tidal" },
  { src: "https://gallery.vision/wp-content/themes/Gallery-Vision/assets/images/Facebook.webp", name: "Facebook" },
  { src: "https://gallery.vision/wp-content/themes/Gallery-Vision/assets/images/tiktok.webp", name: "TikTok" },
  { src: "https://gallery.vision/wp-content/themes/Gallery-Vision/assets/images/vevo.webp", name: "Vevo" },
  // duplicate the list to make seamless loop
  { src: "https://gallery.vision/wp-content/themes/Gallery-Vision/assets/images/apple.webp", name: "Apple" },
  { src: "https://gallery.vision/wp-content/themes/Gallery-Vision/assets/images/Spotify.webp", name: "Spotify" },
  { src: "https://gallery.vision/wp-content/themes/Gallery-Vision/assets/images/amazon.webp", name: "Amazon" },
  { src: "https://gallery.vision/wp-content/themes/Gallery-Vision/assets/images/tidal-b.webp", name: "Tidal" },
];

export default function Marquee() {
  return (
    <div className="marquee-viewport overflow-hidden mx-20 max-h-[25px] h-auto light:filter light:invert ">
      <div className="marquee-track w-max animate-marquee" aria-hidden="true">
        {[...logos, ...logos].map((logo, i) => (
          <div className="marquee-item" key={i}>
            <img
              src={logo.src}
              alt={logo.name}
              className="marquee-img max-h-[25px] h-auto "
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
