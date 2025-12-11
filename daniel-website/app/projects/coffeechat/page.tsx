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
          <h1 className="text-2xl font-normal">Coffeechat - Connecting Builders with AI</h1>
          <p className="text-lg text-black/70">
            As a builder, I wanted to find a more efficient way to meet others in the startup space and learn from their experiences.
            Coffeechat matches builders and founders for hyper-personalized, mutually beneficial conversations using AI.
            We use semantic embeddings to connect people based on their unique skillsets and experiences.
            Coffeechat is live on the App Store.
          </p>
          <a
            href="https://getcoffeechat.vercel.app/"
            className="underline hover:opacity-70 text-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check it out!
          </a>
        </header>


      </main>

      
    </div>
  );
}

