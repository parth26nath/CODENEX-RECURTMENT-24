"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp";
import Script from 'next/script';

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.6,
          ease: "easeInOut",
        }}
        className="mt-6 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-large tracking-tight text-transparent md:text-7xl"
      >
        <div>CODENEX SRMIST</div>
      </motion.h1>

      {/* Animated Button */}
      <motion.a
        href="https://lu.ma/event/evt-6XkDzxArfTQUwQ4"
        className="luma-checkout--button mt-8 inline-block text-center"
        data-luma-action="checkout"
        data-luma-event-id="evt-6XkDzxArfTQUwQ4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.6,
          ease: "easeInOut",
        }}
      >
        Register for Event
      </motion.a>
      <Script id="luma-checkout" src="https://embed.lu.ma/checkout-button.js" strategy="afterInteractive" />
    </LampContainer>
  );
}