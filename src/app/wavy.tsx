"use client";
import React, { useState, useEffect } from "react";
import { WavyBackground } from "../components/ui/wavy-background";
import Image from "next/image";
import logo from "./logo3.png";

export function WavyBackgroundDemo() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const recruitmentEndDate = new Date("2024-09-30T23:59:59").getTime();

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = recruitmentEndDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(countdownInterval);
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [recruitmentEndDate]);

  const scrollToIframe = () => {
    const iframeElement = document.getElementById("iframe-section");
    iframeElement?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <WavyBackground className="max-w-4xl mx-auto pb-40">
        <div className="flex justify-center mb-8">
          <Image src={logo} alt="CodeNex Club Logo" width={900} height={900} />
        </div>

        <div className="text-white text-center mb-4 font-bold border-none">
          <p className="text-lg md:text-xl">RECRUITMENT CLOSES IN:</p>
          <div className="text-3xl md:text-5xl font-bold">
            {timeLeft.days}D {timeLeft.hours}H {timeLeft.minutes}M {timeLeft.seconds}S
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={scrollToIframe}
            className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-lg"
          >
            Apply Now
          </button>
        </div>
      </WavyBackground>

      <div id="iframe-section" className="flex justify-center bg-black pt-10">
        <div
          className="rounded-lg overflow-hidden"
          style={{
            border: "none", // Remove border
            boxShadow: "none", // Remove box shadow
            width: "510px",
            height: "780px",
          }}
        >
          <iframe
            src="https://lu.ma/embed/event/evt-6XkDzxArfTQUwQ4/simple"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            aria-hidden="false"
            style={{ border: "none" }} // Remove border from iframe itself
          ></iframe>
        </div>
      </div>
    </>
  );
}
