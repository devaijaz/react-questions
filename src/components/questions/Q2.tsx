import React, { useState } from "react";
import { Button, IconButton, List, ListItem, ListItemText, Paper } from "@mui/material";
import { useAppContext } from "../../context";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { AddTicketModal } from "../AddTicketModal";

export const Q2 = () => {
  const { tickets, removeTicket } = useAppContext();
  const [open, setOpen] = useState(false);

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <div>
      <Paper>
        <div className="px-2 py-2 flex justify-end border-b">
          <Button startIcon={<AddIcon />} onClick={(e) => setOpen(true)}>
            Add
          </Button>
        </div>
        <List>
          {tickets.map((ticket) => {
            return (
              <ListItem
                className="border-b"
                key={ticket.id}
                secondaryAction={
                  <IconButton onClick={(e) => removeTicket(ticket.id)}>
                    <DeleteIcon />
                  </IconButton>
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
    </div>
  );
};
