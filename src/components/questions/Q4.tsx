import React from "react";
import { TicketList } from "../TicketList";

const Q4 = () => {
  return (
    <div>
      <p className="text-xl py-2">
        Similar to Question 2 tab, with added animation when item is removed from list
      </p>
      <TicketList deletable={true} />
    </div>
  );
};

export default Q4;
