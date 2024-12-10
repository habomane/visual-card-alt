
import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box} from '@mui/material';
import Header from '@/components/layout/Header';
import {List} from '@/components/cards/List';
import { ListModel } from '../components/cards/List';


function App() {


  return (
    <>
    <Header></Header>
    <Box sx={{
      backgroundColor: "#96b85d",
      height: "100vh",
      width: '100vw',
      padding:5,
      display: 'flex', 
      flexDirection: { sm: 'column', md: 'row'},
      justifyContent: 'space-around'
    }}>
            {
              [0,0,0,0].map((item, key) => {
                return <Box sx={{
                  width: '20vw'
                }}>
                  <List key={key}></List>
                  </Box>
              })
            }

       
     
  </Box>

    </>
  )
}

export default App
