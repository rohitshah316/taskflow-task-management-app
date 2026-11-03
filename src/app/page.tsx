import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/landing/Features';
import KanbanPreview from './components/kanban-preview';
import CTA from './components/cta';

const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Features/>
    <KanbanPreview/>
    <CTA/>
    </>
  )
}

export default Home