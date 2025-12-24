import { Link } from 'react-router-dom';
import { Mountain } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <Mountain className="w-8 h-8 text-blue-600 group-hover:text-blue-700 transition-colors" />
            <span className="font-bold text-xl text-gray-900">Cedar Bay Trail Co.</span>
          </Link>

          <nav className="flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="/register"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Register
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
