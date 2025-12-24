import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative h-screen bg-cover bg-center bg-gradient-to-r from-blue-900/90 to-teal-900/90"
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1600)',
        backgroundBlendMode: 'overlay'
      }}>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          Welcome to Cedar Bay Trail Co.
        </h1>
        <p className="text-xl md:text-2xl text-gray-100 mb-8 drop-shadow-md max-w-3xl">
          Experience premier fat biking and snowshoeing trails in beautiful Sioux Lookout, Ontario
        </p>
        <div className="mb-8 bg-orange-500/95 text-white p-6 rounded-lg shadow-lg max-w-2xl">
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
