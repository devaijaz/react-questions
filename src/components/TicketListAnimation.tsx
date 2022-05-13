import React, { FC, useState } from "react";
import { Paper, Button, IconButton, Slide, ListItem, ListItemText } from "@mui/material";
import { AddTicketModal } from "./AddTicketModal";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { useAppContext } from "../context";
import { TransitionGroup } from "react-transition-group";
import { ListProps } from "../types";

export const TicketListAnimation: FC<ListProps> = ({
  deletable = false,
  animation = false,
  tickets,
}) => {
  const { removeTicket } = useAppContext();
  const [open, setOpen] = useState(false);

  const closeModal = React.useCallback(() => {
    setOpen(false);
  }, []);

  const removeItem = React.useCallback(
    (id: string) => {
      return (e: React.MouseEvent<HTMLButtonElement>) => {
        removeTicket(id);
      };
    },
    [removeTicket]
  );

  return (
    <>
      <Paper>
        <div className="px-2 py-2 flex justify-end border-b">
          <Button startIcon={<AddIcon />} onClick={(e) => setOpen(true)}>
            Add
          </Button>
        </div>
        {animation ? (
          <TransitionGroup>
            {tickets.map((ticket) => {
              return (
                <Slide direction="left" key={ticket.id} timeout={500}>
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
                </Slide>
              );
            })}
          </TransitionGroup>
        ) : (
          <>
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
          </>
        )}
      </Paper>
      {open && <AddTicketModal onClose={closeModal} />}
    </>
  );
};
