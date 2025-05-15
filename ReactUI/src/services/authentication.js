// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/account/' }),
  endpoints: (builder) => ({
    // getPokemonByName: builder.query({
    //   query: (name) => `pokemon/${name}`,
    // }),
    registerUser: builder.mutation({
        query:(data)=> { return {
          url: 'register/',
          body: data,
          method:'POST',
          headers : {
            'Content-type': 'application/json'
          }
        } }
    }),
    loginUser: builder.mutation({
        query:(data)=> { return {
          url: 'token/',
          body: data,
          method:'POST',
          headers : {
            'Content-type': 'application/json'
          }
        } }
    })

  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useRegisterUserMutation, useLoginUserMutation } = authApi