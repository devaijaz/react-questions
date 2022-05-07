import { Paper, Button, List, ListItem, IconButton, ListItemText } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppContext } from '../../context';
import { AddTicketModal } from './Q2';

export const Q4 = () => {
  const { tickets, removeTicket } = useAppContext();
  const [open, setOpen] = useState(false);

  const closeModal = () => {
    setOpen(false);
  };

  const removeItem = (id: string)=> {
    return (e:React.MouseEvent<HTMLButtonElement>)=> {
      const li = e.currentTarget.parentElement?.parentElement;
      if(li) {
        li.classList.add("removeAnimation");
        li.addEventListener("animationend", ()=> {
          removeTicket(id);
        })
      }
      
    }
  }

  return (
    <div>
      <p className='text-xl py-2'>Similar to Question 2 tab, with added animation when item is removed from list</p>
      <Paper>
        <div className='px-2 py-2 flex justify-end border-b'>
          <Button variant="contained" startIcon={<AddIcon />} onClick={e => setOpen(true)}>Add</Button>
        </div>
        <List className='relative'>
          {tickets.map((ticket) => {
            return <ListItem className="border-b" key={ticket.id}
              secondaryAction={<IconButton onClick={removeItem(ticket.id)}><DeleteIcon/></IconButton>}>
              <ListItemText primary={`${ticket.product} - ${ticket.type}`} secondary={`${ticket.unitPrice} X ${ticket.quantity}`}>

              </ListItemText>
            </ListItem>
          })}
        </List>
      </Paper>
      {open && <AddTicketModal onClose={closeModal} />}
    </div>  )
}