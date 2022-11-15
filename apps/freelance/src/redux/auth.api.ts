import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface IForm {
  email: string;
  password: string;
}

interface IServerResponse {
  id: string;
  email: string;
  isActivated: boolean;
}

interface IToken {
  token: string;
}

const baseUrl: string = process.env['NX_API_URL_AUTH'] || '';

export const authApi = createApi({
  reducerPath: 'auth/api',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  refetchOnFocus: true,
  endpoints: build => ({
    login: build.mutation<IServerResponse, IForm>({
      query: (body: IForm) => ({
        url: 'login',
        method: 'POST',
        body,
      }),
    }),
    loginWithGoogle: build.mutation<IServerResponse, IToken>({
      query: (body: IToken) => ({
        url: 'google/login',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useLoginMutation, useLoginWithGoogleMutation } = authApi;
