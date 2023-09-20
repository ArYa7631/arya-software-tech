import React from 'react';
import Navbar from '../section/navbar';
import Footer from '../section/footer';
import { footerData } from '@/constants/dummyData';

interface SectionWrapperProps {
  children: React.ReactNode;
}

const SectionWrapper = ({ children }: SectionWrapperProps) => {
  return (
    <>
      <Navbar />
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 space-y-8 mb-5">
          {children}
        </div>
      <Footer {...footerData}/>
    </>
  );
};

export default SectionWrapper;
