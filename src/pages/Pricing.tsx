import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';


const pricingPlans = [
  
  {
    name: 'Unlimited Lable',
    price: '70%',
    period: '/Lable',
    description: 'The MUST have plan for professional artists and labels.',
    highlight: 'BEST DEAL!',
    color: 'from-yellow-400 to-orange-500',
    buttonColor: 'bg-gradient-to-r from-yellow-400 to-orange-500',
    features: ['Unlimited Artist', 'Unlimited Release', '200+ Store', 'Premium Features', '24 Hours Support', 'Store Automator', 'Unlimited Official Artist Channel']
  },
  {
    name: 'Limited Artist',
    price: '75%',
    period: '/Artist',
    description: 'Release unlimited music plus advanced features to customize your releases.',
    color: 'from-pink-500 to-purple-500',
    buttonColor: 'bg-gradient-to-r from-pink-500 to-purple-500',
    features: ['Unlimited Music Distribution', '48 Hours Support', 'Advanced Analytics', 'Social Media Integration', 'Custom Release Scheduling']
  }

  // {
  //   name: 'Rising Artist',
  //   price: '999',
  //   period: '/year',
  //   description: 'The essential distribution plan. Release unlimited music to 150+ Digital Stores across the globe.',
  //   color: 'from-blue-400 to-blue-600',
  //   buttonColor: 'bg-gradient-to-r from-blue-400 to-blue-600',
  //   features: ['Basic Distribution', '72 Hours Support', 'Basic Analytics', 'Standard Features', 'Digital Store Access']
  // },
  // {
  //   name: 'New Artist',
  //   price: 'Free',
  //   period: '',
  //   description: 'Up to 3 tracks, ONLY on Instagram & YouTube',
  //   color: 'from-green-400 to-emerald-500',
  //   buttonColor: 'bg-gradient-to-r from-green-400 to-emerald-500',
  //   features: ['3 Track Limit', 'Automated Support', 'Basic Features', 'Limited Platforms', 'Community Access']
  // }
];

const features = [
  'Official Sales Reports',
  '100% Revenue from Digital Stores',
  'Schedule Your Own Release Date',
  'Unlimited Releases to all Digital Stores',
  'Spotify Verified Artist Checkmark',
  'Apple Music for Artists Verification',
  'Artist Revenue Splits',
  'Unlimited Releases to all Social Platforms',
  'Store Automator',
  'Daily Trend Reports',
  'Cover Art Creator',
  'Use Your Own ISRC'
];

export default function Pricing() {
  return (
    
    <div className="min-h-screen bg-black text-white pt-24 pb-16">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Choose the Right Plan for Your{' '}
          <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Music Distribution
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-300 max-w-3xl mx-auto"
        >
          Select from our range of distribution plans designed to fit your music career stage
        </motion.p>
      </div>

      {/* Toggle Section */}
      <div className="flex justify-center mb-16">
        <div className="bg-gray-800 p-1 rounded-full inline-flex">
          <button className="px-6 py-2 rounded-full bg-white text-black font-medium">
            UNLIMITED PLANS
          </button>
          <button className="px-6 py-2 rounded-full text-gray-300 hover:text-white transition-colors">
            PAY PER RELEASE
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full bg-400">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-gray-900 rounded-2xl overflow-hidden"
            >
              {plan.highlight && (
                <div className="absolute top-4 left-4 bg-yellow-400 text-black text-sm font-bold px-3 py-1 rounded-full">
                  {plan.highlight}
                </div>
              )}
              <div className={`p-8 border border-gray-800 rounded-2xl transition-transform hover:scale-105 duration-300`}>
                <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold">
                    {typeof plan.price === 'string' && plan.price.includes('Free') ? '' : '$'}
                  </span>
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>
                <p className="text-gray-400 mb-6 min-h-[60px]">{plan.description}</p>
                <button className={`w-full py-3 rounded-lg text-white font-medium mb-8 ${plan.buttonColor} hover:opacity-90 transition-opacity`}>
                  EARN MONEY
                </button>
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <Check className="w-5 h-5 mr-3 text-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <div className="mt-24 bg-gray-900 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Compare All Features</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="py-4 px-6 text-left">Features</th>
                  {pricingPlans.map((plan) => (
                    <th key={plan.name} className="py-4 px-6 text-center">{plan.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr key={index} className="border-b border-gray-800">
                    <td className="py-4 px-6">{feature}</td>
                    {pricingPlans.map((plan) => (
                      <td key={`${plan.name}-${feature}`} className="py-4 px-6 text-center">
                        <Check className={`w-5 h-5 mx-auto ${
                          plan.name === 'New Artist' && index < 8 ? 'text-gray-600' : 'text-green-400'
                        }`} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}