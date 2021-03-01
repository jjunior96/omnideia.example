import Header from 'components/Header';
import Main from 'components/Main';

import * as S from './styles';

const Dashboard: React.FC = () => {
  return (
    <S.Container>
      <Header />
      <Main>
        <h1>Teste</h1>
      </Main>
    </S.Container>
  );
};

export default Dashboard;
