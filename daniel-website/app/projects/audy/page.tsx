"use client";

import Link from "next/link";
import { useState } from "react";

export default function ProjectNovaPage() {
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
          <h1 className="text-2xl font-normal">Audy AI - Social Media Marketing Agents</h1>
          <p className="text-lg text-black/70">
            I've noticed that while social media marketing has exploded for B2C companies over the past decade, B2B companies are just now catching up.
            Many B2B companies do not want to onboard a full-time social media manager, and many do not have the time to create content themselves.
            This is why I created Audy AI. It automates the process of creating powerful social media content end-to-end for B2B companies.
            Audy leverages a multiagent framework (research, writing, editing, multimodal generation) to create optimal content.
          </p>
          <a
            href="https://audience-ai.vercel.app/"
            className="underline hover:opacity-70 text-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Its live.
          </a>
        </header>


      </main>

      
    </div>
  );
}

