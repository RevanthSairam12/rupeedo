"use client";

import React from 'react';
import Header from './Header';
import ServiceTabs from './ServiceTabs';
import HeroSearch from './HeroSearch';
import OffersCarousel from './OffersCarousel';
import TravelBlogs from './TravelBlogs';
import TopRoutes from './TopRoutes';
import FAQ from './FAQ';
import ContentSEO from './ContentSEO';
import Footer from './Footer';

export default function BusTicketsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F7F9]">
      <Header />
      
      <main className="flex-grow">
        <ServiceTabs />
        <HeroSearch />
        
        <div className="space-y-0">
          <OffersCarousel />
          <TravelBlogs />
          <TopRoutes />
          <FAQ />
          <ContentSEO />
        </div>
      </main>

      <Footer />
    </div>
  );
}
