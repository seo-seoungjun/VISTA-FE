import { useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';
import { revokeGoogleLoginToken } from '../APIs/auth/auth.google';
import {
  ILocalTokenData,
  TokenKey,
  isGoogleUser,
} from '../interface/auth/interface.auth';
import { useRecoilState } from 'recoil';
import { userInfo } from '../atoms/auth/atom.auth';

export const useLogOut = () => {
  const history = useHistory();
  const [userData, setUserData] = useRecoilState(userInfo);

  const data = localStorage.getItem(TokenKey.accessToken) as string;

  const accessTokenData: ILocalTokenData = JSON.parse(data);

  const { mutate: revokeTokenMutate } = useMutation(revokeGoogleLoginToken, {
    onSuccess: (data) => {
      // console.log(data);
      localStorage.removeItem(TokenKey.accessToken);
      localStorage.removeItem(TokenKey.refreshToken);
      setUserData(null);
      history.push('/login');
    },
    onError: (error) => {
      // console.log(error);
    },
  });

  const logOut = () => {
    if (isGoogleUser(userData)) {
      revokeTokenMutate(accessTokenData.access_token);
    } else {
      localStorage.removeItem(TokenKey.accessToken);
      setUserData(null);
      history.push('/login');
    }
  };

  return logOut;
};
