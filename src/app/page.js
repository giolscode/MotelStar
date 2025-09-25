"use client";

import Image from "next/image";
import React from "react";

import { HyperText } from "@/components/ui/hyper-text";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";


export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-50">
      <div className="flex items-center justify-center mb-8">
        <Navbar />
          <div className="relative w-screen h-[90vh] flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: "url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapers.com%2Fimages%2Fhd%2Fhotel-pictures-o9d1lk0gt8hdf0ws.jpg&f=1&nofb=1&ipt=f38df38e7252bd1a984b3f347225d66902dc7cd1a4314c46439864f6e3dca15a')" }}
          >
            <div className="absolute inset-0 bg-black opacity-70"></div>

            <div className="relative z-10">
              <HyperText className="text-white text-4xl font-bold"> Bienvenue au MotelStar </HyperText>
            </div>
            
          </div>
        
      </div>
      <Footer />
    </main>
  );
}