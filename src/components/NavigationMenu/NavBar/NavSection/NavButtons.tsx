import { NavbtnProps } from "@/types/route.types";
import AboutNavSection from "./About";
import PlatformNavSection from "./Platform";
import ResourcesNavSection from "./Resources";
import { memo, useState } from "react";

const NavButtonsComponent = ({ params: { lng, t }, name }: NavbtnProps) => {
  const [showDropdown, setShowDropdown] = useState(true);
  const handleCloseNav = () => {
    setShowDropdown(false);
    setTimeout(() => setShowDropdown(true), 500);
  };

  return (
    <>
      <div className="w-0 lg:w-[120px] h-0 lg:h-8 dropdown animate-slidedown-short">
        <div className="hidden lg:block absolute z-[999] bottom-0 left-9 w-4 overflow-hidden rotate-90">
          <div className="h-5 bg-gray-50 rotate-45 transform origin-bottom-right rounded-sm border-2 border-gray-500"></div>
        </div>
      </div>
      <div
        className="lg:absolute lg:left-0 w-full flex flex-col items-center"
        onMouseEnter={() => setShowDropdown(true)}
      >
        {showDropdown && (
          <div className="dropdown flex flex-col lg:flex-row z-[998] lg:bg-gray-50 lg:mt-7 border-[0px] lg:border-[2px] border-gray-500 animate-slidedown-short w-full lg:w-auto">
            {name === "about" ? (
              <AboutNavSection params={{ lng, t }} />
            ) : name === "platform" ? (
              <PlatformNavSection
                params={{ lng, t }}
                onCloseNav={handleCloseNav}
              />
            ) : name === "resources" ? (
              <ResourcesNavSection params={{ lng, t }} />
            ) : (
              <></>
            )}
          </div>
        )}
      </div>
    </>
  );
};
export const NavButtons = memo(NavButtonsComponent);
