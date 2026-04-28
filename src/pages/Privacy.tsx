import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Shield, Lock, Eye, FileText } from "lucide-react";

const Privacy = () => (
  <div className="min-h-screen bg-gradient-to-b from-white via-indigo-50/20 to-white">
    <Navbar />
    <section className="pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-purple-600 mb-6 shadow-lg">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h1 className="font-display text-5xl font-black text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-sm text-gray-500">Last updated: January 2026</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-200/50 p-8 lg:p-12"
        >
          <div className="space-y-10 text-gray-700 leading-relaxed">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <h2 className="font-display text-2xl font-bold text-gray-900">1. Who We Are</h2>
              </div>
              <p>Castinity is a third-party service assistance startup, launched in 2026. We are not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider. This privacy policy describes how we collect, use, and protect your personal information when you use our services.</p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
                  <Eye className="h-5 w-5 text-purple-600" />
                </div>
                <h2 className="font-display text-2xl font-bold text-gray-900">2. Information We Collect</h2>
              </div>
              <p className="mb-3">We may collect the following types of information:</p>
              <ul className="list-none space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Name, email address, and phone number when you contact us or request assistance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>General location information to provide relevant guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Usage data such as pages visited and time spent on our website</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Device and browser information for site optimization</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200">
              <div className="flex items-center gap-3 mb-3">
                <Lock className="h-6 w-6 text-amber-600" />
                <h2 className="font-display text-2xl font-bold text-gray-900">3. What We Do Not Collect</h2>
              </div>
              <p className="text-gray-700">We do not request or collect provider account passwords, sensitive login credentials, social security numbers, or financial account details. Our assistance is informational only and does not require access to your provider accounts.</p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                  <FileText className="h-5 w-5 text-blue-600" />
                </div>
                <h2 className="font-display text-2xl font-bold text-gray-900">4. How We Use Information</h2>
              </div>
              <ul className="list-none space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>To provide informational assistance and guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>To respond to your inquiries and support requests</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>To improve our services and user experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>To send service-related communications</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-green-600" />
                </div>
                <h2 className="font-display text-2xl font-bold text-gray-900">5. Data Protection</h2>
              </div>
              <p>We implement reasonable security measures to protect your personal information, including HTTPS encryption for all data transmitted through our website. We do not sell your personal information to third parties.</p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <h2 className="font-display text-2xl font-bold text-gray-900">6. Your Rights</h2>
              </div>
              <p>You have the right to access, correct, or delete your personal information. To exercise these rights, contact us at support@castinity.com.</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-200">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-3">7. Contact</h2>
              <p className="text-gray-700">For privacy-related questions, contact us at <a href="mailto:support@castinity.com" className="text-primary hover:underline font-semibold">support@castinity.com</a> or call <a href="tel:+18886815944" className="text-primary hover:underline font-semibold">(888) 681-5944</a>.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Privacy;
