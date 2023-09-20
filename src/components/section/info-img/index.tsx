import React from 'react';
import { Button } from '@/components/ui/button';

interface InfoImgProps {
    backgroundColor?: string;
    backgroundImage?: string;
    sectionHeader?: string;
    headerDescription?: string;
    images: Array<{
        src: string;
        alt: string;
        title: string;
        description: string;
        buttonLabel: string;
    }>;
}

const InfoImg: React.FC<InfoImgProps> = ({
    backgroundColor = 'transparent',
    backgroundImage = 'none',
    sectionHeader = 'Section Header',
    headerDescription = 'Header description goes here. You can customize this text.',
    images,
}: InfoImgProps) => {
    const sectionStyle = {
        backgroundColor,
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <section>
            <div className="bg-blue-100 py-16" style={sectionStyle}>
                <div className="container mx-auto">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-semibold">{sectionHeader}</h2>
                        <p className="text-gray-600 mt-2">{headerDescription}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {images.map((image, index) => (
                            <div className="bg-white p-4 rounded-lg shadow-md" key={index}>
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-40 object-cover rounded-md"
                                />
                                <p className="text-lg font-semibold mt-4">{image.title}</p>
                                <p className="text-gray-600 mt-2">{image.description}</p>
                                <Button className='mt-4'>{image.buttonLabel}</Button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfoImg;
