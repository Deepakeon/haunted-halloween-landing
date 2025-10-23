"use client"
import { HeroSection } from '@/components/HeroSection';
import { OriginsSection } from '@/components/OriginsSection';
import { TraditionsSection } from '@/components/TraditionsSection';
import { GuidelinesSection } from '@/components/GuidelinesSection';

function App() {
   return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <OriginsSection />
      <TraditionsSection />
      <GuidelinesSection />
    </main>
  );
}

export default App;
