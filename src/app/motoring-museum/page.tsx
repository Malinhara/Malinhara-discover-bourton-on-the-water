import Image from 'next/image';
import Link from 'next/link';

export default function MotoringMuseum() {
  return (
    <main className="min-h-screen bg-white">
      {/* Custom header with title and image */}
      <header className="relative h-80 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1511806753076-d1b82a6dd7c8?auto=format&fit=crop&q=80&w=2940"
          alt="A classic car at the Cotswold Motoring Museum"
          className="w-full h-80 object-cover"
          width={2940} // Ensure the width and height are set to optimize image loading
          height={400} // Set the height for aspect ratio consistency
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center py-16">
          <h1 className="text-4xl font-bold text-white">Cotswold Motoring Museum</h1>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="prose">
          <p className="text-lg text-gray-700 mb-8">
            Journey through the history of motoring at the Cotswold Motoring Museum. From vintage cars to classic motorcycles, this fascinating collection spans the evolution of road transport throughout the 20th century.
          </p>

          {/* Left and Right Section Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Section: Museum Highlights */}
            <section className="bg-blue-50 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Museum Highlights</h2>
              <ul className="space-y-3 text-gray-700">
                <li>Vintage car collection</li>
                <li>Classic motorcycles</li>
                <li>Original enamel signs</li>
                <li>Meet Brum &mdash; the famous TV car</li>
              </ul>
            </section>

            {/* Right Section: Exhibition Areas */}
            <section className="bg-gray-50 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Exhibition Areas</h2>
              <ul className="space-y-3 text-gray-700">
                <li>The Mill Gallery</li>
                <li>The Blacksmith&apos;s Workshop</li>
                <li>Jack Lake&apos;s Garage</li>
                <li>Vintage Toy Collection</li>
              </ul>
            </section>
          </div>

          <div className="mt-12 text-center">
            <Link href="/">
              <a className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-800 transition-colors duration-300">
                ← Back to Home
              </a>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
