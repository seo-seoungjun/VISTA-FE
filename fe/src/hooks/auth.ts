import { useHistory } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { getUserInfo } from '../APIs/api';
import { useQuery } from 'react-query';
import { userInfo } from '../atoms/atom';

export const useAccessTokenVaild = (redirectUrl?: string) => {
  const accessToken = localStorage.getItem('access_token');
  const setUserInfo = useSetRecoilState(userInfo);
  const history = useHistory();

  const { data } = useQuery('token', () => getUserInfo(accessToken), {
    onSuccess: (data) => {
      if (data == 0) {
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
      console.log(error);
      history.push('/login');
    },
  });
};
