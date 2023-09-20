import React, { ReactNode } from 'react';

interface IconWithTextProps {
  icon: ReactNode; 
  text: string;
}

const IconWithText: React.FC<IconWithTextProps> = ({ icon, text }) => {
  return (
    <div className="flex items-center p-4 space-x-4 rounded-lg border border-gray-300 shadow-lg">
      <div className="text-4xl text-blue-500">{icon}</div>
      <div>
        <p className="text-lg font-semibold">{text}</p>
        <p className="text-gray-500">Lorem ipsum dolor sit amet</p>
      </div>
    </div>
  );
};

export default IconWithText;
