import styled from 'styled-components';
import DehazeIcon from '@mui/icons-material/Dehaze';

export const Hamburger = styled(DehazeIcon)`

&& {
  background-color: ${(props) => props.theme.color3};
  border-radius: 2px;
  width: 100%;
  &:hover {
    background-color: #105b72c2;
  };
}
`;