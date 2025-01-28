export const loadItems = (startDate: Date, endDate: Date, events: any[]) => {
  const formattedItems: { [key: string]: any[] } = {};

  for (
    let current = new Date(startDate);
    current <= endDate;
    current.setDate(current.getDate() + 1)
  ) {
    const dateString = current.toISOString().split("T")[0];
    formattedItems[dateString] = [];
  }

  events.forEach(event => {
    const eventDateString = new Date(event.time).toISOString().split("T")[0];

    if (formattedItems[eventDateString]) {
      formattedItems[eventDateString].push({
        id: event.id,
        name: event.name,
        impact: event.impact,
        estimate: event.estimate,
        previous: event.previous,
        time: event.time,
        actual: event.actual,
        country: event.country,
        unit: event.unit
      });
    }
  });

  return formattedItems;
};
