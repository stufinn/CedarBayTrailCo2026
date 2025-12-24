import { MapPin, Clock, AlertCircle } from 'lucide-react';

export default function TrailInfo() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Explore Our Trails</h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg aspect-video flex items-center justify-center">
              <div className="text-center text-gray-600 p-8">
                <MapPin className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <p className="text-lg font-semibold">Trail Map Display</p>
                <p className="text-sm mt-2">Your updated trail map will be displayed here</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4 text-center">Interactive trail map showing all routes and facilities</p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Trail Head Location</h3>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">Cedar Bay Recreational Complex</span>
                </p>
                <p className="text-gray-600 text-sm">
                  Located in beautiful Sioux Lookout, Ontario, our trail head provides easy access to a network of well-maintained fat biking and snowshoeing routes.
                </p>
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
    </section>
  );
}
