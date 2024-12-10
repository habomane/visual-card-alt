/* eslint-disable react/prop-types */
import {  Card, CardContent, Typography} from "@mui/material"


export const Item = (props) => {
    return (
        <Card sx={{
            backgroundColor: "#ffffff",
            width: '100%',
        }}>
            <CardContent>
                <Typography sx={{
                      width: '100%',
            }}>
                {props.item}
            </Typography>

            </CardContent>


        </Card>
    )
}