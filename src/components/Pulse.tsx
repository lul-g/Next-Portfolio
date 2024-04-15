'use client';

import { motion } from 'framer-motion';
import React from 'react';
function AvailPulse({ available }: { available: boolean }) {
  return (
    <>
      {available ? (
        <div className="relative rounded-full bg-[hsl(134,63%,58%)] w-3 h-3 avail-pulsate">
          <span
            data-i={0}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
          ></span>
          <span
            data-i={1}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
          ></span>
        </div>
      ) : (
        <span className="relative w-8 h-8">
          <div className="absolute rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-[#ff426b] w-3 h-3"></div>
        </span>
      )}
    </>
  );
}

export default AvailPulse;
