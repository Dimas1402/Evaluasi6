import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes/Routes';
import './App.css';



class App extends Component{

 render(){
   return(
     <>
       <Routes/>
     </>
   )
 }
}







export default App;








// import React from "react";
// import "./App.css";

// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// function Index() {
//   return <h2 className="nama"> ok</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }

// function AppRouter() {
//   return (
//     <Router>
//       <div>
//         <nav className="ok">
         //  <ul>
         //    <li>
         //      <Link to="/">Home</Link>
         //    </li>
         //    <li>
         //      <Link to="/about/">About</Link>
         //    </li>
         //    <li>

         //      <Link to="/users/">Users</Link>
         //    </li>
         // </ul>
//         </nav>

//         <Route path="/" exact component={Index} />
//         <Route path="/about/" component={About} />
//         <Route path="/users/" component={Users} />
//       </div>
//     </Router>
//   );
// }

// export default AppRouter;
