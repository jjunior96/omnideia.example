import Header from 'components/Header';

import * as S from './styles';

const Dashboard: React.FC = () => {
  return (
    <S.Container>
      <Header />
      <img src="/img/bg.png" alt="" />
    </S.Container>
  );
};

export default Dashboard;
