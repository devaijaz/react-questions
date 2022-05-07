import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import React, { useEffect} from "react";
import { useAppContext } from "../../context";
import { Ticket } from "../../types";
import { Tickets } from "../Tickets";

const printToConsole = (tickets: Ticket[], total:number) => {
  tickets.forEach((row) => {
    console.log(
      row.product,
      row.type,
      `${row.unitPrice} X ${row.quantity} = ${row.quantity * row.unitPrice}`
    );
  });
  console.log(
    "Grand Total",
    tickets.reduce(
      (accumulator, row) => row.quantity * row.unitPrice + accumulator,
      0
    )
  );
};

export const Q1 = () => {

  const {tickets, total} = useAppContext();
  useEffect(()=> {
    printToConsole(tickets, total)
  }, [tickets, total])

  return (
    <div>
      <Tickets/>
      <p className="mb-2 text-orange-600 text-xl">
        Open the console window to see the printed tickets
      </p>
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
      <div className="flex items-end bg-white justify-end px-2">
        <span className="font-bold text-lg">Grand Total: {total}</span>
      </div>
    </div>
  );
};
