import React from 'react';
import { motion } from 'framer-motion';
import ServicesHero from '../components/services/ServicesHero';
import ServiceSection from '../components/services/ServiceSection';
import MarketInsights3D from '../components/sections/market-insights/MarketInsights3D';
import ServicesBackground from '../components/backgrounds/ServicesBackground';
import PageLayout from '../components/layout/PageLayout';

export default function ServicesPage() {
  return (
    <PageLayout>
      <div className="relative">
        <ServicesBackground />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <ServicesHero />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <ServiceSection />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <MarketInsights3D />
          </motion.div>
        </motion.div>
      </div>
    </PageLayout>
  );
}