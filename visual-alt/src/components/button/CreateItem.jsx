import { Add, Clear} from "@mui/icons-material";
import { Box, Button, Card, IconButton, TextField } from "@mui/material";
import { useState } from "react";


export const CreateItem = (props) => {
    // eslint-disable-next-line react/prop-types
    const {creatingItem, setCreatingItem, setNewItem} = props;
    const [item, setItem] = useState("");
    return (
        <>
        {
            creatingItem ? (
                <Card>
                    <TextField
  hiddenLabel
  id="filled-hidden-label-small"
  size="small"
  sx={{width: '100%'}} 
  onChange={(e) => setItem(e.target.value)}
/>

                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: '5px'
                    }}>
                    <Button
                    onClick={() => {

                        setNewItem(item)
                        setItem("")
                    }
                    }>
                        Add
                    </Button>

                    <Button
                    onClick={() => setCreatingItem(false)}>
                        <IconButton>
                            <Clear></Clear>
                        </IconButton>
                    </Button>
                    </Box>

                </Card>
            ) : (<Button 
                onClick={() => setCreatingItem(true)}
                variant='outlined' sx={{
              display: 'flex',
              textTransform: 'none',
              flexDirection: 'row',
              color: '#000000',
              width: '100%',
              backgroundColor: '#d6dace',
              borderColor: '#e3e6d4',
              borderWidth: '1px'
            }}>
              <IconButton>
                <Add sx={{color: '#1b220e'}}/>
              </IconButton>
              Add a card
            </Button>)
        }
        </>
        
    )
}