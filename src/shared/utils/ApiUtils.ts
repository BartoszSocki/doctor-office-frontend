import { getRequest, putRequest } from "./FetchUtils";

const getDoctorNotesAboutClientWithId = async (id: string) => {
  return await getRequest(
    `${import.meta.env.VITE_API_URL}/api/doctor/notes/client/${id}`
  );
};

const getAllNotes = async () => {
  return await getRequest(`${import.meta.env.VITE_API_URL}/api/doctor/notes`);
};

const updateNote = async (id: string, formData: any) => {
  await putRequest(
    `${import.meta.env.VITE_API_URL}/api/doctor/notes/${id}`,
    formData
  );
};

export { getDoctorNotesAboutClientWithId, getAllNotes, updateNote };
