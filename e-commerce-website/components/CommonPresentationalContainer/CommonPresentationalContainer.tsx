import React from "react";
import { Footer, Navbar } from "..";

const CommonPresentationalContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <main className="flex h-screen w-screen">
      <div className="w-full h-full relative">
        <Navbar />
        <div className="h-[calc(100%-100px)] p-4 overflow-y-scroll overflow-x-hidden">
          {children}
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default CommonPresentationalContainer;
