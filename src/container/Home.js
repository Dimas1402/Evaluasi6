import React from 'react';
import Caraousel from '../components/Caraousel'
import './Home.css'

function Home() {
  return(

  <div className="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 className="display-4">Selamat Datang</h1>
    <div className="ya">
    </div>
    <p class="lead">Pilih menu anda?</p>
  </div>
  <h1 className="promo">Promo Paket Hemat</h1>
  <Caraousel/>
</div>

  )
}

export default Home