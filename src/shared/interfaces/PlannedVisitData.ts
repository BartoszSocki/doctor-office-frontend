interface PlannedVisitData {
  id: string;
  day: string;
  begTime: string;
  endTime: string;
  cancelled: boolean;
  registeredDoctorId: number;
  registeredClientId: number;
  clientName: string;
  clientSurname: string;
  doctorName: string;
  doctorSurname: string;
  city: string;
  street: string;

  _links: any;
}

export default PlannedVisitData;
