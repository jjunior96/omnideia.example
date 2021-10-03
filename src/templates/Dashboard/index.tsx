import { Flex } from '@chakra-ui/react';

import Header from 'components/Header';
import Logo from 'components/Logo';

const Dashboard = () => {
  return (
    <Flex width="100vw" height="100vh">
      <Header />
      {/* <img src="/img/bg.png" alt="" /> */}
      <Logo />
    </Flex>
  );
};

export default Dashboard;
