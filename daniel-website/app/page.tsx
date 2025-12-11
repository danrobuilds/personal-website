"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type SectionItem = {
  label: string;
  href?: string;
  inline?: boolean;
};

type Section = {
  id: string;
  title: string;
  items: SectionItem[];
};

const sections: Section[] = [
  {
    id: "about",
    title: "about",
    items: [
      { label: "Hey! I'm Daniel. I study ECE at Harvard and grew up in the Bay Area, California. I'm currently focused on building products to help the people around me. When I'm not working on something new, you’ll probably find me mountain biking, surfing, or playing the piano. Always excited to meet people, so feel free to reach out!", href: "/" },
      { label: "Email", href: "mailto:drosario@college.harvard.edu", inline: true },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/daniel-rosario-035993228/", inline: true },
      { label: "Github", href: "https://github.com/danrobuilds", inline: true },
      { label: "X", href: "https://x.com/dan_rosario_", inline: true },
    ],
  },
  {
    id: "projects",
    title: "building",
    items: [
      { label: "Jeep EV Conversion", href: "/projects/jeep" },
      { label: "Coffeechat", href: "/projects/coffeechat" },
      { label: "Audy AI", href: "/projects/audy" },
      { label: "Designr", href: "/projects/designr" },
    ],
  },
  {
    id: "work",
    title: "experience",
    items: [
      { label: "Fellow with Critical Ventures", href: "/" },
      { label: "Roberts Family Fellow @ Harvard", href: "/" },
      { label: "Prev ML @ ABLSoft", href: "/" },
      { label: "Prev Product @ EBSCO", href: "/" },


    ],
  },
];


export default function Home() {
  const [open, setOpen] = useState<Record<string, boolean>>({ about: true });

  const toggle = (id: string) =>
    setOpen((prev) => ({ ...prev, [id]: !prev[id] }));

  useEffect(() => {
    // If coming back from a project page, open the projects section.
    // Otherwise, the default state is { about: true }.
    console.log(new URL(document.referrer).pathname.split("/").pop());
    if (document.referrer && document.referrer.includes("projects")) {
      console.log("projects");
      setOpen({ projects: true });
    }
  }, []);


  return (
    <div className="flex min-h-screen items-start justify-center bg-white text-neutral-800">
      <main className="w-full max-w-5xl px-6 py-24 sm:px-10 sm:py-56">
        {/* ↑ Change `py-24` above to adjust vertical start spacing */}
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:items-start">
          <Image
            src="/oak_tree.svg"
            alt="Oak tree illustration"
            width={360}
            height={360}
            className="w-52 shrink-0 md:w-80 lg:w-96"
            priority
          />
          <div className="flex max-w-xl flex-col gap-6 font-serif text-2xl font-normal leading-8 md:order-first">
            {/* Fixed-position top section with toggleable content */}
            <div className="flex flex-col gap-2">
              <button
                className="text-left capitalize transition-opacity hover:opacity-70"
                onClick={() => toggle(sections[0].id)}
                aria-expanded={!!open[sections[0].id]}
                aria-controls={`${sections[0].id}-menu`}
              >
                {sections[0].title}
              </button>
              <div
                id={`${sections[0].id}-menu`}
                className={`overflow-hidden transition-all duration-400 ease-out ${
                  open[sections[0].id]
                    ? "max-h-[600px] translate-y-0 opacity-100"
                    : "max-h-0 -translate-y-2 opacity-0"
                }`}
                aria-hidden={!open[sections[0].id]}
              >
                <div className="flex flex-col gap-2 pl-2 text-lg font-normal leading-7">
                  {sections[0].items
                    .filter((item) => !item.inline)
                    .map((item) => (
                      <Link
                        key={item.label + item.href}
                        href={item.href ?? "/"}
                        className="transition-opacity hover:opacity-70"
                      >
                        <span className="mr-2 text-xl align-middle">↳</span>
                        <span className="align-middle">{item.label}</span>
                      </Link>
                    ))}
                  {sections[0].items.some((item) => item.inline) && (
                    <div className="flex flex-wrap items-center gap-1">
                      {sections[0].items
                        .filter((item) => item.inline)
                        .map((item, index, arr) => (
                          <span key={item.label + item.href} className="inline-flex items-center">
                            <Link
                              href={item.href ?? "/"}
                              className="transition-opacity hover:opacity-70"
                            >
                              {item.label}
                            </Link>
                            {index < arr.length - 1 && <span>,&nbsp;</span>}
                          </span>
                        ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Sliding sections */}
            {sections.slice(1).map((section) => {
              const isOpen = !!open[section.id];

              return (
                <div key={section.id} className="flex flex-col gap-2">
                  <button
                    className="text-left capitalize transition-opacity hover:opacity-70"
                    onClick={() => toggle(section.id)}
                    aria-expanded={isOpen}
                    aria-controls={`${section.id}-menu`}
                  >
                    {section.title}
                  </button>

                  <div
                    id={`${section.id}-menu`}
                    className={`overflow-hidden transition-all duration-400 ease-out ${
                      isOpen
                        ? "max-h-[600px] translate-y-0 opacity-100"
                        : "max-h-0 -translate-y-2 opacity-0"
                    }`}
                    aria-hidden={!isOpen}
                  >
                    <div className="flex flex-col gap-2 pl-2 text-lg font-normal leading-7">
                      {section.items
                        .filter((item) => !item.inline)
                        .map((item) => (
                          <Link
                            key={item.label + item.href}
                            href={item.href ?? "/"}
                            className="transition-opacity hover:opacity-70"
                          >
                            <span className="mr-2 text-xl align-middle">↳</span>
                            <span className="align-middle">{item.label}</span>
                          </Link>
                        ))}
                      {section.items.some((item) => item.inline) && (
                        <div className="flex flex-wrap items-center gap-1">
                          {section.items
                            .filter((item) => item.inline)
                            .map((item, index, arr) => (
                              <span key={item.label + item.href} className="inline-flex items-center">
                                <Link
                                  href={item.href ?? "/"}
                                  className="transition-opacity hover:opacity-70"
                                >
                                  {item.label}
                                </Link>
                                {index < arr.length - 1 && <span>,&nbsp;</span>}
                              </span>
                            ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
