import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <section className="hero min-h-screen flex items-center justify-center text-center text-black bg-[url('/hero.jpg')] bg-cover bg-center">
        <div className="hero-content animate-fade-in">
          <h1 className="text-6xl font-bold mb-4">Bourton-on-the-Water</h1>
          <p className="text-xl">The Venice of the Cotswolds</p>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto px-4">
          <div className="section-title fade-in">
            <h2 className="text-4xl font-bold mb-4">Discover the Charm</h2>
            <p className="text-xl text-gray-600">
              Welcome to one of England&apos;s most picturesque villages, where timeless beauty meets rich heritage
              in the heart of the Cotswolds.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="feature-card fade-in">
              <h3 className="text-2xl font-bold mb-6">Timeless Beauty</h3>
              <p className="text-gray-600">
                Experience our historic village, where honey-colored stone buildings and tranquil waters create scenes
                of perfect harmony.
              </p>
            </div>
            <div className="feature-card fade-in">
              <h3 className="text-2xl font-bold mb-6">Rich Heritage</h3>
              <p className="text-gray-600">
                Discover centuries of history woven into every street and stone, from Roman roots to Victorian splendor.
              </p>
            </div>
            <div className="feature-card fade-in">
              <h3 className="text-2xl font-bold mb-6">Natural Wonder</h3>
              <p className="text-gray-600">
                Immerse yourself in the stunning Cotswold landscape, with rolling hills and the gentle flow of the River
                Windrush.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2 className="text-4xl font-bold mb-4">Signature Experiences</h2>
            <p className="text-xl text-gray-600">
              Discover the unique attractions that make Bourton-on-the-Water a must-visit destination.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="attraction-card">
              <h3 className="text-2xl font-bold mb-6">The River Windrush</h3>
              <p className="text-gray-600 mb-4">
                Meander along our iconic low bridges spanning the crystal-clear waters of the River Windrush, the heart
                and soul of our village.
              </p>
              <Link href="/river-windrush" className="learn-more">
                Explore More
              </Link>
            </div>
            <div className="attraction-card">
              <h3 className="text-2xl font-bold mb-6">Model Village</h3>
              <p className="text-gray-600 mb-4">
                Step into a miniature marvel, a perfect 1:9 scale replica of our village crafted in authentic Cotswold
                stone.
              </p>
              <Link href="/model-village" className="learn-more">
                Discover Details
              </Link>
            </div>
            <div className="attraction-card">
              <h3 className="text-2xl font-bold mb-6">Birdland Park</h3>
              <p className="text-gray-600 mb-4">
                Meet over 500 feathered friends in our magnificent gardens, home to one of England&apos;s largest
                collections of exotic birds.
              </p>
              <Link href="/birdland" className="learn-more">
                Plan Your Visit
              </Link>
            </div>
            <div className="attraction-card">
              <h3 className="text-2xl font-bold mb-6">Motoring Museum</h3>
              <p className="text-gray-600 mb-4">
                Journey through time in our celebrated museum, showcasing vintage vehicles and motoring memorabilia from
                every era.
              </p>
              <Link href="/motoring-museum" className="learn-more">
                Step Back in Time
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2 className="text-4xl font-bold mb-4">Plan Your Escape</h2>
            <p className="text-xl text-gray-600">Your perfect Cotswold adventure begins here</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="feature-card">
              <h3 className="text-2xl font-bold mb-6">Location</h3>
              <p className="text-gray-600">Bourton-on-the-Water, Gloucestershire, England</p>
            </div>
            <div className="feature-card">
              <h3 className="text-2xl font-bold mb-6">Getting Here</h3>
              <p className="text-gray-600">
                Regular connections via Moreton-in-Marsh railway station and local bus services
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="mailto:discoverbourtononthewater@gmail.com" className="cta-button">Plan Your Visit</a>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2 className="text-4xl font-bold mb-4">Stay Connected</h2>
            <p className="text-xl text-gray-600">
              Join our community and be the first to hear about special events and hidden gems
            </p>
          </div>
          <div className="text-center">
            <a href="mailto:discoverbourtononthewater@gmail.com" className="email-contact block mb-8">
              discoverbourtononthewater@gmail.com
            </a>
            <div className="social-links">
              <p className="text-gray-600">Share your moments with #BourtonOnTheWater</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
