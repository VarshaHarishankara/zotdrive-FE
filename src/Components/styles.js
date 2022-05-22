import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import TextField from '@mui/material/TextField';

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
flex-direction: row;
height: 10%;
`;

export const ContentView = styled.div`
display: flex;
width: 100%;
flex-direction: column;
height: 100vh;
`;

export const MainView = styled.div`
display: flex;
height: 100vh;
width: 100%;
flex-direction: flex-start;
`;

export const SearchView =  styled.div`
width: 70%;
margin-top:20px;
`;

export const StyledButton = styled(Button)`
  background: #470F9E;
  background: -webkit-linear-gradient(top left, #470F9E, #8A02CE);
  background: -moz-linear-gradient(top left, #470F9E, #8A02CE);
  background: linear-gradient(to bottom right, #470F9E, #8A02CE); 
  border-radius: 3px;
  border: 0;
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

export const WhiteBorderTextField = styled(TextField)`
  & label.Mui-focused {
    color: black;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: black;
    }
  }
`;

export const ProfileBtn = styled(Button)`
  width:100%;
`;

export const ProfileView = styled.div`
  display: flex;
  width: 30%;
  height:10%;
  align-items: center;
`;

export const FilesView = styled.div`
  margin-left: 30px;
  border-right: 1px solid ${props => props.borderColor};
  padding-right: 50px;
  flex: 1;
`;

export const FileItem = styled.div`
  margin-bottom:30px;
`;

export const FileIconView = styled.div`
    width: 200px;
    border: 2px solid #808080;
    border-radius: 10px;
`;

export const FileInitialView = styled.div`
    border-bottom: 2px solid #808080;
`;

export const FileNameView = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center

`;

export const InitialContainer = styled.div`
  display: flex;
  margin: 10px;
  align-items: center;
  justify-content: center;
  background: #470F9E;
  background: -webkit-linear-gradient(top left, #470F9E, #8A02CE);
  background: -moz-linear-gradient(top left, #470F9E, #8A02CE);
  background: linear-gradient(to bottom right, #470F9E, #8A02CE); 
`;

export const FilesAndDetailsView = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  overflow: scroll:
`;

export const DetailsView = styled.div`
  display:flex;
  margin: 30px;
  flex-direction: row
`;

export const DetailRowView = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start
`;

export const RightContentView = styled.div`
  display: flex;
  flex: 0 0 250px;
  flex-direction: column;
`;

export const RightLabelView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start
`;

export const ClearView = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%
`;

export const FileOptionsView = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px;
  justify-content: space-between
`;