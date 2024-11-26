
import React from "react";
import Image from "next/image";

const Topbar = () => {
  const logos = [
    { src: "/Air Logo.png", alt: "Airbnb Logo" },
    { src: "/ispsum Logo.png", alt: "Ipsum Logo" },
    { src: "/Airb Logo.png", alt: "Airb Logo" },
    { src: "/Airbn Logo.png", alt: "Airbn Logo" },
  ];

  return (
    <footer className="container mx-auto mt-10 p-8 bg-gray-100 flex flex-col sm:flex-row justify-between items-center ">
      <div className="text-black py-6">
        <p className="text-lg font-medium">
          Trusted by <strong>2000+ companies worldwide</strong>
        </p>

        {/* Logo Section */}
        <div className="flex items-center justify-center gap-6 mt-4">
          {logos.map((logo, index) => (
            <Image
              key={index}
              src={logo.src}
              alt={logo.alt}
              width={40}
              height={40}
              className="cursor-pointer"
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Topbar;
