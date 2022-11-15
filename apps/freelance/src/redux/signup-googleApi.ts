import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Token {
  token: string,
}

const baseUrl: string = process.env['NX_APP_API_URL'] || '';

export const signupGoogleApi = createApi({
    reducerPath: 'signupGoogleApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl}),
    tagTypes: ['user'],
    endpoints: builder => ({
      signUp: builder.mutation<Token, string>({
        query: body => ({
          url: `auth/google/signup`,
          method: 'POST',
          body,
        }),
        invalidatesTags: ['user'],
      })
    })
})

export const {useSignUpMutation} = signupGoogleApi;
