import { motion } from 'framer-motion';

export default function SpotneraLandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-green-50 to-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-gradient-to-br from-green-100/30 to-transparent"
        />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span>📍</span>
              Live local deals & businesses
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
              Discover places <span className="text-green-500">near you</span> in real time.
            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-xl leading-relaxed">
              Spotnera connects customers with nearby restaurants, hotels, shops and local businesses through live promotions, maps, ratings and instant chat.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="bg-green-500 hover:bg-green-600 transition text-white px-7 py-4 rounded-2xl text-lg font-semibold shadow-lg shadow-green-200"
              >
                Download App
              </motion.button>

              <button className="border border-slate-300 hover:border-green-400 hover:text-green-600 transition px-7 py-4 rounded-2xl text-lg font-semibold">
                Explore Map
              </button>
            </div>

            <div className="flex items-center gap-8 mt-10 text-sm text-slate-500">
              <div>
                <p className="text-2xl font-bold text-slate-900">10K+</p>
                Users
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">1K+</p>
                Businesses
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">Live</p>
                Promotions
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-40"></div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative bg-white rounded-[40px] shadow-2xl p-4 border border-slate-100 w-[320px]"
            >
              <div className="bg-slate-50 rounded-[30px] overflow-hidden">
                <div className="p-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">Current location</p>
                    <h3 className="font-semibold text-lg">Downtown</h3>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-green-500 flex items-center justify-center text-white text-xl">
                    📍
                  </div>
                </div>

                <div className="px-5 pb-5">
                  <div className="bg-white rounded-3xl p-4 shadow-sm border border-slate-100 mb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold">Burger House</p>
                        <p className="text-sm text-green-600">20% OFF now</p>
                      </div>
                      <div className="bg-green-100 text-green-700 px-3 py-2 rounded-xl text-sm font-bold">
                        LIVE
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-3xl p-4 shadow-sm border border-slate-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold">Coffee Corner</p>
                        <p className="text-sm text-slate-500">Free cookie with coffee</p>
                      </div>
                      <div className="text-yellow-500 font-bold">⭐ 4.8</div>
                    </div>
                  </div>
                </div>
              </motion.div>
          </div>
        </motion.div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold">Everything nearby, all in one app.</h2>
          <p className="mt-4 text-slate-600 text-lg">
            Explore businesses in real time, chat directly, discover live discounts and save money around your city.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {[
            {
              icon: '🗺️',
              title: 'Live Map',
              desc: 'See nearby businesses and promotions instantly.'
            },
            {
              icon: '💬',
              title: 'Instant Chat',
              desc: 'Talk directly with restaurants, hotels and stores.'
            },
            {
              icon: '⭐',
              title: 'Ratings',
              desc: 'Read reviews and discover trusted places.'
            },
            {
              icon: '🔥',
              title: 'Real-Time Offers',
              desc: 'Businesses can launch instant live promotions.'
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-2xl transition"
            >
              <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center text-2xl mb-5">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-slate-600 mt-3 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BUSINESS CTA */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Grow your business with live visibility.
            </h2>

            <p className="mt-6 text-slate-300 text-lg leading-relaxed">
              Restaurants, hotels, shops and local businesses can attract nearby customers instantly through live promotions and map visibility.
            </p>

            <button className="mt-8 bg-green-500 hover:bg-green-600 transition px-7 py-4 rounded-2xl text-lg font-semibold">
              Register Your Business
            </button>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-[36px] p-8 backdrop-blur-lg">
            <div className="space-y-5">
              <div className="bg-white/10 rounded-2xl p-5 flex items-center justify-between">
                <div>
                  <p className="font-semibold">Promotion Active</p>
                  <p className="text-sm text-slate-300">2 hours remaining</p>
                </div>
                <div className="w-4 h-4 rounded-full bg-green-400"></div>
              </div>

              <div className="bg-white/10 rounded-2xl p-5 flex items-center justify-between">
                <div>
                  <p className="font-semibold">Customers Nearby</p>
                  <p className="text-sm text-slate-300">+18 users around your area</p>
                </div>
                <div className="text-green-400 font-bold">LIVE</div>
              </div>

              <div className="bg-white/10 rounded-2xl p-5 flex items-center justify-between">
                <div>
                  <p className="font-semibold">New Messages</p>
                  <p className="text-sm text-slate-300">5 unread conversations</p>
                </div>
                <div className="text-xl">💬</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-green-500">Spotnera</h3>
            <p className="text-slate-500 mt-2">Discover. Save. Enjoy Nearby.</p>
          </div>

          <div className="flex gap-8 text-slate-500">
            <a href="#" className="hover:text-green-500 transition">Home</a>
            <a href="#" className="hover:text-green-500 transition">Features</a>
            <a href="#" className="hover:text-green-500 transition">Businesses</a>
            <a href="#" className="hover:text-green-500 transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
