export default function RiverWindrush() {
  return (
    <main className="min-h-screen bg-white">
      {/* Custom header with title and image */}
      <header className="relative">
        <img
          src="https://images.unsplash.com/photo-1526705067303-02f8b2b31494?auto=format&fit=crop&q=80&w=2940" // Add your desired image URL here
          alt="The River Windrush"
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center py-16">
          <h1 className="text-4xl font-bold text-white">The River Windrush</h1>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 mb-8">
            The River Windrush is the defining feature of Bourton-on-the-Water, gracefully winding through the heart of our village. The crystal-clear waters are spanned by a series of elegant low stone bridges, some dating back to the 18th century.
          </p>

          {/* Left and Right Section Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Section: Key Features */}
            <section className="bg-blue-50 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Key Features</h2>
              <ul className="space-y-3 text-gray-700">
                <li>Five iconic low bridges spanning the river</li>
                <li>Crystal-clear waters perfect for paddling in summer</li>
                <li>Rich wildlife habitat supporting various species</li>
                <li>Beautiful riverside walking paths</li>
              </ul>
            </section>

            {/* Right Section: Best Times to Visit */}
            <section className="bg-gray-50 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Best Times to Visit</h2>
              <p className="mb-4 text-gray-700">
                The river is beautiful year-round, but especially charming in:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li>Spring: When wildflowers bloom along the banks</li>
                <li>Summer: Perfect for paddling and picnics</li>
                <li>Autumn: When fallen leaves create stunning reflections</li>
              </ul>
            </section>
          </div>

          
        </div>
      </div>
    </main>
  );
}
