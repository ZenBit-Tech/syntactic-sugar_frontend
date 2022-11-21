export interface SendEmail {
  email?: string;
}

export interface SendPassAndToken {
  token: string | undefined;
  password: string;
}
