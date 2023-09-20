import { BoxIcon, CrossIcon, PlayIcon } from "@/components/svg-component";
import { useLockBody } from "@/hooks/use-lock-body";
import React, { useEffect, useRef, useState } from "react";

interface VideoProps {
  videoUrl: string; // Define the type for the video URL
}

const useClickOutside = (handler: () => void) => {
  const domNode = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const maybeHandler = (event: MouseEvent) => {
      if (domNode.current && !domNode.current.contains(event.target as Node)) {
        handler();
      }
    };
    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  }, [handler]);

  return domNode;
};

const Video = ({ videoUrl }:VideoProps) => {
  const [videoOpen, setVideoOpen] = useState(false);

  const domNode = useClickOutside(() => {
    setVideoOpen(false);
  });

  const openVideo = () => {
    setVideoOpen(true);
  };

  const closeVideo = () => {
    setVideoOpen(false);
  };

  const VideoComp = () => {
    useLockBody()
    return (
      <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-screen bg-black bg-opacity-70">
        <div className="mx-auto w-full max-w-[550px] bg-white">
          <>
            <iframe
              className="h-[320px] w-full"
              src={videoUrl}
            />
          </>
        </div>
        <button
          onClick={openVideo}
          className="absolute top-0 right-0 flex items-center justify-center w-20 h-20 cursor-pointer text-body-color hover:bg-black"
        >
          <CrossIcon />
        </button>
      </div>
    )
  }
  return (
    <section>
      <div ref={domNode} className="container">
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-full px-4 lg:w-10/12">
            <div className="relative z-20 h-[300px] overflow-hidden rounded-lg md:h-[450px]">
              <div className="absolute top-0 left-0 w-full h-full">
                <img
                  src="https://i.ibb.co/KbSwcWJ/image-01-1.jpg"
                  alt="bg"
                  className="object-cover object-center w-full h-full"
                />
              </div>
              <div
                className={`absolute top-0 left-0 z-10 flex items-center justify-center w-full h-full bg-primary bg-opacity-90`}
              >
                <a
                  href="/#"
                  onClick={openVideo}
                  className="absolute z-20 flex h-20 w-20 items-center justify-center rounded-full bg-white text-primary md:h-[100px] md:w-[100px]"
                >
                  <span className="absolute top-0 right-0 z-[-1] h-full w-full animate-ping rounded-full bg-white bg-opacity-20 delay-300 duration-1000"></span>
                  <PlayIcon />
                </a>
              </div>

              <div>
                <span className="absolute z-40 top-4 left-4">
                  <BoxIcon />
                </span>
                <span className="absolute z-40 bottom-4 right-4">
                  <BoxIcon />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {videoOpen && <VideoComp />}

    </section>
  );
};

export default Video;
