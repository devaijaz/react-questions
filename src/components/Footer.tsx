import React from "react";

export const Footer = () => {
  return (
    <footer className="border-t-4 mt-20 p-4 flex justify-end items-end flex-col">
      <p>Submitted by - Mohammad Ajaz</p>
      <p>Date: 07 May 2022</p>
      <p>
        <a
          className="text-blue-600 font-bold"
          href="https://www.linkedin.com/in/mohammad-ajaz/"
          rel="noreferrer"
          target={"_blank"}
        >
          LinkedIn Profile
        </a>
      </p>
    </footer>
  );
};
