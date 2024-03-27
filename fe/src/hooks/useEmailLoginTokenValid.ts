import { useHistory } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { useMutation } from 'react-query';
import { userInfo } from '../atoms/auth/atom.auth';
import { getEmailLoginUserInfo } from '../APIs/auth/auth.email';

export const useEmailLoginTokenValid = (onSuccessRedirectUrl?: string) => {
  const setUserInfo = useSetRecoilState(userInfo);
  const history = useHistory();

  const { mutate } = useMutation(getEmailLoginUserInfo, {
    onSuccess: (data) => {
      setUserInfo(data);
      console.log(data);
      if (onSuccessRedirectUrl != undefined) {
        history.push(onSuccessRedirectUrl);
      }
    },
    onError: (error) => {
      history.push('/login');
    },
  });

  return mutate;
};
