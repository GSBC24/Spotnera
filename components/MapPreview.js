"use client";

import Map, { Marker } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import { motion } from "framer-motion";

const businesses = [
  {
    id: 1,
    name: "Burger House",
    lat: 40.7128,
    lng: -74.006,
    color: "bg-green-500",
    deal: "20% OFF",
  },
  {
    id: 2,
    name: "Coffee Corner",
    lat: 40.7145,
    lng: -74.004,
    color: "bg-yellow-400",
    deal: "Buy 1 Get 1",
  },
  {
    id: 3,
    name: "Sushi Place",
    lat: 40.711,
    lng: -74.008,
    color: "bg-blue-500",
    deal: "Free Delivery",
  },
];

export default function MapPreview() {
  return (
    <div className="w-full h-[340px] rounded-[30px] overflow-hidden relative">

      {/* MAP */}
      <Map
        mapboxAccessToken={
          process.env.NEXT_PUBLIC_MAPBOX_TOKEN
        }
        initialViewState={{
          longitude: -74.006,
          latitude: 40.7128,
          zoom: 13,
        }}
        mapStyle="mapbox://styles/mapbox/dark-v11"
      >

        {/* USER LOCATION */}
        <Marker
          longitude={-74.005}
          latitude={40.7137}
          anchor="center"
        >

          <div className="relative flex items-center justify-center">

            {/* Pulse Ring */}
            <motion.div
              animate={{
                scale: [1, 2.5],
                opacity: [0.6, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="absolute w-14 h-14 rounded-full bg-green-400"
            />

            {/* User Dot */}
            <div className="w-5 h-5 rounded-full bg-green-400 border-2 border-white shadow-[0_0_25px_rgba(74,222,128,1)]" />

          </div>

        </Marker>

        {/* BUSINESS MARKERS */}
        {businesses.map((business) => (
          <Marker
            key={business.id}
            longitude={business.lng}
            latitude={business.lat}
            anchor="center"
          >

            <div className="relative flex items-center justify-center">

              {/* Hotspot Ring */}
              <motion.div
                animate={{
                  scale: [1, 2],
                  opacity: [0.5, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                }}
                className={`absolute w-12 h-12 rounded-full ${business.color}`}
              />

              {/* Main Marker */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className={`w-5 h-5 rounded-full ${business.color} border border-white shadow-[0_0_25px_rgba(255,255,255,0.8)]`}
              />

            </div>

          </Marker>
        ))}

      </Map>

      {/* TOP LIVE BAR */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="absolute top-4 left-4 right-4 bg-black/50 backdrop-blur-2xl border border-white/10 rounded-2xl px-4 py-3 flex items-center justify-between"
      >

        <div className="flex items-center gap-2">

          <motion.div
            animate={{
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="w-3 h-3 rounded-full bg-green-400"
          />

          <span className="text-sm text-white">
            12 people discovering deals nearby
          </span>

        </div>

        <span className="text-green-400 text-sm font-semibold">
          LIVE
        </span>

      </motion.div>

      {/* BUSINESS CAROUSEL */}
      <div className="absolute bottom-5 left-0 right-0 px-4 overflow-x-auto scrollbar-hide">

        <div className="flex gap-4 min-w-max">

          {businesses.map((business) => (
            <motion.div
              key={business.id}
              whileHover={{
                scale: 1.03,
                y: -4,
              }}
              className="bg-black/50 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 min-w-[220px]"
            >

              <div className="flex items-center justify-between">

                <div>
                  <p className="font-semibold text-white">
                    {business.name}
                  </p>

                  <p className="text-sm text-green-400">
                    {business.deal}
                  </p>
                </div>

                <div className="text-yellow-400 font-bold">
                  ⭐ 4.8
                </div>

              </div>

            </motion.div>
          ))}

        </div>
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-black/50" />

    </div>
  );
}