import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Overview } from './components/Overview';
import { HowItWorks } from './components/HowItWorks';
import { Features } from './components/Features';
import { ArchitectureSecurity } from './components/ArchitectureSecurity';
import { TechStack } from './components/TechStack';
import { DemoAndVideo } from './components/DemoAndVideo';
import { ResearchPaper } from './components/ResearchPaper';
import { TeamSection } from './components/TeamSection';
import { ProjectOutcomes } from './components/ProjectOutcomes';
import { Footer } from './components/Footer';
import { QrModal } from './components/QrModal';
import { ImageModal } from './components/ImageModal';

export const App: React.FC = () => {
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImageTitle, setSelectedImageTitle] = useState<string | null>(null);

  const handleSelectImage = (src: string, title: string) => {
    setSelectedImage(src);
    setSelectedImageTitle(title);
  };

  const handleCloseImageModal = () => {
    setSelectedImage(null);
    setSelectedImageTitle(null);
  };

  const handleWatchVideoClick = () => {
    const videoSection = document.getElementById('demo');
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-navy-950">
      
      {/* Sticky Navigation Bar */}
      <Navbar onOpenQrModal={() => setIsQrModalOpen(true)} />

      {/* Main Exhibition Page Content */}
      <main className="flex-grow">
        <Hero 
          onWatchVideoClick={handleWatchVideoClick} 
          onOpenQrModal={() => setIsQrModalOpen(true)} 
        />
        
        <Overview />

        <HowItWorks onSelectImage={handleSelectImage} />

        <Features />

        <ArchitectureSecurity onSelectImage={handleSelectImage} />

        <TechStack />

        <DemoAndVideo onSelectImage={handleSelectImage} />

        <ResearchPaper />

        <TeamSection />

        <ProjectOutcomes />
      </main>

      {/* Footer & Final Call to Action */}
      <Footer 
        onWatchVideoClick={handleWatchVideoClick}
        onOpenQrModal={() => setIsQrModalOpen(true)}
      />

      {/* Exhibition Banner QR Code Modal */}
      <QrModal 
        isOpen={isQrModalOpen}
        onClose={() => setIsQrModalOpen(false)}
      />

      {/* High-Resolution Screenshot & Diagram Lightbox */}
      <ImageModal
        isOpen={selectedImage !== null}
        onClose={handleCloseImageModal}
        imageSrc={selectedImage}
        imageTitle={selectedImageTitle}
      />

    </div>
  );
};
