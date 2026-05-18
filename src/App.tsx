/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Comparison } from '@/components/Comparison';
import { PromoSection } from '@/components/PromoSection';
import { AdvantageGrid } from '@/components/AdvantageGrid';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-brand-blue/10 selection:text-brand-blue">
      <Navbar />
      <main>
        <Hero />
        <Comparison />
        <PromoSection />
        <AdvantageGrid />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
