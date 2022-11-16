import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SendEmail, GetEmail } from './types';

const BASE_URL = 'http://localhost:8000/auth';

export const resetPasswordApi = createApi({
  reducerPath: 'resetPasswordApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: builder => ({
    sendLinkEmail: builder.mutation<boolean, SendEmail>({
      query: values => ({
        url: '/forgotpassword',
        method: 'POST',
        body: values,
      }),
    }),
  }),
});

export const { useSendLinkEmailMutation } = resetPasswordApi;
