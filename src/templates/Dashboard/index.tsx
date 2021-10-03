import Header from 'components/Header';
import Logo from 'components/Logo';

import * as S from './styles';

const Dashboard: React.FC = () => {
  return (
    <S.Container>
      <Header />
      {/* <img src="/img/bg.png" alt="" /> */}
      <Logo />
    </S.Container>
  );
};

export default Dashboard;
