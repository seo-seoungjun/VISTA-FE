import { useHistory } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { useMutation } from 'react-query';
import { getGoogleLoginUserInfo } from '../APIs/auth/auth.google';
import { userInfo } from '../atoms/auth/atom.auth';

export const useGoogleAccessTokenVaild = (onSuccessRedirectUrl?: string) => {
  const setUserInfo = useSetRecoilState(userInfo);
  const history = useHistory();

  const { mutate } = useMutation(getGoogleLoginUserInfo, {
    onSuccess: (data) => {
      setUserInfo(data);
      // console.log(data);
      if (onSuccessRedirectUrl !== undefined) {
        history.push(onSuccessRedirectUrl);
      }
    },
    onError: (error) => {
      history.push('/login');
    },
  });

  return mutate;
};
