/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/layout/Navbar';
import Hero from './components/hero/Hero';
import Projects from './components/projects/Projects';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import Background from './components/ui/Background';
import Loading from './components/ui/Loading';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial asset loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <AnimatePresence>
        {isLoading && <Loading />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Background />
          <Navbar />
          
          <main>
            <Hero />
            <Projects />
            <About />
            <Skills />
            <Contact />
          </main>
        </>
      )}
    </div>
  );
}

