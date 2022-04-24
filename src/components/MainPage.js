import {Container , Box , CssBaseline, AppBar} from '@mui/material'
import ButtonAppBar from './AppBar';
import ButtonSection from './BottomSection';
 export default function MainPage() {
  return (
    <>
    <CssBaseline />
      <Container maxWidth="xl">
        <ButtonAppBar/>
        <ButtonSection/>
      </Container>
    </>
  );
}
