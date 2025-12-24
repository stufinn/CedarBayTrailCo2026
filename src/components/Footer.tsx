import { Facebook, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Cedar Bay Trail Co.</h3>
            <p className="text-gray-400 text-sm">Maintaining fat biking and snowshoeing trails in Sioux Lookout, Ontario.</p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <a
              href="mailto:cedarbaytrailcompany@gmail.com"
              className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>cedarbaytrailcompany@gmail.com</span>
            </a>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Community</h3>
            <a
              href="https://www.facebook.com/groups/cedarbaytrailco"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Facebook className="w-5 h-5" />
              <span>Join our Facebook group</span>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Cedar Bay Trail Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
