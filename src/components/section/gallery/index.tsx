import React from "react";

interface GalleryProps {
  imageUrls: string[];
}

const Gallery: React.FC<GalleryProps> = ({ imageUrls }) => {
  return (
    <section>
      <h2 className="text-2xl text-center font-semibold mb-4">Gallery Section</h2>
      <p className="mb-8 text-lg text-center font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Here at Flowbite we focus on markets</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {imageUrls.map((imageUrl, index) => (
          <div key={index}>
            <img className="h-auto max-w-full rounded-lg max-h-64" src={imageUrl} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
