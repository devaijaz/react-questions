import React from "react";
import { useAppContext } from "../../context";
import { TicketList } from "../TicketList";

const Q2 = () => {
  const { tickets } = useAppContext();
  return (
    <div>
      <TicketList tickets={tickets} />
    </div>
  );
};

export default Q2;
