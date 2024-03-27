import { useGoogleAccessTokenVaild } from './useGoogleAccessTokenVaild';
import { useSetRecoilState } from 'recoil';
import { tokenInfo } from '../atoms/auth/atom.auth';
import { useMutation } from 'react-query';
import { TokenKey } from '../interface/auth/interface.auth';
import { getGoogleLoginToken } from '../APIs/auth/auth.google';

export const useGoogleMutate = () => {
  const setTokenData = useSetRecoilState(tokenInfo);

  const googleLoginUserInfo = useGoogleAccessTokenVaild('/demo');

  const { mutate } = useMutation(getGoogleLoginToken, {
    onSuccess: (tokenData) => {
      console.log(tokenData);
      tokenData.domain = 'google';

      const { access_token, domain } = tokenData;

      localStorage.setItem(
        TokenKey.accessToken,
        JSON.stringify({
          access_token,
          domain,
        })
      );

      setTokenData(tokenData);

      googleLoginUserInfo(tokenData.access_token);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return mutate;
};
