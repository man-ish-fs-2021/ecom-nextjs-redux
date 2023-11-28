import React from "react";

const Footer = () => {
  return (
    <footer className="h-[40px] absolute bottom-0 z-10 w-full flex bg-complementary items-center border-t">
      {" "}
      <div className="mx-auto ">
        <p className="text-center text-xs text-primary">
          &copy; 2023 Store, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
