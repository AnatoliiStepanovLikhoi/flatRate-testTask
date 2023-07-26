// import { AvailableSeat } from "../../types/index";

// export async function fetchAvailableTickets(
//   eventId: string
// ): Promise<AvailableSeat[]> {
//   try {
//     const fetch = await import("node-fetch"); // Використовуємо динамічний імпорт
//     const url = `https://my.laphil.com/en/rest-proxy/TXN/Packages/${eventId}/Seats?constituentId=0&modeOfSaleId=26&packageId=${eventId}`;
//     const response = await fetch.default(url);
//     const data: unknown = await response.json();
//     return data as AvailableSeat[];
//   } catch (error) {
//     console.error("Failed to fetch available tickets:", error);
//     return [];
//   }
// }

import { AvailableSeat } from "../../types/index";
import axios from "axios";

export async function fetchAvailableTickets(
  eventId: string
): Promise<AvailableSeat[]> {
  try {
    const url = `https://my.laphil.com/en/rest-proxy/TXN/Packages/${eventId}/Seats?constituentId=0&modeOfSaleId=26&packageId=${eventId}`;
    const response = await axios.get(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Failed to fetch available tickets:", error);
    return [];
  }
}
