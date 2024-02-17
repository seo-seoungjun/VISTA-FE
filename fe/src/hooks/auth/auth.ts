import { useHistory } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { getUserInfo } from '../../APIs/api';
import { useQuery } from 'react-query';
import { TokenKey, userInfo } from '../../atoms/atom';

export const useAccessTokenVaild = (redirectUrl?: string) => {
  const accessToken = localStorage.getItem(TokenKey.accessToken);
  const setUserInfo = useSetRecoilState(userInfo);
  const history = useHistory();

  const { data } = useQuery('token', () => getUserInfo(accessToken), {
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
      console.log(error);
      //refresh 토큰으로 새로은 access토큰 요청, 이때 refresh도 만료되면 재로그인요청
      history.push('/login');
    },
  });
};
