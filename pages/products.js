import styles from '../styles/Products.module.css'
import React from 'react';
import axios from 'axios';
import Link  from 'next/link';

function Products({products}){
    return(
        <div className='listaprodutos'>
            <header>
               <title>Produtos | E-commerce</title> 
            </header>
        <h1 className='neonText plistaprodutos'>Lista de Produtos</h1>
        {products.map((product) => (
            <div className='flexbox'> 
                <Link href='/products/[id]' as={`/products/${product.id}`}> 
                <div className='titulo'><p>{product.title}</p></div>
                <div className='preco'><p>R$ {product.price}</p></div>
                <div className='imagem'><img width={200} src = {product.image}></img></div>
                <div className='desc'><p>{product.description}</p></div>
                </Link>
            </div>
        ))}
    </div>
    )
}

export async function getStaticProps(context) {
    const response = await axios.get(
        'https://fakestoreapi.com/products'
    );

    const data = await response.data

    return {
        props: {products:data},
    }
}

export default Products;
