import type Address from "./Address";

interface DoctorScheduledVisitData {
  id: number;
  dayOfTheWeek: string;
  visitBegTime: string;
  visitEndTime: string;
  price: number;
  type: string;
  registeredDoctorId: number;
  address: Address;
  _links: any;
}

export default DoctorScheduledVisitData;
