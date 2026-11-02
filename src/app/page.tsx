import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/landing/Features';
import KanbanPreview from './components/kanban-preview';

const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Features/>
    <KanbanPreview/>
    </>
  )
}

export default Home