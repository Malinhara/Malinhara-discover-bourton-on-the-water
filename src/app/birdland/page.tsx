import { Bird, Clock, MapPin, Users } from 'lucide-react';
import Image from 'next/image'; // Import Image component
import Link from 'next/link';

export default function Birdland() {
  return (
    <main className="min-h-screen bg-white">
      <header className="relative h-80 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&q=80&w=2940"
          alt="Birdland Park & Gardens"
          layout="fill" // Image should cover the entire area
          objectFit="cover" // Ensures the image stays fully covered
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">
            Birdland Park & Gardens
          </h1>
        </div>
      </header>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl leading-relaxed text-gray-700 mb-8">
            Discover over 500 birds at Birdland Park & Gardens, set in nine acres of beautiful gardens and woodland. Home to England&apos;s only breeding colony of King Penguins, this unique attraction offers an unforgettable wildlife experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <div className="bg-blue-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Bird className="w-8 h-8 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">
                  Featured Attractions
                </h2>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Penguin Shore - featuring King and Humboldt Penguins
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Flamingo Point
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Marshmouth Nature Reserve
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Jurassic Journey
                </li>
              </ul>
            </div>

            <div className="bg-emerald-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-8 h-8 text-emerald-600" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">
                  Daily Activities
                </h2>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  Penguin Feeding Shows
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  Meet the Keeper sessions
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  Bird of Prey Displays
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  Educational Talks
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-8 h-8 text-amber-600" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">
                  Location Features
                </h2>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                  Nine acres of gardens and woodland
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                  Accessible pathways throughout
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                  Café and picnic areas
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                  Gift shop
                </li>
              </ul>
            </div>

            <div className="bg-rose-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-8 h-8 text-rose-600" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">
                  Visitor Information
                </h2>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-rose-500 rounded-full"></span>
                  Open daily year-round
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-rose-500 rounded-full"></span>
                  Family-friendly facilities
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-rose-500 rounded-full"></span>
                  Wheelchair accessible
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-rose-500 rounded-full"></span>
                  Free parking available
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <Link href="/">
            <a className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-800 transition-colors duration-300">
              ← Back to Home
            </a>
          </Link>
        </div>
      </div>
    </main>
  );
}
