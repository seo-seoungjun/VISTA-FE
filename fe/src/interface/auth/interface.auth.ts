export interface ILogin {
  email: string;
  password: string;
}

export enum TokenKey {
  'accessToken' = 'access_token',
  'refreshToken' = 'refresh_token',
}

export interface IGoogleLoginTokenData {
  access_token: string;
  expires_in: number;
  id_token: string;
  refresh_token: string;
  scope: string;
  token_type: string;
  domain?: 'google';
}

export interface IEmailLoginTokenData {
  access_token: string;
  domain?: 'email';
}

export interface IEmailUserInfo {
  email: string;
  name: string;
}

export interface IGoogleUserInfo {
  email: string;
  given_name: string;
  id: string;
  locale: string;
  name: string;
  picture: string;
  verified_email: boolean;
}

export interface GetGoogleLoginTokenType {
  (authorizationCode: string): Promise<IGoogleLoginTokenData>;
}

export interface GetEmailLoginTokenType {
  (data: ILogin): Promise<IEmailLoginTokenData>;
}

export function isGoogleUser(userData: any): userData is IGoogleUserInfo {
  if (userData === null || userData === undefined) return false;
  return Object.keys(userData).length === 7;
}
