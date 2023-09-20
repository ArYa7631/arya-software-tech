import React from "react";
import IconWithText from "@/components/icon-with-text";

interface IconData {
  icon: string;
  text: string;
}

interface InfoIconsProps {
  data: IconData[];
}

const InfoIcons: React.FC<InfoIconsProps> = ({ data }) => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.map((item, index) => (
          <IconWithText key={index} icon={item.icon} text={item.text} />
        ))}
      </div>
    </section>
  );
};

export default InfoIcons;
