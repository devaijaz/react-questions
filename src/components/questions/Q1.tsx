import React, { useEffect } from "react";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Box,
} from "@mui/material";
import { useAppContext } from "../../context";
import { Ticket } from "../../types";
import { Tickets } from "../Tickets";

const printToConsole = (tickets: Ticket[], total: number) => {
  tickets.forEach((row) => {
    console.log(
      row.product,
      row.type,
      `${row.unitPrice} X ${row.quantity} = ${row.quantity * row.unitPrice}`
    );
  });
  console.log(
    "Grand Total",
    tickets.reduce((accumulator, row) => row.quantity * row.unitPrice + accumulator, 0)
  );
};

export const Q1 = () => {
  const { tickets, total } = useAppContext();
  useEffect(() => {
    printToConsole(tickets, total);
  }, [tickets, total]);

  return (
    <div>
      <Tickets />
      <Typography>Open the console window to see the printed tickets</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell component={"th"}>Product</TableCell>
              <TableCell align="right">Type</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Unit Price</TableCell>
              <TableCell align="right">Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tickets.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.product}</TableCell>
                <TableCell align="right">{row.type}</TableCell>
                <TableCell align="right">{row.quantity}</TableCell>
                <TableCell align="right">{row.unitPrice}</TableCell>
                <TableCell align="right">{row.quantity * row.unitPrice}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box className="flex items-end justify-end px-2">
        <Typography className="font-bold text-lg">Grand Total: {total}</Typography>
      </Box>
    </div>
  );
};
