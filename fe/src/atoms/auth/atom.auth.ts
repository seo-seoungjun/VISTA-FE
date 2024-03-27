import { atom } from 'recoil';
import {
  IEmailLoginTokenData,
  IEmailUserInfo,
  IGoogleLoginTokenData,
  IGoogleUserInfo,
} from '../../interface/auth/interface.auth';

export const tokenInfo = atom<IGoogleLoginTokenData | IEmailLoginTokenData>({
  key: 'tokenData',
});

export const userInfo = atom<IGoogleUserInfo | null | IEmailUserInfo>({
  key: 'userData',
  default: null,
});
