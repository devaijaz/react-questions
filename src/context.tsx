import React, { FC, PropsWithChildren, ReactNode, useContext, useEffect, useState } from "react";
import { Ticket } from "./types";
import { v4 as uuid } from "uuid";
type ContextTypes = {
  tickets: Ticket[];
  total: number;
  addTicket: Function;
  removeTicket: Function;
};

const Context = React.createContext<ContextTypes>({
  tickets: [],
  total: 0,
  addTicket: (data: Ticket) => {},
  removeTicket: (id: string) => {},
});

type PropTypes = {
  children: ReactNode;
};

export const ContextProvider: FC<PropTypes> = ({ children }) => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [total, setTotal] = useState<number>(0);

  /**
   * Fetch the Tickets Data on Component Mount
   */
  useEffect(() => {
    fetch("/tickets.json")
      .then((response) => response.json())
      .then((data: Ticket[]) => {
        setTickets(
          data.map((row) => {
            return { ...row, id: uuid() };
          })
        );
      });
  }, []);

  /**
   * Calculate the total sum amount if tickets changes
   */
  useEffect(() => {
    setTotal((_) =>
      tickets.reduce((accumulator, row) => row.quantity * row.unitPrice + accumulator, 0)
    );
  }, [tickets]);

  const addTicket = (data: Ticket) => {
    setTickets((oldTickets) => {
      oldTickets.splice(0, 0, { ...data, id: uuid() });
      return [...oldTickets];
    });
  };

  const removeTicket = (id: string) => {
    setTickets((tickets) => {
      return [...tickets].filter((ticket) => ticket.id !== id);
    });
  };

  return (
    <Context.Provider value={{ tickets, total, addTicket, removeTicket }}>
      {children}
    </Context.Provider>
  );
};

export const useAppContext = () => {
  return useContext(Context);
};

/**
 * Another Context Provider for Managing Theme MOde
 */

type ThemeContextType = {
  darkMode: boolean;
  setDarkMode: Function;
};

const ThemeContext = React.createContext<ThemeContextType>({
  darkMode: false,
  setDarkMode: () => {},
});

export const ThemeContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
