import React from 'react';
import YouTube from 'react-youtube';

const VideoGallery = () => {
  const videoUrls = [
    'https://www.youtube.com/watch?v=hSa5YdBUSdc',
    'https://www.youtube.com/watch?v=hSa5YdBUSdc',
    'https://www.youtube.com/watch?v=hSa5YdBUSdc',
    'https://www.youtube.com/watch?v=hSa5YdBUSdc',
    'https://www.youtube.com/watch?v=hSa5YdBUSdc',
    'https://www.youtube.com/watch?v=aOK7dAmqU5A',
  ];

  const opts = {
    height: 'auto',
    width: 'auto',
    playerVars: {
    },
  };

  return (
    <section>
      <div className="container mx-auto p-4">
        <h2 className="text-2xl text-center font-semibold mb-4">Video Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {videoUrls.map((url, index) => (
            <div key={index} className="bg-gray-200 p-4 rounded-lg ml-auto mr-auto">
              <YouTube videoId={url.split('v=')[1]} opts={opts} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
