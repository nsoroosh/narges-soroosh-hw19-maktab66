import {Container , Box , CssBaseline, AppBar} from '@mui/material'
import ButtonAppBar from './AppBar';
import ButtonSection from './BottomSection';
import { ReferenceDataContextProvider } from '../context/ContextFile';
 export default function MainPage() {
  return (
    <>
    <CssBaseline />
      <Container maxWidth="xl">
      <ReferenceDataContextProvider>
        <ButtonAppBar/>
        <ButtonSection/>
        </ReferenceDataContextProvider>
      </Container>
    </>
  );
}
