"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import TECH from "./image.jpg";
import nocorp from "./hell1.png";
import creat from "./hell.png";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={index} card={card} />
  ));

  return (
    <div className="w-full h-full py-20 bg-dark-blue">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl bg-dark-blue md:text-5xl font-bold text-white dark:text-white font-sans text-center">
        Domains
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "Technical",
    title: "Technical Domain",
    src: TECH.src,  // Ensure `src` is correctly imported
    content: "Learn about cutting-edge technology, software development, and technical innovations.",
  },
  {
    category: "Non-Technical",
    title: "Non-Technical Domain",
    src: nocorp.src,  // Ensure `src` is correctly imported
    content: "Explore management, communication, and non-technical skills for personal and professional growth.",
  },
  {
    category: "Creative",
    title: "Creative Domain",
    src: creat.src,  // Ensure `src` is correctly imported
    content: "Unleash your creativity with design, writing, and other creative endeavors.",
  },
];
