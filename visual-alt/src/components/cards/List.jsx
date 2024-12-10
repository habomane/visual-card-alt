import { Box, Card, CardContent, TextField} from "@mui/material"
import { useState, useEffect } from "react";
import { CreateItem } from "../button/CreateItem";
import { Item } from "./Item";
import { CreateList } from "../button/CreateList";

export class ListModel {
    constructor(title) {
        this.title = title;
    }

}
export const List = (props) => {
    const [createdList, setCreatedList] = useState(false);
    const [newItem, setNewItem] = useState(null);
    const [title, setTitle] = useState("")
    const [creatingNewItem, setCreatingNewItem] = useState(false);
    const [totalItems, setTotalItems] = useState([]);
  
    useEffect(() => {
      if(newItem === null) { return; }
  
      totalItems.push(newItem);
      
      setNewItem(null);
      setCreatingNewItem(false);
  
    }, [newItem, totalItems])

    return (
        <>
        {
        createdList ? (<Card sx={{
            backgroundColor: "#eef3e5"
        }}>
            <CardContent>
            <TextField id="standard-basic" label="Title" variant="standard" 
            sx={{
                width: '100%',
      }}
      onChange={(e) => setTitle(e.target.value)}
            // eslint-disable-next-line react/prop-types
            value={props.title}/>

<Box sx={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: '10px',
                gap: '3px'
              }}>
                {
                  totalItems.map((item, key) => {
                    return <Item key={key} item={item}></Item>
                  })
                }
                <Box sx={{
                    marginTop: '5px'
                }}>
                <CreateItem 
              creatingItem={creatingNewItem}
              setCreatingItem={setCreatingNewItem}
              setNewItem={setNewItem}/>
                </Box>

              </Box>


            
            </CardContent>


        </Card>
        ) : (<CreateList
        onClick={() => setCreatedList(true)}></CreateList>)
    }
        
        </>
    )
}