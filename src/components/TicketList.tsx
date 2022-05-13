import React, { FC, useState } from "react";
import { Paper, Button, IconButton } from "@mui/material";
import { AddTicketModal } from "./AddTicketModal";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { useAppContext } from "../context";
import { ListProps } from "../types";

export const TicketList: FC<ListProps> = ({ deletable = false, animation = false, tickets }) => {
  const { removeTicket } = useAppContext();
  const [open, setOpen] = useState(false);

  const closeModal = React.useCallback(() => {
    setOpen(false);
  }, []);

  const removeItem = React.useCallback(
    (id: string) => {
      return (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!deletable) return;
        if (!animation) {
          removeTicket(id);
          return;
        }
        const li = e.currentTarget.parentElement?.parentElement;
        if (li) {
          li.addEventListener("animationend", () => {
            setTimeout(function () {
              removeTicket(id);
            }, 0);
          });
          li.classList.add("exitAnimation");
        }
      };
    },
    [deletable, removeTicket, animation]
  );

  return (
    <>
      <Paper>
        <div className="px-2 py-2 flex justify-end border-b">
          <Button startIcon={<AddIcon />} onClick={(e) => setOpen(true)}>
            Add
          </Button>
        </div>
        <div className="relative ticketList">
          {tickets.map((ticket) => {
            return (
              <div
                className={`flex justify-between items-center border-b p-[12px] ${
                  animation ? "enterAnimation" : ""
                }`}
                key={ticket.id}
              >
                <div>
                  <div>{`${ticket.product} - ${ticket.type}`}</div>
                  <div>{`${ticket.unitPrice} X ${ticket.quantity}`}</div>
                </div>
                {deletable && (
                  <div>
                    <IconButton onClick={removeItem(ticket.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Paper>
      {open && <AddTicketModal onClose={closeModal} />}
    </>
  );
};
