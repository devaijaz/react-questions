import React, { FC, useState } from "react";
import { Paper, Button, List, ListItem, IconButton, ListItemText } from "@mui/material";
import { AddTicketModal } from "./AddTicketModal";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { useAppContext } from "../context";

type Props = {
  deletable?: boolean;
};

export const TicketList: FC<Props> = ({ deletable = false }) => {
  const { tickets, removeTicket } = useAppContext();
  const [open, setOpen] = useState(false);

  const closeModal = React.useCallback(() => {
    setOpen(false);
  }, []);

  const removeItem = React.useCallback(
    (id: string) => {
      return (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!deletable) return;
        const li = e.currentTarget.parentElement?.parentElement;
        if (li) {
          li.classList.add("removeAnimation");
          li.addEventListener("animationend", () => {
            removeTicket(id);
          });
        }
      };
    },
    [deletable, removeTicket]
  );

  return (
    <>
      <Paper>
        <div className="px-2 py-2 flex justify-end border-b">
          <Button startIcon={<AddIcon />} onClick={(e) => setOpen(true)}>
            Add
          </Button>
        </div>
        <List className="relative">
          {tickets.map((ticket) => {
            return (
              <ListItem
                className="border-b"
                key={ticket.id}
                secondaryAction={
                  deletable ? (
                    <IconButton onClick={removeItem(ticket.id)}>
                      <DeleteIcon />
                    </IconButton>
                  ) : null
                }
              >
                <ListItemText
                  primary={`${ticket.product} - ${ticket.type}`}
                  secondary={`${ticket.unitPrice} X ${ticket.quantity}`}
                ></ListItemText>
              </ListItem>
            );
          })}
        </List>
      </Paper>
      {open && <AddTicketModal onClose={closeModal} />}
    </>
  );
};
