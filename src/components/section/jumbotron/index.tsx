import React from "react";
import { Button } from "@/components/ui/button";
import { RightArrow } from "@/components/svg-component";

interface JumbotronProps {
  title: string;
  description: string;
  buttonLabels: {
    start: string;
    learn: string;
  };
}

const Jumbotron = ({ title, description, buttonLabels }:JumbotronProps) => {
  return (
    <section>
      <div className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center pt-5">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            {title}
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            {description}
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Button className="inline-flex justify-center items-center py-7 px-5 text-base font-medium text-center rounded-lg focus:ring-4">
              {buttonLabels.start}
              <RightArrow />
            </Button>
            <Button
              variant={'link'}
              className="inline-flex justify-center items-center py-7 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              {buttonLabels.learn}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
