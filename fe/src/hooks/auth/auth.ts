import { useHistory } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { useMutation } from 'react-query';
import { getGoogleLoginUserInfo } from '../../APIs/auth/auth.google';
import { userInfo } from '../../atoms/user/atom.user';

export const useAccessTokenVaild = (onSuccessRedirectUrl?: string) => {
  const setUserInfo = useSetRecoilState(userInfo);
  const history = useHistory();

  const { mutate } = useMutation(getGoogleLoginUserInfo, {
    onSuccess: (data) => {
      if (data == null) {
        history.push('/login');
      } else {
        setUserInfo(data);
        console.log(data);
        if (onSuccessRedirectUrl != undefined) {
          history.push(onSuccessRedirectUrl);
        }
      }
    },
    onError: (error) => {
      // console.log(error);
      history.push('/login');
    },
  });

  return mutate;
};
