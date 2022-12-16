import styles from '../styles/Home.module.css'
import React from 'react';
import axios from 'axios';

function Home(){
  return(
    <div className={styles.container}>
      <header>
        <title> E-commerce.com </title>
      </header>
      <h1 class="neonText pcenterh1 pcentergeral"> Projeto Produtos </h1>
      <a href='\products' class="neonText"> <p className='pcenter pcentergeral'>clique aqui para abrir a lista de produtos</p></a>
    </div>
  )
}

export default Home;