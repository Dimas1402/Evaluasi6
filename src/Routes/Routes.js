import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../container/Home';
import Users from '../container/Users';
import About from '../container/About';
import Kontak from '../container/Kontak';
import Navbar from '../components/Navbar';
import Footer from '../Footer/Footer';





function Routes(){
	return(

		<Router>
		<Navbar/>
        <Route path="/" exact component={Home} />
        <Route path="/makanan/" component={About} />
        <Route path="/minuman/" component={Users} />
        <Route path="/kontak/" component={Kontak} />
        <Footer/>
        </Router>

	)
}

export default Routes