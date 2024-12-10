import { Star } from "@mui/icons-material"
import { AppBar, Box, Button, IconButton, Typography } from "@mui/material"

function Header() {
    return (
        <AppBar position="static" sx={{
            backgroundColor: "#556b2f",
            padding: '15px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Typography variant='h6'>VisualAlt</Typography>
                <IconButton>
                    <Star sx={{color: '#cdddb2'}}/>
                </IconButton>

            </Box>
            
            <Button variant="" sx={{
                backgroundColor: '#cdddb2',
                color: '#1b220e'
            }}>
                Share
            </Button>

        </AppBar>
    )
}

export default Header