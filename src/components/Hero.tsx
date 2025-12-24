import { Link } from 'react-router-dom';
import { AlertTriangle, ArrowRight } from 'lucide-react';
// Import your photo (replace 'your-trail-photo.jpg' with your actual filename)
import heroImage from '../assets/tim-foster-RI5vBBS77fQ-unsplash.jpg';

export default function Hero() {
  return (
    <div className="relative h-screen bg-cover bg-center bg-gradient-to-r from-black/80 to-black/60"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundBlendMode: 'overlay'
      }}>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/20">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-2xl shadow-black text-shadow-black px-6 py-2 rounded-lg">
          Welcome to Cedar Bay Trail Co.
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-xl shadow-black max-w-3xl font-semibold  px-4 py-2 rounded-lg">
          Experience premier fat biking and snowshoeing trails in beautiful Sioux Lookout, Ontario
        </p>
        <div className="mb-8 bg-gradient-to-r from-orange-500/80 to-red-500/80 text-white p-6 rounded-xl shadow-2xl max-w-2xl backdrop-blur-md">
          <div className="flex items-center justify-center mb-3">
            <AlertTriangle className="w-6 h-6 mr-2 animate-pulse" />
            <span className="text-lg font-bold uppercase tracking-wide">Important Notice</span>
          </div>
          <p className="text-lg font-semibold">Before you ride or hike the trails,</p>
          <p className="text-lg font-semibold">please be sure to register.</p>
        </div>
        <Link
          to="/register"
          className="group bg-gradient-to-r from-blue-600/80 to-blue-700/80 hover:from-blue-700/90 hover:to-blue-800/90 text-white font-bold py-4 px-10 rounded-xl text-lg transition-all duration-300 shadow-2xl transform hover:scale-105 hover:shadow-blue-500/25 flex items-center space-x-2"
        >
          <span>Register Now</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
      
      {/* Photo Attribution */}
      <div className="absolute bottom-2 right-2 text-white/70 text-xs bg-black/30 px-2 py-1 rounded backdrop-blur-sm">
        Photo by{' '}
        <a 
          href="https://unsplash.com/@timberfoster?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          className="hover:text-white transition-colors underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tim Foster
        </a>{' '}
        on{' '}
        <a 
          href="https://unsplash.com/photos/a-couple-of-bikes-that-are-sitting-in-the-snow-RI5vBBS77fQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          className="hover:text-white transition-colors underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Unsplash
        </a>
      </div>
    </div>
  );
}
