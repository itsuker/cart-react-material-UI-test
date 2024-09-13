import { ButtonBase, Card, CardActionArea, CardMedia,  ListItem, Stack, Typography } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useCartItem } from "../styles";
import { Product } from "../interfaces/productos";
import React from "react";


    interface CartItemProps {
        item:Product,
        quantity:number
        key:number
        addTocart: () => void
        restToCart: () => void
        clearCart: () => void
        refButtonRemove:React.RefObject<HTMLButtonElement>
    }


export const CartItem = ( {item, quantity ,addTocart , restToCart ,refButtonRemove}:CartItemProps) => {
    const {  title, thumbnail,  price   } = item;
    const { card, cardButtons, cardStack } = useCartItem();
    // console.log(item);



  // const  roundedPrice = Math.round(price * 100) / 100;
    const Total = (price * quantity).toFixed(2);
    return (
      
        <ListItem>
            <Card sx={card} >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="150"
                        width="100"
                        image={thumbnail}
                        alt={title}
                    />
                </CardActionArea>
                <Stack sx={cardStack}>
                <ButtonBase 
                ref={refButtonRemove}
                onClick={ restToCart }
                sx={cardButtons}     >
                    
                            <RemoveIcon fontSize="small" style={{
                                color: 'white'
                            }} />
                     
                    </ButtonBase>
                    <Typography variant="h6" color="text.primary" textAlign='center'>
                        {quantity}
                    </Typography>
                    

                    <ButtonBase 
                    onClick={ addTocart }
                    sx={cardButtons}>
                            <AddIcon fontSize="small" style={{
                                color: 'white'
                            }} />
                    </ButtonBase>

                    

                </Stack>
                <Typography variant="body1" color="text.primary" textAlign='center'>
                      Price:${Total}
                    </Typography>
                
            </Card>
        </ListItem>
      
    )
}
