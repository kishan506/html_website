import * as React from 'react';
import DrawerAppBar from './NAvbar1';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from "axios"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useEffect, useState } from 'react';

function Carts() {
    const [products, setProducts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        axios.get("http://localhost:3000/products")
            .then((res) => {
                // Calculate the total price here
                setProducts(res.data);
                const totalPrice = res.data.reduce((total, product) => total + product.price, 0);
                setTotalPrice(totalPrice);
                
            })
    }, [])

    return (
        <>
            <DrawerAppBar />
            <div style={{ display: "flex", flexWrap: "wrap", gap: "90px", justifyContent: "center" }}>
                {products.slice(0, 20).map((value, index) => {
                    return (
                        <Card sx={{ maxWidth: 345 }} key={index}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image={value.image}
                                style={{ objectFit: "contain" }}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {value.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    ${value.price}
                                </Typography>
                            </CardContent>
                            <Button variant="outlined" onClick={() => {
                                axios.delete("http://localhost:3000/products/" + value.id)
                                    .then((res) => { window.location.reload(); })
                            }} >
                                cancel
                            </Button>
                        </Card>
                    )
                })}
                <h1>Total Price: ${totalPrice}</h1>
            </div>
        </>
    )
}

export default Carts;
