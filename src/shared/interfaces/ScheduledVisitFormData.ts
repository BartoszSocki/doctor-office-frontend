import type Address from "./Address";

interface ScheduledVisitFormData {
  dayOfTheWeek: string;
  visitBegTime: string;
  visitEndTime: string;
  price: number;
  localization: string;
  type: string;
  address: Address;
}

export default ScheduledVisitFormData;
