"use client";

import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import { useState } from "react";
import batteryTrunk from "./media/battery_trunk.jpg";
import bayWiring from "./media/bay_wiring.jpeg";
import engineBay from "./media/engine_bay.png";
import engineExtract from "./media/engine_extract.png";
import motorMount from "./media/motor_mount.png";
import gasContainer from "./media/gas_container.jpeg";
import motor from "./media/motor.jpeg";
import bayWiring3 from "./media/bay_wiring3.jpeg";
import motorTransmission from "./media/motor_transmission.jpeg";
import charging from "./media/charging.jpeg";

type MediaItem =
  | { id: number; type: "image"; src: StaticImageData; alt: string }
  | { id: number; type: "video"; src: string; alt: string };

/* EDIT for image sizes*/
const THUMB_WIDTH = 150;

const jeepVideoSrc = "/media/Jeep.mp4";

const mediaItems: MediaItem[] = [
  { id: 0, type: "image", src: motorMount, alt: "Motor mount mockup" },
  { id: 2, type: "image", src: batteryTrunk, alt: "Battery pack in trunk" },
  { id: 3, type: "image", src: bayWiring, alt: "Engine bay wiring" },
  { id: 4, type: "image", src: engineBay, alt: "Engine bay overview" },
  { id: 5, type: "image", src: engineExtract, alt: "Engine extraction" },
  { id: 6, type: "image", src: gasContainer, alt: "Gas container" },
  { id: 7, type: "image", src: motor, alt: "Motor" },
  { id: 8, type: "image", src: bayWiring3, alt: "Bay wiring 2" },
  { id: 9, type: "image", src: motorTransmission, alt: "Motor transmission" },
  { id: 10, type: "image", src: charging, alt: "Charging" },
];

export default function ProjectAtlasPage() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const activeItem = activeId !== null ? mediaItems.find((m) => m.id === activeId) : null;

  return (
    <div className="min-h-screen bg-white text-neutral-800">
      <main className="mx-auto max-w-4xl px-8 py-16 space-y-8 font-serif">
        <div className="flex items-center justify-between text-lg font-normal">
          <Link
            href="/"
            className="transition-opacity hover:opacity-70"
          >
            ← back
          </Link>
        </div>

        <header className="space-y-2">
          <h1 className="text-2xl font-normal">Jeep EV Conversion</h1>
          <p className="text-lg text-black/70">
            In highschool, I rebuilt a junkyard 2001 Jeep Cherokee into a fully functional electric vehicle. 
            It took me a year and a half working on the weekends while following online blogs, youtube videos, and going to great lengths to source used components on a tight budget. 
            I designed the entire high-voltage architecture including the powertrain, custom 135V / 26 kWh lithium-ion battery pack, main contactor stack, and protection/fusing systems. 
            I assembled the battery pack from salvaged Nissan Leaf modules and integrated a CANbus BMS for monitoring, balancing, and safety. 
            I also fabricated custom motor and battery mounts, handled all mechanical and electrical packaging, and performed full system bring-up and debugging. 
            The Jeep achieves roughly 80 miles of range, a 70 mph top speed, supports J1772 charging, and operates at up to 500A peak current.
          </p>
          <a
            href="https://www.youtube.com/@TheEVProj"
            className="underline hover:opacity-70 text-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch the videos.
          </a>
        </header>

        <div className="space-y-4">
          <div className="flex justify-start">
            <button
              type="button"
              onClick={() => setActiveId(9)}
              className="group overflow-hidden rounded-lg bg-gray-50 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
              style={{ width: `${THUMB_WIDTH*3}px`, height: `${THUMB_WIDTH * 2}px` }}
              aria-label="Expand Jeep EV video"
            >
              <video
                src={jeepVideoSrc}
                muted
                autoPlay
                playsInline
                controls={false}
                className="h-full w-full object-cover transition duration-200 group-hover:scale-[1.02]"
                style={{ pointerEvents: "none" }}
              />
            </button>
          </div>
          <div
            className="mx-auto grid w-full max-w-4xl gap-4"
            style={{
              gridTemplateColumns: `repeat(auto-fit, minmax(${THUMB_WIDTH}px, 1fr))`,
            }}
          >
            {mediaItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveId(item.id)}
                className="group overflow-hidden rounded-lg bg-gray-50 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                {item.type === "image" ? (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full object-cover transition duration-200 group-hover:scale-[1.02]"
                    placeholder="empty"
                    priority={item.id < 2}
                  />
                ) : (
                  <video
                    src={item.src}
                    muted
                    playsInline
                    className="h-full w-full object-cover transition duration-200 group-hover:scale-[1.02]"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </main>

      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveId(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-5xl rounded-lg bg-black p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveId(null)}
              className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-black shadow hover:bg-white"
            >
              Close
            </button>
            {activeItem.type === "image" ? (
              <Image
                src={activeItem.src}
                alt={activeItem.alt}
                className="h-full w-full object-contain"
                placeholder="empty"
                priority
              />
            ) : (
              <video
                src={activeItem.src}
                controls
                autoPlay
                playsInline
                className="max-h-[82vh] max-w-[90vw] w-full object-contain"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

