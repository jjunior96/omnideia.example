import { useCallback, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

import Logo from 'components/Logo';

import * as S from './styles';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = useCallback(() => {
    setOpenMenu(!openMenu);

    console.log(openMenu);
  }, [openMenu]);

  return (
    <S.Container>
      <S.Content>
        <Logo />
        <GiHamburgerMenu size={26} onClick={handleOpenMenu} />
      </S.Content>
    </S.Container>
  );
};

export default Header;
