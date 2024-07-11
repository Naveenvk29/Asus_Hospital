import { apiSlice } from "./apiSlice";
import { USERS_URL } from "../constants";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    patientRegister: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/patient/register`,
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),
    createAdmin: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/admin/addnew`,
        method: "POST",
        body: data,
      }),
    }),
    addNewDoctor: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/doctor/addnew`,
        method: "POST",
        body: data,
      }),
    }),
    getAllDoctors: builder.query({
      query: () => ({
        url: `${USERS_URL}/doctors`,
        method: "GET",
      }),
    }),
    getUserDetails: builder.query({
      query: () => ({
        url: `${USERS_URL}/admin/me`,
        method: "GET",
      }),
    }),
    logoutAdmin: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/admin/logout`,
        method: "GET",
      }),
    }),
    logoutPatient: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/patient/logout`,
        method: "GET",
      }),
    }),
    getPatientDetails: builder.query({
      query: () => ({
        url: `${USERS_URL}/patient/me`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  usePatientRegisterMutation,
  useLoginMutation,
  useCreateAdminMutation,
  useAddNewDoctorMutation,
  useGetAllDoctorsQuery,
  useGetUserDetailsQuery,
  useLogoutAdminMutation,
  useLogoutPatientMutation,
  useGetPatientDetailsQuery,
} = usersApiSlice;
