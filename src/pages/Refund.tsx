import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { DollarSign, Clock, CheckCircle, FileText, AlertTriangle } from "lucide-react";

const Refund = () => (
  <div className="min-h-screen bg-gradient-to-b from-white via-green-50/20 to-white">
    <Navbar />
    <section className="pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-600 to-emerald-600 mb-6 shadow-lg">
            <DollarSign className="h-8 w-8 text-white" />
          </div>
          <h1 className="font-display text-5xl font-black text-gray-900 mb-4">Refund Policy</h1>
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
                <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                  <FileText className="h-5 w-5 text-green-600" />
                </div>
                <h2 className="font-display text-2xl font-bold text-gray-900">1. Overview</h2>
              </div>
              <p>Castinity is a third-party service assistance startup. This refund policy applies solely to the service fees charged by Castinity for our informational assistance. It does not apply to any charges from your internet, cable, or streaming service provider.</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="h-6 w-6 text-blue-600" />
                <h2 className="font-display text-2xl font-bold text-gray-900">2. Refund Window</h2>
              </div>
              <p className="text-gray-700">Refund requests can be submitted within 7 to 15 days of service purchase, depending on the type of assistance provided. The specific refund window may vary based on the nature and scope of the guidance delivered.</p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-purple-600" />
                </div>
                <h2 className="font-display text-2xl font-bold text-gray-900">3. Eligibility</h2>
              </div>
              <p className="mb-3">Refund eligibility depends on:</p>
              <ul className="list-none space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>The type of assistance service purchased</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Whether the informational assistance has already been delivered</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>The timing of the refund request relative to the service purchase date</span>
                </li>
              </ul>
              <p className="mt-4 text-gray-600 italic">We do not offer unconditional refund guarantees. Each request is reviewed on a case-by-case basis.</p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <h2 className="font-display text-2xl font-bold text-gray-900">4. How to Request a Refund</h2>
              </div>
              <p>To submit a refund request, contact our team at <a href="mailto:support@castinity.com" className="text-green-600 hover:underline font-semibold">support@castinity.com</a> or call <a href="tel:+18886815944" className="text-green-600 hover:underline font-semibold">(888) 681-5944</a>. Please include your service purchase date and a brief description of the assistance received.</p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-blue-600" />
                </div>
                <h2 className="font-display text-2xl font-bold text-gray-900">5. Processing</h2>
              </div>
              <p>Approved refunds are typically processed within 5–10 business days. Refunds will be issued to the original payment method used for the service purchase.</p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200">
              <div className="flex items-center gap-3 mb-3">
                <AlertTriangle className="h-6 w-6 text-amber-600" />
                <h2 className="font-display text-2xl font-bold text-gray-900">6. Important Notice</h2>
              </div>
              <p className="text-gray-700">Castinity is a third-party service assistance provider. We are not affiliated with, authorized by, or endorsed by any internet, broadband, or cable TV service provider. Our refund policy covers only Castinity service fees — not any provider-billed charges.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Refund;
