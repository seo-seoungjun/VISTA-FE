import { useHistory } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { getUserInfo } from '../../APIs/api';
import { UseMutateFunction, useMutation } from 'react-query';
import { IUserInfo, TokenKey, userInfo } from '../../atoms/atom';

export const useAccessTokenVaild = (redirectUrl?: string) => {
  const setUserInfo = useSetRecoilState(userInfo);
  const history = useHistory();

  const { mutate } = useMutation(getUserInfo, {
    onSuccess: (data) => {
      if (data == null) {
        history.push('/login');
      } else {
        setUserInfo(data);
        console.log(data);
        if (redirectUrl != undefined) {
          history.push(redirectUrl);
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
