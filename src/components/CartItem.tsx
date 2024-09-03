import { ButtonBase, Card, CardActionArea, CardMedia, IconButton, ListItem, Stack, Typography } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useCartItem } from "../styles";


export const CartItem = () => {


    const { card, cardButtons, cardStack } = useCartItem();

    return (
        <ListItem>
            <Card sx={card} >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="175"
                        width="50"
                        image="https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/thumbnail.png"
                        alt="Product"
                    />
                </CardActionArea>
                <Stack sx={cardStack}>
                    <ButtonBase sx={cardButtons}   >
                        <IconButton color="primary" size="small">
                            <RemoveIcon fontSize="small" style={{
                                color: 'white'
                            }} />
                        </IconButton>
                    </ButtonBase>
                    <Typography variant="h6" color="text.primary" textAlign='center'>
                        1
                    </Typography>
                    <ButtonBase sx={cardButtons}>
                        <IconButton color="primary" size="small">
                            <AddIcon fontSize="small" style={{
                                color: 'white'
                            }} />
                        </IconButton>
                    </ButtonBase>
                </Stack>
            </Card>
        </ListItem>
    )
}
