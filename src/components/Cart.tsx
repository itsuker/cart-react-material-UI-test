import { AddShoppingCart } from "@mui/icons-material"
import { Drawer, IconButton, List, Paper } from "@mui/material"
import { useState } from "react"
import { CartItem } from "./CartItem"
import { useCart } from "../styles"



export const Cart = () => {
  const [open, setopen] = useState(false)
  const { cartPaper, cartIconButton } = useCart();
  const towgglerDrawer = (isOpen: boolean) => () => {

    setTimeout(() => {
      setopen(isOpen)
    }, 700)
  }
  const drawerList = (

    <Paper
      sx={cartPaper}
      role="presentation"
      onMouseLeave={towgglerDrawer(false)}   >
      <List>
        <CartItem />
      </List>
    </Paper>
  )
  return (
    <div>
      <IconButton color="primary"
        size="large" title='Add to cart"'
        onMouseEnter={towgglerDrawer(true)}
        sx={cartIconButton}>
        <AddShoppingCart fontSize="large" />

      </IconButton>
      <Drawer anchor="right" open={open} onClose={towgglerDrawer(false)}

        className="animate__animated animate__fadeInTopRight  animate__medium"
      >
        {drawerList}
      </Drawer>
    </div>
  )
}
