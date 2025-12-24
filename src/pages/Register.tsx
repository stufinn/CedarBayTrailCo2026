import { Check, Mail, FileText, Zap, Copy, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import BudgetBreakdown from '../components/BudgetBreakdown';

export default function Register() {
  const [copied, setCopied] = useState(false);
  const emailAddress = 'cedarbaytrailcompany@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-gray-900 mb-4 text-center">Member Registration</h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Join our community and gain access to amazing fat biking and snowshoeing trails.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">2026 Pricing & Membership</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Annual Memberships</h3>
                <div className="space-y-3">
                  <div className="bg-white border-2 border-gray-200 rounded-lg p-4 transition-colors">
                    <div className="flex justify-between items-start mb-1">
                      <p className="font-semibold text-gray-900">Single Fatbike</p>
                      <span className="text-2xl font-bold text-blue-600">$100</span>
                    </div>
                    <p className="text-sm text-gray-600">Individual access to all fat biking trails</p>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-lg p-4 transition-colors">
                    <div className="flex justify-between items-start mb-1">
                      <p className="font-semibold text-gray-900">Family Fatbike</p>
                      <span className="text-2xl font-bold text-blue-600">$150</span>
                    </div>
                    <p className="text-sm text-gray-600">Up to 4 family members on fat biking trails</p>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-lg p-4 transition-colors">
                    <div className="flex justify-between items-start mb-1">
                      <p className="font-semibold text-gray-900">Single Snowshoe</p>
                      <span className="text-2xl font-bold text-teal-600">$30</span>
                    </div>
                    <p className="text-sm text-gray-600">Individual access to all snowshoeing trails</p>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-lg p-4 transition-colors">
                    <div className="flex justify-between items-start mb-1">
                      <p className="font-semibold text-gray-900">Family Snowshoe</p>
                      <span className="text-2xl font-bold text-teal-600">$50</span>
                    </div>
                    <p className="text-sm text-gray-600">Up to 4 family members on snowshoeing trails</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Day Passes</h3>
                <div className="space-y-3">
                  <div className="bg-white border-2 border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <p className="font-semibold text-gray-900">Daily Fatbike Pass</p>
                      <span className="text-2xl font-bold text-blue-600">$15</span>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <p className="font-semibold text-gray-900">Daily Snowshoe Pass</p>
                      <span className="text-2xl font-bold text-teal-600">$5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Registration Process</h2>
            <p className="text-gray-600 mb-8">Complete these three simple steps to start enjoying the trails:</p>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border-2 border-blue-200">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white font-bold text-lg">
                      1
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center space-x-2">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <span>Send Payment via E-Transfer</span>
                    </h3>
                    <p className="text-gray-700 mb-3">Send an e-transfer for your chosen membership or day pass:</p>
                    <div className="bg-white rounded p-3 mb-3 flex items-center justify-between gap-2">
                      <p className="font-mono text-sm font-semibold text-gray-900 break-all">{emailAddress}</p>
                      <button
                        onClick={handleCopyEmail}
                        className="flex-shrink-0 p-2 hover:bg-gray-100 rounded transition-colors group relative"
                        aria-label="Copy email address"
                      >
                        {copied ? (
                          <Check className="w-4 h-4 text-green-600" />
                        ) : (
                          <Copy className="w-4 h-4 text-gray-600 group-hover:text-blue-600" />
                        )}
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                          {copied ? 'Copied!' : 'Copy email'}
                        </span>
                      </button>
                    </div>
                    <p className="text-sm text-gray-600">Include your name and membership type in the transfer note</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg p-6 border-2 border-teal-200">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-teal-600 text-white font-bold text-lg">
                      2
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center space-x-2">
                      <FileText className="w-5 h-5 text-teal-600" />
                      <span>Sign & Submit Waiver</span>
                    </h3>
                    <p className="text-gray-700 mb-3">Complete the online waiver form:</p>
                    <a
                      href="https://app.waiversign.com/e/5f995bf516eb010019446497/doc/5f99742ad56fea00190cafa3?event=none"
                      target='_blank'
                      className="inline-flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition-colors font-medium text-sm mb-3 relative group"
                      title="Opens in new tab"
                    >
                      <span>Access Waiver Portal</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 border-2 border-green-200">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-600 text-white font-bold text-lg">
                      3
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center space-x-2">
                      <Check className="w-5 h-5 text-green-600" />
                      <span>Get Trail Access</span>
                    </h3>
                    <p className="text-gray-700">Once we confirm your payment and receive your signed waiver, you'll be all set to enjoy the trails!</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-amber-50 border-l-4 border-amber-500 p-6 rounded">
              <div className="flex items-start space-x-3">
                <Zap className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Questions?</p>
                  <p className="text-gray-700 text-sm">Contact us at <a href="mailto:cedarbaytrailcompany@gmail.com" className="font-semibold text-amber-700 hover:underline">cedarbaytrailcompany@gmail.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BudgetBreakdown />
    </div>
  );
}
