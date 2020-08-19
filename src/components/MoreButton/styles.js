import styled from 'styled-components';

export const OptionButton = styled.a`
  width: 24px;
  height: 24px;
  background: transparent;
  border: none;
  position: absolute;
  bottom: 30px;

  transition: filter 300ms;

  &:hover {
    filter: brightness(1.2);
  }
`;
