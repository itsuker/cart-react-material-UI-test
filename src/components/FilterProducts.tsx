import { Box, FormControl, InputLabel, MenuItem, Select,  Slider, Stack, Typography } from '@mui/material'
import React, {  useId} from 'react'
import { useFilter } from '../hooks/useFilter';
import { useFilterProducts } from '../styles';




export const FilterProducts = () => {
  const { minprice,category,hadleChangeMinPrice,hadleChangeCategory } = useFilter();
  const minPriceFilterId = useId()
  const { stack  } = useFilterProducts();
  //console.log(minPriceFilterId)

  return (
    <>{/** */}
      <Stack sx={stack} spacing={2} >
        <Box sx={{ width: 300 }}>
          <Typography component="label" variant="body1">Price:</Typography>
          <Slider
            defaultValue={0}
            aria-label="Default"
            valueLabelDisplay='auto'
            valueLabelFormat={(value) => `$${value}`}
            min={0}
            max={1000}
            disabled={category === ""}
            sx={{
              backgroundColor: 'secondary.main',
              color: 'white',
            }}
            id={minPriceFilterId}
            value={minprice}
            onChange={hadleChangeMinPrice}
          />
        </Box>
        <Box sx={{ width: 300 }}>
          <FormControl fullWidth
          >
            <InputLabel id="category-select-label">  Category</InputLabel>
            {/*id="demo-simple-select" */}
            <Select
              labelId="category-select-label"
              id="category-select"
              label="Category"
              value={category}
              onChange={hadleChangeCategory}>
              {/*all */}
              <MenuItem value="all" >All</MenuItem>
              {/**beauty */}
              <MenuItem value="beauty" >Beauty</MenuItem>
              {/**fragrances */}
              <MenuItem value="fragrances" >Fragrances</MenuItem>
              {/**furniture */}
              <MenuItem value="furniture" >Furniture</MenuItem>
              {/**groceries */}
              <MenuItem value="groceries" >Groceries</MenuItem>
            </Select>


          </FormControl>
        </Box>


      </Stack>


    </>
  )
}
