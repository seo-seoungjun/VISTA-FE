import { useSetRecoilState } from 'recoil';
import { tokenInfo } from '../atoms/auth/atom.auth';
import { useMutation } from 'react-query';
import { TokenKey } from '../interface/auth/interface.auth';
import { getEmailLoginToken } from '../APIs/auth/auth.email';
import { useEmailLoginTokenValid } from './useEmailLoginTokenValid';

export const useEmailMutate = () => {
  const setTokenData = useSetRecoilState(tokenInfo);

  const emailLoginUserInfo = useEmailLoginTokenValid('/demo');

  const { mutate } = useMutation(getEmailLoginToken, {
    onSuccess: (tokenData) => {
      // console.log(tokenData);
      tokenData.domain = 'Standard';

      const { access_token, domain } = tokenData;

      localStorage.setItem(
        TokenKey.accessToken,
        JSON.stringify({
          access_token,
          domain,
        })
      );

      setTokenData(tokenData);

      emailLoginUserInfo({ access_token, domain });
    },
    onError: (error) => {
      // console.log(error);
    },
  });

  return mutate;
};
