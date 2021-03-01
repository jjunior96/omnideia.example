import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #ddd;
`;

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    margin: 0 auto;
    margin-top: ${theme.contentHeight.sidebar};
    padding: 0 2.4rem;
  `}
`;