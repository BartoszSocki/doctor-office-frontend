import { getRequest } from "./FetchUtils";

const getDoctorNotesAboutClientWithId = async (id: string) => {
  return await getRequest(
    `${import.meta.env.VITE_API_URL}/api/doctor/notes/client/${id}`
  );
};

const getAllNotes = async () => {
  return await getRequest(`${import.meta.env.VITE_API_URL}/api/doctor/notes`);
};

export { getDoctorNotesAboutClientWithId, getAllNotes };
