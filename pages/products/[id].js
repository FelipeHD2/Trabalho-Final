import styles from '../../styles/Id.module.css'
import axios from 'axios';

function Products({product = {}}){
    return( <div className='idcontainer'>
            <header>
               <title>{product.title}</title> 
            </header>
        <div><p>{product.title}</p></div>
        <div><p>R$ {product.price}</p></div>
        <div><img width={250} src = {product.image}/></div>
        <div><p className='descid'>{product.description}</p></div>
    </div>)
}

export async function getStaticProps(context){
    const response = await axios.get (
    'https://fakestoreapi.com/products/' + context.params.id
    );
    
    const product = await response.data;
    return {
    props: {product}
    }
    }
    
    export async function getStaticPaths(){
    const response = await axios.get (
    'https://fakestoreapi.com/products'
    );
    const products = await response.data;
    const paths = products.map((product) => {
        return {params: {id:String(product.id)}};
        });
    return {
        paths,
        fallback: true,
    };
    }

export default Products;

