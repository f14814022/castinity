import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { FileText, AlertCircle, DollarSign, Scale } from "lucide-react";

const Terms = () => (
  <div className="min-h-screen bg-gradient-to-b from-white via-purple-50/20 to-white">
    <Navbar />
    <section className="pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 mb-6 shadow-lg">
            <Scale className="h-8 w-8 text-white" />
          </div>
          <h1 className="font-display text-5xl font-black text-gray-900 mb-4">Terms & Conditions</h1>
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
                <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
                  <FileText className="h-5 w-5 text-purple-600" />
                </div>
                <h2 className="font-display text-2xl font-bold text-gray-900">1. About Our Service</h2>
              </div>
              <p>Castinity is a third-party service assistance startup, launched in 2026. We provide general informational guidance and support related to internet, broadband, Wi-Fi, and cable TV services. We are not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider.</p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center">
                  <AlertCircle className="h-5 w-5 text-primary" />
                </div>
                <h2 className="font-display text-2xl font-bold text-gray-900">2. Nature of Services</h2>
              </div>
              <p className="mb-3">By using our services, you understand and agree that:</p>
              <ul className="list-none space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>We are not an Internet Service Provider (ISP)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>We do not sell internet, cable, or streaming subscriptions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>We do not provide official customer support for any brand or provider</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>We do not provide guaranteed technical fixes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Our assistance is informational and educational in nature</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Our service fees are separate from any provider charges</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
              <div className="flex items-center gap-3 mb-3">
                <DollarSign className="h-6 w-6 text-green-600" />
                <h2 className="font-display text-2xl font-bold text-gray-900">3. Service Fees</h2>
              </div>
              <p className="text-gray-700">Castinity charges a separate service fee for the independent informational assistance we provide. These fees are distinct from any charges billed by your internet, cable, or streaming service provider. Your provider billing remains unchanged by your use of our services.</p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                  <FileText className="h-5 w-5 text-blue-600" />
                </div>
                <h2 className="font-display text-2xl font-bold text-gray-900">4. Refund Policy</h2>
              </div>
              <p>Refund requests can be submitted within 7 to 15 days of service purchase, depending on the type of assistance provided. Eligibility depends on the service type and whether assistance has already been delivered. Please review our Refund Policy page for full eligibility details. We do not offer unconditional refund guarantees.</p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center">
                  <AlertCircle className="h-5 w-5 text-pink-600" />
                </div>
                <h2 className="font-display text-2xl font-bold text-gray-900">5. Trademarks</h2>
              </div>
              <p>All brand names, trademarks, and service marks mentioned on this website belong to their respective owners. Any references are made strictly for informational purposes only and do not imply affiliation, endorsement, or authorization.</p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
                  <Scale className="h-5 w-5 text-orange-600" />
                </div>
                <h2 className="font-display text-2xl font-bold text-gray-900">6. Limitation of Liability</h2>
              </div>
              <p>Castinity provides informational guidance only and makes no warranties regarding the outcomes of your service provider interactions. We are not liable for any decisions you make based on our informational support.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-3">7. Contact</h2>
              <p className="text-gray-700">For questions about these terms, contact us at <a href="mailto:support@castinity.com" className="text-purple-600 hover:underline font-semibold">support@castinity.com</a> or call <a href="tel:+18886815944" className="text-purple-600 hover:underline font-semibold">(888) 681-5944</a>.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Terms;
