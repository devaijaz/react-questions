import React from "react";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { useAppContext } from "../context";

export const Tickets = () => {
  const { tickets, total } = useAppContext();
  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell component={"th"}>Item</TableCell>
              <TableCell align="right">Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tickets.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <div className="">
                    {row.product} - {row.type}
                  </div>
                  <div>
                    {row.unitPrice} X {row.quantity}
                  </div>
                </TableCell>
                <TableCell align="right">{row.quantity * row.unitPrice}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="flex items-end justify-end px-2">
        <span className="font-bold text-lg">Grand Total: {total}</span>
      </div>
    </div>
  );
};
