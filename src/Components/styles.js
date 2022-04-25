import styled from 'styled-components'
import Button from '@material-ui/core/Button';

export const LeftMenuView = styled.div`
border-right: 1px solid ${props => props.borderColor};
display: flex;
width: 20%;
`;

export const LeftContent = styled.div`
margin:40px;
`;

export const MainContentView = styled.div`
display: flex;
width: 100%;
`;

export const MainView = styled.div`
display: flex;
height: 100vh;
width: 100%;
align-items: center;
flex-direction: column;
`;

export const SearchView =  styled.div`
width: 50%;
`;

export const StyledButton = styled(Button)`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border-radius: 3px;
  border: 0;
  color: white;
  height: 50px;
  width: 200px;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
`;

export const ItemView = styled.div`
  display:flex;
`;

export const OptionsContainer = styled.div`
margin-top: 70px;
`