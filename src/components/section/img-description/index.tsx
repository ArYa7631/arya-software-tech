import { Button } from '@/components/ui/button';
import React from 'react';

interface ImgDescriptionProps {
  image: string;
  header: string;
  description: string;
  buttonLabel: string;
  alignLeft?: boolean; // Optional prop to control alignment
}

const ImgDescription = ({
  image,
  header,
  description,
  buttonLabel,
  alignLeft = true, // Default alignment is left
}:ImgDescriptionProps) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
      {alignLeft && (
        <div className="md:w-1/2">
          <img src={image} alt="Image" className="w-full h-auto" />
        </div>
      )}

      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold">{header}</h2>
        <p className="text-gray-600">{description}</p>
        <Button>{buttonLabel}</Button>
      </div>

      {!alignLeft && (
        <div className="md:w-1/2">
          <img src={image} alt="Image" className="w-full h-auto" />
        </div>
      )}
    </div>
  );
};

export default ImgDescription;
