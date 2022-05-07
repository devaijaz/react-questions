import React, { ChangeEvent, ChangeEventHandler, FC, useState } from 'react'
import { Box, Button, FormControl,  IconButton, Input, InputLabel, List, ListItem, ListItemText, MenuItem, Modal, Paper, Select, SelectChangeEvent } from '@mui/material';
import { useAppContext } from '../../context'
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { TicketForm } from '../../types';

export const Q2 = () => {
  const {tickets, removeTicket} = useAppContext();
  const [open, setOpen] = useState(false);

  const closeModal = ()=> {
    setOpen(false);
  };

  return (
    <div>
      <Paper>
        <div className='px-2 py-2 flex justify-end border-b'>
          <Button variant="contained" startIcon={<AddIcon />} onClick={e=> setOpen(true)}>Add</Button>
        </div>
        <List>
          {tickets.map((ticket)=> {
            return <ListItem className="border-b" key={ticket.id} 
                secondaryAction={<IconButton onClick={e=> removeTicket(ticket.id)}><DeleteIcon/></IconButton>}>
              <ListItemText primary={`${ticket.product} - ${ticket.type}`} secondary={`${ticket.unitPrice} X ${ticket.quantity}`}>

              </ListItemText>
            </ListItem>
          })}
        </List>
      </Paper>
      {open && <AddTicketModal onClose={closeModal}/>}
    </div>
  )
}

type ModalProps = {
  onClose: Function
}

export const AddTicketModal:FC<ModalProps> =({onClose})=> {
  const {addTicket} = useAppContext();
  const [formData, setFormData] = useState<TicketForm>({
    product:"",
    quantity: undefined,
    type: undefined,
    unitPrice: undefined
  });

  const formChangeHandler = (prop: string) => (e: ChangeEvent<HTMLInputElement> | SelectChangeEvent<HTMLSelectElement>)=> {
    setFormData(original=> {
      return {...original, [prop]: e.target?.value}
    })
  }

  const onSave = ()=> {
    // Not applying any validation, as its not part of Question
    addTicket(formData);
    onClose && onClose();
  }

  return <Modal open={true} onClose={(e:{}, reason:string)=> {
      if (reason !== "backdropClick") onClose()
    }}
  >
    <Box className='modal'>
      <h2 className="text-center border-b pb-2 font-bold text-xl">Add Ticket</h2>
      <div className='flex flex-col gap-4 mt-4'>
      <FormControl>
        <InputLabel htmlFor="idProduct">Product</InputLabel>
        <Input id="idProduct" value={formData.product} onChange={formChangeHandler("product") as ChangeEventHandler}/>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="idType">Type</InputLabel>
          <Select
            id="idType"
            value={formData.type}
            label="Type"
            onChange={formChangeHandler("type")}
          >
            <MenuItem value="food">Food</MenuItem>
            <MenuItem value="drinks">Drinks</MenuItem>
          </Select>
      </FormControl>
        <FormControl>
          <InputLabel htmlFor="idQuantity">Quantity</InputLabel>
          <Input id="idQuantity" type='number' value={formData.quantity} onChange={formChangeHandler("quantity") as ChangeEventHandler}/>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="idPrice">Unit Price</InputLabel>
          <Input id="idPrice" type='number' value={formData.unitPrice} onChange={formChangeHandler("unitPrice") as ChangeEventHandler} />
        </FormControl>        
      </div>
      <div className='flex justify-end gap-2 mt-8'>
        <Button variant="contained" onClick={() => onClose()}>Cancel</Button>
        <Button variant="contained" onClick={onSave}>Save</Button>
      </div>
    </Box>
  </Modal>
}