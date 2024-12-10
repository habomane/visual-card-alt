import { Add } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";


export const CreateList = (props) => {
    return (
        <Button 
        // eslint-disable-next-line react/prop-types
        onClick={props.onClick}
        variant='outlined' sx={{
      display: 'flex',
      textTransform: 'none',
      flexDirection: 'row',
      color: '#1b220e',
      width: '100%',
      backgroundColor: '#c2d5a1',
      borderColor: '#e3e6d4',
      borderWidth: '1px'
    }}>
      <IconButton>
        <Add sx={{color: '#1b220e'}}/>
      </IconButton>
    Add another list
    </Button>
    )
}