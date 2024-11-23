export default function ModelVillage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="relative h-80 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1464495729109-62eef966c318?auto=format&fit=crop&q=80&w=2940"
          alt="The Model Village"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">The Model Village</h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl leading-relaxed text-gray-700 mb-8">
            Step into a miniature marvel at Bourton&apos;s famous Model Village, a perfect one-ninth scale replica of the actual village. Built in 1937, this incredible attraction offers a unique bird&apos;s-eye view of Bourton-on-the-Water in miniature.
          </p>

          {/* Highlights and Visitor Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            {/* Highlights Section */}
            <div className="bg-blue-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Highlights</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Authentic Cotswold stone miniature buildings
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Precise 1:9 scale model of the village
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Miniature gardens with real bonsai trees
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Model of the model village within the model village!
                </li>
              </ul>
            </div>

            {/* Visitor Information Section */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Visitor Information</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                  Open daily from March to November
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                  Guided tours available
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                  Photography welcome
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                  Accessible for wheelchair users
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
