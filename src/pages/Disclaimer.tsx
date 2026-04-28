import { motion } from "framer-motion";
import { ShieldCheck, AlertTriangle, Info, Lock, Award } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const Disclaimer = () => (
  <div className="min-h-screen bg-gradient-to-b from-white via-red-50/20 to-white">
    <Navbar />
    <section className="pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-red-600 to-orange-600 mb-6 shadow-lg">
            <ShieldCheck className="h-8 w-8 text-white" />
          </div>
          <h1 className="font-display text-5xl font-black text-gray-900 mb-4">Disclaimer</h1>
          <p className="text-sm text-gray-500">Important information about our services</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 shadow-2xl border-2 border-red-200">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="h-7 w-7 text-red-600" />
              <h2 className="font-display text-2xl font-bold text-gray-900">Third-Party Service Disclosure</h2>
            </div>
            <p className="text-lg text-gray-700 font-medium">
              Castinity is a third-party service assistance provider. We are not affiliated with, authorized by, or endorsed by any internet, broadband, or cable TV service provider. Brand names, if mentioned, are used strictly for informational purposes only.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-200/50 p-8 lg:p-10 space-y-8 text-gray-700">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                  <Info className="h-5 w-5 text-blue-600" />
                </div>
                <h2 className="font-display text-2xl font-bold text-gray-900">Nature of Our Services</h2>
              </div>
              <p>Castinity provides general informational guidance and assistance related to internet, broadband, Wi-Fi, and cable TV services. We do not provide internet or cable services directly. We do not sell, activate, or manage subscriptions with any service provider.</p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
                  <ShieldCheck className="h-5 w-5 text-purple-600" />
                </div>
                <h2 className="font-display text-2xl font-bold text-gray-900">No Provider Affiliation</h2>
              </div>
              <p>Castinity is a third-party service assistance startup, launched in 2026, and is not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider. We do not represent, partner with, or act on behalf of any telecom, internet, or cable TV company.</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
              <div className="flex items-center gap-3 mb-3">
                <Info className="h-6 w-6 text-green-600" />
                <h2 className="font-display text-2xl font-bold text-gray-900">Service Fees</h2>
              </div>
              <p>Castinity charges a separate service fee for independent informational assistance. These fees are distinct from any charges billed by your internet, cable, or streaming service provider. Your provider billing remains unchanged.</p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
                  <Award className="h-5 w-5 text-orange-600" />
                </div>
                <h2 className="font-display text-2xl font-bold text-gray-900">Trademarks</h2>
              </div>
              <p>All brand names, trademarks, and service marks referenced on this website are the property of their respective owners. Any use of these names is strictly for informational purposes and does not constitute or imply endorsement, affiliation, or authorization.</p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                  <AlertTriangle className="h-5 w-5 text-amber-600" />
                </div>
                <h2 className="font-display text-2xl font-bold text-gray-900">No Guaranteed Outcomes</h2>
              </div>
              <p>Our guidance is educational and informational in nature. We do not guarantee specific outcomes, technical fixes, or results from your interactions with service providers. Decisions made based on our guidance are entirely at your discretion.</p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center">
                  <Lock className="h-5 w-5 text-primary" />
                </div>
                <h2 className="font-display text-2xl font-bold text-gray-900">Data & Privacy</h2>
              </div>
              <p>We do not request provider account passwords or sensitive credentials. We implement HTTPS encryption for all data transmitted through our website. For full details, please review our Privacy Policy.</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-200">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-3">Contact</h2>
              <p>For any questions regarding this disclaimer, please contact us at <a href="mailto:support@castinity.com" className="text-red-600 hover:underline font-semibold">support@castinity.com</a> or call <a href="tel:+18886815944" className="text-red-600 hover:underline font-semibold">(888) 681-5944</a>.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Disclaimer;
