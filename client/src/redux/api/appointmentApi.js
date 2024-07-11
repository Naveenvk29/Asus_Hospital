import { apiSlice } from "./apiSlice";
import { APPOINTMENT_URL } from "../constants";

export const appointmentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAppointments: builder.query({
      query: () => ({
        url: `${APPOINTMENT_URL}/getall`,
        method: "GET",
      }),
    }),
    createAppointment: builder.mutation({
      query: (data) => ({
        url: `${APPOINTMENT_URL}/new`,
        method: "POST",
        body: data,
      }),
    }),
    updateAppointment: builder.mutation({
      query: ({ id, data }) => ({
        url: `${APPOINTMENT_URL}/update/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteAppointment: builder.mutation({
      query: (id) => ({
        url: `${APPOINTMENT_URL}/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAppointmentsQuery,
  useCreateAppointmentMutation,
  useUpdateAppointmentMutation,
  useDeleteAppointmentMutation,
} = appointmentApiSlice;
