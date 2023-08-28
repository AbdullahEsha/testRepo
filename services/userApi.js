import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.API_URL }),
  tagTypes: ['Address'],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `/api/v1/user`,
      providesTags: ['Address'],
    }),
    getUserByID: builder.query({
      query: (id) => `/api/v1/user/${id}`,
      providesTags: ['Address'],
    }),
    getUserAddressByID: builder.query({
      query: (id) => `/api/v1/user-addressbook/${id}`,
      providesTags: ['Address'],
    }),
    createAddress: builder.mutation({
      query: (payload) => ({
        url: "/api/v1/user-addressbook",
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      // invalidate the cache after successful creation
      invalidatesTags: ['Address'],
    }),
    updateUserAddressById: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/api/v1/user-addressbook/${id}`,
        method: "PATCH",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ['Address'],
    }),
    deleteUserAddressById: builder.mutation({
      query: (id) => ({
        url: `/api/v1/user-addressbook/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ['Address'],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserByIDQuery,
  useGetUserAddressByIDQuery,
  useCreateAddressMutation,
  useUpdateUserAddressByIdMutation,
  useDeleteUserAddressByIdMutation
} = usersApi;
