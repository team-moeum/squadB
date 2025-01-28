import { EconomicEventsApi } from "@moeum/shared/apis";
import { loadItems } from "./loadItems";

export async function fetchEconomicEvents(
  selectedDate: string,
  prevItems: { [key: string]: any[] }
): Promise<{ [key: string]: any[] }> {
  const economicEventsApi = new EconomicEventsApi();

  try {
    const currentSelectedDate = new Date(selectedDate);

    const startDate = new Date(
      currentSelectedDate.getFullYear(),
      currentSelectedDate.getMonth() - 1,
      currentSelectedDate.getDate()
    );

    const endDate = new Date(
      currentSelectedDate.getFullYear(),
      currentSelectedDate.getMonth() + 1,
      currentSelectedDate.getDate()
    );

    const response = await economicEventsApi.economicEventControllerFindAll({
      startDate: startDate.toISOString().split("T")[0],
      endDate: endDate.toISOString().split("T")[0]
    });

    const events = response.data || [];
    const newItems = loadItems(startDate, endDate, events);

    return { ...prevItems, ...newItems };
  } catch (error) {
    console.error("Error fetching economic events:", error);
    return prevItems;
  }
}
