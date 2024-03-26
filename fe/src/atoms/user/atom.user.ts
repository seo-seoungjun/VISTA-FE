import { atom } from 'recoil';
import {
  IEmailUserInfo,
  IGoogleTokenResponse,
  IGoogleUserInfo,
} from '../../interface/user/interface.user';

export const tokenInfo = atom<IGoogleTokenResponse>({
  key: 'tokenData',
});

export const userInfo = atom<IGoogleUserInfo | null | IEmailUserInfo>({
  key: 'userData',
  default: null,
});
