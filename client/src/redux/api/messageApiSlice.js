import { apiSlice } from "./apiSlice";
import { MESSAGE_URL } from "../constants";

export const messageSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    sendMessage: builder.mutation({
      query: (data) => ({
        url: `${MESSAGE_URL}/send`,
        method: "POST",
        body: data,
      }),
    }),
    getMessages: builder.query({
      query: () => ({
        url: `${MESSAGE_URL}/getall`,
        method: "GET",
      }),
    }),
  }),
});

export const { useSendMessageMutation, useGetMessagesQuery } = messageSlice;
