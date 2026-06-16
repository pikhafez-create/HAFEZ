export type OrderStatus =
  | 'pending'
  | 'assigned'
  | 'accepted'
  | 'picked_up'
  | 'delivered'
  | 'cancelled';

export const isValidTransition = (from: OrderStatus, to: OrderStatus) => {
  const map: Record<OrderStatus, OrderStatus[]> = {
    pending: ['assigned', 'cancelled'],
    assigned: ['accepted', 'cancelled'],
    accepted: ['picked_up', 'cancelled'],
    picked_up: ['delivered'],
    delivered: [],
    cancelled: []
  };

  return map[from].includes(to);
};
