import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Header } from "./Header";
export const Layout = () => {
  return (
    <div>
      <Header />
      <main className="px-2 py-2 max-w-6xl m-auto min-w-[700px]">
        <Navbar />
        <div className="pt-16">
          <Outlet />
        </div>
      </main>
      <footer className="border-t-8 border-black mt-20 p-4 flex justify-end items-end flex-col">
        <p>Submitted by - Mohammad Ajaz</p>
        <p>
          <a
            className="text-blue-600 font-bold"
            href="https://www.linkedin.com/in/mohammad-ajaz/"
            target={"_blank"}
          >
            LinkedIn Profile
          </a>
        </p>
      </footer>
    </div>
  );
};
