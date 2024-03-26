export enum TokenKey {
  'accessToken' = 'access_token',
  'refreshToken' = 'refresh_token',
}

export interface IEmailUserInfo {}

export interface IGoogleUserInfo {
  email: string;
  given_name: string;
  id: string;
  locale: string;
  name: string;
  picture: string;
  verified_email: boolean;
}

export interface IGoogleTokenResponse {
  access_token: string;
  expires_in: number;
  id_token: string;
  refresh_token: string;
  scope: string;
  token_type: string;
}
