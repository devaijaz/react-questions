import React from "react";
import { useAppContext } from "../../context";
import { TicketList } from "../TicketList";
import { TicketListAnimation } from "../TicketListAnimation";

const Q4 = () => {
  const { tickets } = useAppContext();

  return (
    <div className="flex flex-col lg:flex-row w-full flex-basis gap-4 justify-between">
      <div className="flex flex-col flex-grow">
        {tickets.length ? <p>1) Animation : using Custom CSS3 animation and keyframes </p> : null}
        <TicketList deletable={true} animation tickets={tickets} />
      </div>
      <div className="flex flex-col flex-grow">
        {tickets.length ? (
          <p>2) Animation : using react-transition-group &amp; material ui library</p>
        ) : null}
        <TicketListAnimation deletable={true} animation tickets={tickets} />
      </div>
    </div>
  );
};

export default Q4;
