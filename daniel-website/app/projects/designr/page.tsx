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
          <h1 className="text-2xl font-normal">Designr - AI-native Visual Design Editor</h1>
          <p className="text-lg text-black/70">
          While building Audy AI to automate social media content for B2B companies, I realized that creating visual diagrams and infographics was consistently the most time-consuming part of the workflow. 
          That insight led to Designr – a tool that generates beautiful marketing posts, diagrams, and infographics from a single prompt. 
          Every output is fully modular, built from FabricJS components, so users can drag, resize, and edit immediately after generation. 
          Designr also supports natural-language editing. The idea is essentially “Cursor for Canva.” 
          Under the hood, it leverages react-design-editor as an open-source FabricJS editor and LLMs for layout, imagery, and text generation.
          </p>
          <a
            href="https://github.com/danrobuilds/AICanva"
            className="underline hover:opacity-70 text-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            In progress...
          </a>
        </header>


      </main>

      
    </div>
  );
}

