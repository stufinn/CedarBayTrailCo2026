import { Link } from 'react-router-dom';
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
        <div className="mb-8 bg-orange-500/95 text-white p-6 rounded-lg shadow-xl border border-white/20 max-w-2xl">
          <p className="text-lg font-semibold">Before you ride or hike the trails,</p>
          <p className="text-lg font-semibold">please be sure to register.</p>
        </div>
        <Link
          to="/register"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors shadow-lg"
        >
          Register Now
        </Link>
      </div>
    </div>
  );
}
