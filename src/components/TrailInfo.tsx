import { MapPin, Clock, AlertCircle, ExternalLink, X } from 'lucide-react';
import { useState } from 'react';
import OptimizedImage from './OptimizedImage';
import trailMapSmallWebp from '../assets/trail-map/trailMap-1024w.webp';
import trailMapSmallPng from '../assets/trail-map/trailMap-1024w.png';
import trailMapLargeWebp from '../assets/trail-map/trailMap-1920w.webp';
import trailMapLargePng from '../assets/trail-map/trailMap-1920w.png';

export default function TrailInfo() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Explore Our Trails</h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <div
              className="bg-gray-200 rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-200"
              onClick={() => setIsModalOpen(true)}
            >
              <OptimizedImage
                src={trailMapSmallPng}
                alt="Cedar Bay Trail Map 2021"
                className="w-full h-auto"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
                webpSrcSet={trailMapSmallWebp}
                fallbackSrcSet={trailMapSmallPng}
                webpType="image/webp"
                fallbackType="image/png"
              />
            </div>
            <p className="text-sm text-gray-600 mt-4 text-center">Click map to view full size</p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Trail Head Location</h3>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">Cedar Bay Recreational Complex</span>
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  Located in beautiful Sioux Lookout, Ontario, our trail head provides easy access to a network of well-maintained fat biking and snowshoeing routes.
                </p>
                <a
                  href="https://www.google.com/maps/place/Cedar+Bay+and+Friends/@50.103549,-91.934902,1312m/data=!3m1!1e3!4m6!3m5!1s0x52989b8d278bddff:0x738f9d8de95fb45b!8m2!3d50.1035494!4d-91.9349022!16s%2Fg%2F11f7780_0j?hl=en&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors duration-200 group"
                >
                  <MapPin className="w-4 h-4" />
                  <span>View on Google Maps</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-bold text-gray-900">What to Expect</h4>

              <div className="flex space-x-4">
                <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Well-Maintained Trails</p>
                  <p className="text-gray-600 text-sm">Regularly groomed and maintained throughout the season</p>
                </div>
              </div>

              <div className="flex space-x-4">
                <Clock className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Seasonal Access</p>
                  <p className="text-gray-600 text-sm">Available during winter months with snow coverage</p>
                </div>
              </div>

              <div className="flex space-x-4">
                <MapPin className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Multiple Route Options</p>
                  <p className="text-gray-600 text-sm">Paths for all skill levels from beginners to advanced</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative max-w-full max-h-full flex items-center justify-center">
            <button
              className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors duration-200 z-10"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close modal"
            >
              <X className="w-6 h-6 text-gray-900" />
            </button>
            <div onClick={(e) => e.stopPropagation()} className="max-w-full max-h-[90vh]">
              <OptimizedImage
                src={trailMapLargePng}
                alt="Cedar Bay Trail Map 2021 - Full Size"
                className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg"
                priority={true}
                sizes="100vw"
                webpSrcSet={trailMapLargeWebp}
                fallbackSrcSet={trailMapLargePng}
                webpType="image/webp"
                fallbackType="image/png"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
