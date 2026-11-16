/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * GHUMAKKAD - Navigation Bar Component
 */

import React, { useState, useEffect } from 'react';
import { Compass, Sparkles, Menu, X, MapPin, Calendar, Heart, ShieldCheck, Info } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenChat: () => void;
  hasActiveItinerary?: boolean;
  onOpenDashboard?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  activeSection, 
  onNavigate, 
  onOpenChat,
  hasActiveItinerary = false,
  onOpenDashboard,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'explore', label: 'Explore India' },
    { id: 'ai-assistant', label: 'AI Assistant' },
    { id: 'plan-trip', label: 'Plan My Trip' },
    { id: 'culture', label: 'Culture & Heritage' },
    { id: 'food', label: 'Food & Cuisine' },
    { id: 'travel-tips', label: 'Travel Tips' },
    { id: 'about', label: 'About Us' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FFFDF9]/95 backdrop-blur-md shadow-md border-b border-amber-200/50 py-2.5'
          : 'bg-[#FFFDF9]/80 backdrop-blur-sm border-b border-stone-200/40 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-600 via-orange-500 to-amber-700 flex items-center justify-center text-white shadow-md shadow-amber-600/20 group-hover:scale-105 transition-transform">
              <Compass className="w-6 h-6 animate-spin-slow text-amber-100" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-extrabold text-xl sm:text-2xl tracking-wide bg-gradient-to-r from-orange-600 via-amber-700 to-emerald-800 bg-clip-text text-transparent">
                  GHUMAKKAD
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-300">
                  AI GUIDE
                </span>
              </div>
              <p className="text-[11px] text-stone-500 font-medium tracking-tight hidden sm:block">
                अतिथि देवो भव • Your Intelligent Travel Companion
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-3 py-2 text-xs xl:text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                    isActive
                      ? 'text-orange-700 bg-orange-50 font-bold border border-orange-200/60'
                      : 'text-stone-700 hover:text-orange-600 hover:bg-stone-100/60'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Primary Action Button: Ask Your AI Guide & View Travel Plan */}
          <div className="hidden sm:flex items-center gap-2.5">
            {hasActiveItinerary && onOpenDashboard && (
              <button
                onClick={onOpenDashboard}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold text-emerald-900 bg-emerald-100/90 hover:bg-emerald-200 border border-emerald-300 shadow-xs transition-all cursor-pointer animate-pulse"
              >
                <span>🗺️ My Travel Plan</span>
              </button>
            )}

            <button
              onClick={onOpenChat}
              className="relative inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 shadow-md shadow-orange-600/25 hover:shadow-lg hover:shadow-orange-600/35 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer group"
            >
              <Sparkles className="w-4 h-4 text-amber-200 group-hover:rotate-12 transition-transform" />
              <span>Ask Your AI Guide</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenChat}
              className="p-2 rounded-lg bg-orange-600 text-white shadow-sm"
              aria-label="Open AI Guide"
            >
              <Sparkles className="w-5 h-5 text-amber-200" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-700 hover:bg-stone-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFDF9] border-b border-amber-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`w-full text-left px-4 py-2.5 text-sm font-semibold rounded-lg transition-colors ${
                    isActive
                      ? 'bg-orange-100/80 text-orange-800 font-bold border-l-4 border-orange-600'
                      : 'text-stone-700 hover:bg-stone-100'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            <div className="pt-3 mt-2 border-t border-stone-200">
              <button
                onClick={() => {
                  onOpenChat();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 shadow-md"
              >
                <Sparkles className="w-4 h-4 text-amber-200" />
                <span>Ask Your AI Guide</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
