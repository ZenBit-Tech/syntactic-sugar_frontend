import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Token {
  token: string,
  email?: string
}

export const signupGoogleApi = createApi({
    reducerPath: 'signupGoogleApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:8000' }),
    tagTypes: ['user'],
    endpoints: builder => ({
      signUp: builder.mutation<Token, string>({
        query: body => ({
          url: `/users/`,
          method: 'POST',
          body,
        }),
        invalidatesTags: ['user'],
      })
    })
})

export const {useSignUpMutation} = signupGoogleApi;
