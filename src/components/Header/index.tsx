import { GiHamburgerMenu as HamburgerMenu } from 'react-icons/gi';

import { Flex, Text, Icon } from '@chakra-ui/react';

const Header = () => {
  return (
    <Flex
      width="100vw"
      height="14"
      alignItems="center"
      justifyContent="center"
      backgroundColor="orange.300"
      zIndex="10"
      position="fixed"
    >
      <Flex
        width="100%"
        maxWidth="1200px"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text fontSize="2xl" fontWeight="bold" color="white">
          Logo
        </Text>

        <Text fontSize="2xl" fontWeight="bold" color="white">
          {/* Menu */}
          <Icon as={HamburgerMenu} />
        </Text>
      </Flex>
    </Flex>
  );
};

export default Header;
