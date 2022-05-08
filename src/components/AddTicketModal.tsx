import React, { FC, useState, ChangeEvent, ChangeEventHandler } from "react";

import {
  SelectChangeEvent,
  Modal,
  Box,
  FormControl,
  InputLabel,
  Input,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { useAppContext, useThemeContext } from "../context";
import { TicketForm } from "../types";

type ModalProps = {
  onClose: Function;
};

export const AddTicketModal: FC<ModalProps> = ({ onClose }) => {
  const { addTicket } = useAppContext();
  const { darkMode } = useThemeContext();
  const [formData, setFormData] = useState<TicketForm>({
    product: "",
    quantity: undefined,
    type: undefined,
    unitPrice: undefined,
  });

  const formChangeHandler =
    (prop: string) => (e: ChangeEvent<HTMLInputElement> | SelectChangeEvent<HTMLSelectElement>) => {
      setFormData((original) => {
        return { ...original, [prop]: e.target?.value };
      });
    };

  const onSave = () => {
    // Not applying any validation, as its not part of Question
    addTicket(formData);
    onClose && onClose();
  };

  return (
    <Modal
      open={true}
      onClose={(e: {}, reason: string) => {
        if (reason !== "backdropClick") onClose();
      }}
    >
      <Box
        className="modal"
        sx={{ backgroundColor: () => (darkMode ? "rgba(0,0,0,0.9)" : "white") }}
      >
        <h2 className="text-center border-b pb-2 font-bold text-xl">Add Ticket</h2>
        <div className="flex flex-col gap-4 mt-4">
          <FormControl>
            <InputLabel htmlFor="idProduct">Product</InputLabel>
            <Input
              id="idProduct"
              value={formData.product}
              onChange={formChangeHandler("product") as ChangeEventHandler}
            />
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
            <Input
              id="idQuantity"
              type="number"
              value={formData.quantity}
              onChange={formChangeHandler("quantity") as ChangeEventHandler}
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="idPrice">Unit Price</InputLabel>
            <Input
              id="idPrice"
              type="number"
              value={formData.unitPrice}
              onChange={formChangeHandler("unitPrice") as ChangeEventHandler}
            />
          </FormControl>
        </div>
        <div className="flex justify-end gap-2 mt-8">
          <Button onClick={() => onClose()}>Cancel</Button>
          <Button onClick={onSave}>Save</Button>
        </div>
      </Box>
    </Modal>
  );
};
