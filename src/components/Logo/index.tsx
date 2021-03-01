import Image from 'next/image';

import * as S from './styles';

const Logo = () => {
  return (
    <S.Container>
      <Image src="/assets/logo.svg" width={100} height={100} />
    </S.Container>
  );
};

export default Logo;
