import { mockData } from "@moeum/features/calendar/constants/mock";

export const loadItems = (startDate: Date, endDate: Date) => {
  const formattedItems: { [key: string]: any[] } = {};

  for (
    let current = new Date(startDate);
    current <= endDate;
    current.setDate(current.getDate() + 1)
  ) {
    const dateString = current.toISOString().split("T")[0];
    formattedItems[dateString] = [];
  }

  mockData.forEach(event => {
    formattedItems[event.dateString] = [
      ...(formattedItems[event.dateString] || []),
      {
        id: event.id,
        category: event.category,
        content: event.content
      }
    ];
  });

  return formattedItems;
};
