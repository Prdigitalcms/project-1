import { motion } from "framer-motion";
import { Check } from "lucide-react";
import ThemeToggle from "../components/ThemeToggle";
// adjust path if needed

const pricingPlans = [
  {
    name: "Artist",
    price: "70%",
    period: "/Artist",
    description: "The MUST have plan for professional artists and labels.",
    highlight: "BEST DEAL!",
    color: "from-yellow-400 to-orange-500",
    buttonColor: "bg-gradient-to-r from-yellow-400 to-orange-500",
    features: [
      "Unlimited Release",
      "200+ Store",
      "Premium Features",
      "48 Hours Support",
      "Store Automator",
      "Official Artist Channel",
    ],
  },
  {
    name: "Lable ",
    price: "75%",
    period: "/Lable",
    description:
      "Release unlimited music plus advanced features to customize your releases.",
    color: "from-pink-500 to-purple-500",
    buttonColor: "bg-gradient-to-r from-pink-500 to-purple-500",
    features: [
      "Unlimited Artist",
      "Unlimited Music Distribution",
      "24 Hours Support",
      "Advanced Analytics",
      "Social Media Integration",
      "Official Artist Channel",
    ],
  },
  {
    name: "White Lable",
    price: "80%",
    period: "/White Label",
    description:
      "The essential distribution plan. Release unlimited music to 150+ Digital Stores across the globe.",
    color: "from-blue-400 to-blue-600",
    buttonColor: "bg-gradient-to-r from-blue-400 to-blue-600",
    features: [
      "All Premium Features",
      "Custom Dashboard on Your Domain",
      "Your Brand & Logo",
      "Custom Payment Integration",
      "Multi-User Management",
      "Digital Store Access",
    ],
  },
];

const features = [
  "Official Sales Reports",
  "100% Revenue from Digital Stores",
  "Schedule Your Own Release Date",
  "Unlimited Releases to all Digital Stores",
  "Spotify Verified Artist Checkmark",
  "Apple Music for Artists Verification",
  "Artist Revenue Splits",
  "Unlimited Releases to all Social Platforms",
  "Store Automator",
  "Daily Trend Reports",
  "Cover Art Creator",
  "Use Your Own ISRC",
];

export default function HomeDashboard() {
  return (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mx-auto place-items-center">
    {pricingPlans.slice(0, 3).map((plan, index) => (
      <motion.div
        key={plan.name}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg w-full"
      >
        {plan.highlight && (
          <div className="absolute top-4 left-4 bg-yellow-400 text-black text-sm font-bold px-3 py-1 rounded-full">
            {plan.highlight}
          </div>
        )}

        <div className="p-8 border border-gray-300 dark:border-gray-800 rounded-2xl transition-transform hover:scale-105 duration-300">
<h3
  className="
    text-2xl font-extrabold mb-4 
    text-center text-white 
    bg-gradient-to-r from-orange-500 via-red-500 to-pink-500
    py-3 rounded-xl shadow-lg 
    shadow-orange-500/30 border border-white/10
    tracking-wide
  "
>
  {plan.name}
</h3>

          <div className="flex justify-center items-baseline mb-4">
            <span className="text-5xl font-bold">{plan.price}</span>
            <span className="text-gray-500 dark:text-gray-400 ml-2">
              {plan.period}
            </span>
          </div>

          <p className="text-gray-600 dark:text-gray-400 mb-6 min-h-[60px] text-center">
            {plan.description}
          </p>

          {/* <button
            className={`w-full py-3 rounded-lg text-white font-medium mb-8 ${plan.buttonColor} hover:opacity-90 transition-opacity`}
          >
            GET STARTED
          </button> */}

          <ul className="space-y-4">
            {plan.features.map((feature, i) => (
              <li
                key={i}
                className="flex items-center text-gray-700 dark:text-gray-300"
              >
                <Check className="w-5 h-5 mr-3 text-green-500" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    ))}
  </div>
</div>

  );
}
