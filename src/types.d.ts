export type Ticket = {
  id: string;
  product: string;
  type: "food" | "drinks";
  quantity: number;
  unitPrice: number;
}

export type TicketForm = Partial<Pick<Ticket, "product" | "quantity" | "unitPrice"> & {
  type: HTMLSelectElement | undefined
}>