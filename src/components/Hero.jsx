import { motion } from "framer-motion";
import { Play, Music2, BarChart3, Globe2, Waves } from "lucide-react";
import Marquee from "../components/Marquee";
// import ThemeToggle from "../components/ThemeToggle";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#020617] text-white">
      {/* Glowing blobs */}
      <div className="pointer-events-none absolute -top-32 -left-20 w-64 h-64 bg-cyan-500/30 blur-3xl rounded-full" />
      <div className="pointer-events-none absolute -bottom-40 right-0 w-72 h-72 bg-fuchsia-500/20 blur-3xl rounded-full" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 w-80 h-80 -translate-x-1/2 bg-sky-500/10 blur-3xl rounded-full" />

      {/* Subtle grid overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,#ffffff30_1px,transparent_0)] bg-[length:18px_18px]" />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <div className="space-y-6">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700 text-xs text-slate-200"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Built for Indian Artists & Labels
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight"
            >
              <span className="block">Unlimited</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-sky-400 to-fuchsia-400 text-transparent bg-clip-text">
                Music Distribution
              </span>
              <span className="block">in one dashboard.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-slate-300 max-w-xl text-sm sm:text-base"
            >
              Upload once, auto-deliver to every major platform. Track royalties,
              monitor artists and keep 100% of your rights — designed for labels,
              studios & independent creators.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex flex-wrap items-center gap-3"
            >
              <a href="https://www.prdigitalcms.in/home-dashboard">
                <button className="bg-sky-500 hover:bg-sky-600 text-white rounded-full px-6 sm:px-8 py-2.5 text-sm font-semibold shadow-lg shadow-sky-500/40 transition-transform hover:-translate-y-0.5">
                  Get Your Dashboard
                </button>
              </a>

              <a
                href="https://youtu.be/l9ltbUY6EaY?si=v6vtsVs-ZWGR4eMG"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="border border-slate-600 bg-slate-900/40 hover:bg-slate-800/60 rounded-full px-6 sm:px-8 py-2.5 text-sm text-slate-100 flex items-center gap-2 transition-transform hover:-translate-y-0.5">
                  <Play className="w-4 h-4" />
                  Watch Demo
                </button>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="grid grid-cols-3 gap-4 text-xs text-slate-400 max-w-md pt-2"
            >
              <div>
                <div className="text-base font-semibold text-white">10K+</div>
                Releases shipped
              </div>
              <div>
                <div className="text-base font-semibold text-white">190+</div>
                Countries & DSPs
              </div>
              <div>
                <div className="text-base font-semibold text-white">100%</div>
                Rights stay with you
              </div>
            </motion.div>
          </div>

          {/* RIGHT – 3D / Music cards */}
          <div className="relative mt-8 lg:mt-0 flex justify-center lg:justify-end">
            {/* Floating glow ring */}
            <div className="pointer-events-none absolute -top-10 right-4 h-32 w-32 rounded-full border border-cyan-400/40 blur-sm opacity-60" />
            <div className="pointer-events-none absolute -bottom-6 left-0 h-24 w-24 rounded-full border border-fuchsia-400/40 blur-sm opacity-60" />

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full max-w-sm"
            >
              <motion.div
                whileHover={{ rotateX: 6, rotateY: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 120, damping: 14 }}
                className="bg-slate-900/80 border border-slate-700/70 rounded-3xl p-4 sm:p-5 shadow-[0_0_50px_rgba(56,189,248,0.35)] backdrop-blur-xl space-y-4"
              >
                {/* Card 1: Release preview */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 border border-white/10 p-3 flex gap-3">
                  <div className="relative h-16 w-16 rounded-xl overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/164745/pexels-photo-164745.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="Cover"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-1 left-1 flex items-center gap-1 text-[10px] text-white/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-[11px] text-slate-400">
                        Single • PR DIGITAL CMS
                      </p>
                      <p className="text-sm font-semibold">
                        Midnight City Lights
                      </p>
                      <p className="text-[11px] text-slate-400">
                        Your Artist Name
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-1">
                      <div className="flex items-center gap-1.5 text-[11px] text-emerald-300">
                        <Music2 className="w-3.5 h-3.5" />
                        On 25+ Platforms
                      </div>
                      
                   <a
  href="https://open.spotify.com/album/6ItmF3X0rV9NfaDmukMvIL?si=l4qJHpHnRyOp44MOVXWqhA"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="h-7 w-7 rounded-full bg-white text-slate-900 flex items-center justify-center text-[10px] shadow-md">
    <Play className="w-3 h-3 ml-0.5" />
  </button>
</a>

                    </div>
                  </div>
                </div>

                {/* Card 2: Equalizer + revenue */}
                <div className="rounded-2xl bg-slate-900/90 border border-slate-700/70 p-3 sm:p-4 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <BarChart3 className="w-4 h-4 text-emerald-300" />
                      <span>Monthly Streaming Revenue</span>
                    </div>
                    <span className="text-[11px] text-emerald-300">
                      Realtime
                    </span>
                  </div>

                  {/* Equalizer bars */}
                  <div className="flex items-end gap-1.5 h-10 mt-1">
                    {[6, 12, 18, 10, 16, 8, 14, 9].map((height, idx) => (
                      <motion.span
                        key={idx}
                        className="w-1.5 rounded-full bg-gradient-to-t from-emerald-400 via-cyan-400 to-sky-300"
                        animate={{
                          height: [
                            `${height / 2}px`,
                            `${height}px`,
                            `${height / 1.3}px`,
                          ],
                        }}
                        transition={{
                          duration: 0.8 + idx * 0.08,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut",
                        }}
                      />
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-300">
                    <div className="flex flex-col">
                      <span className="text-slate-400">This month</span>
                      <span className="text-base font-semibold text-white">
                        ₹ 1,24,500
                      </span>
                    </div>
                    <span className="px-2 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-400/40">
                      +32% vs last month
                    </span>
                  </div>
                </div>

                {/* Card 3: Platforms list */}
                <div className="rounded-2xl bg-slate-900/80 border border-slate-700/70 p-3 sm:p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <Globe2 className="w-4 h-4 text-sky-400" />
                      <span>Distributed To</span>
                    </div>
                    <span className="text-[11px] text-slate-400">
                      Major DSPs
                    </span>
                  </div>
<div className="flex flex-wrap gap-2 text-[11px] text-slate-100">
  {[
    { name: "Spotify", url: "https://open.spotify.com/track/0iTfJObIrR1AZkEMe4vYFH?si=1b4bc85f3f7d4ac4" },
    { name: "Apple Music", url: "https://music.apple.com/us/album/gutlu-bhai-single/1587171077" },
    { name: "JioSaavn", url: "https://www.jiosaavn.com/song/ye-dill-pagal/HhwFdB5,YUo" },
    { name: "Gaana", url: "https://gaana.com/song/hamra-bhatre-ke-laika-khelawatiya-1" },
    { name: "YouTube Music", url: "https://music.youtube.com/watch?v=cOGhZ-KDkas&list=OLAK5uy_n1bPxxMzxyQ6Sr1-UPrGxBpewrbqd1yR0" },
    { name: "Amazon Music", url: "https://music.amazon.com/albums/B09H36N2FZ?marketplaceId=A3K6Y4MI8GDYMT&musicTerritory=IN&ref=dm_sh_YFAt97QUwlR63wHJ4bNcw4TdC"},
  ].map((item) => (
    <a
      key={item.name}
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="px-2.5 py-1 rounded-full bg-slate-800/80 border border-slate-600/80 hover:bg-slate-700/70 transition"
    >
      {item.name}
    </a>
  ))}
</div>


                  <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                    <span>+ 50+ more platforms worldwide</span>
                    <span className="flex items-center gap-1 text-sky-400">
                      <Waves className="w-3.5 h-3.5" />
                      Global reach
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* BOTTOM MARQUEE STRIP */}
      <div className=" bg-black/40  bg-[#020617]">
        <Marquee />
      </div>
    </section>
    
  );
  // <ThemeToggle />

}
