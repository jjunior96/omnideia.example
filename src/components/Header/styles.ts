import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    width: 100%;
    height: ${theme.contentHeight.sidebar};
    /* background-color: ${theme.colors.primary}; */
    backdrop-filter: blur(5px);
    box-shadow: ${theme.box.shadow};
    position: fixed;
    top: 0;
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    max-width: 1200px;

    display: flex;
    align-items: center;
    margin: 0 auto;
    justify-content: space-between;
    padding: 0 2rem;

    svg {
      color: ${theme.colors.primary};
    }
  `}
`;
