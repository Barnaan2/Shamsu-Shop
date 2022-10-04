import {Routes,Route, Outlet} from 'react-router-dom';
import Home from "./routes/home/home.component";
import Navigation from './routes/navigation-routes/navigation.route';
import SignIn from './routes/sign-in/sign-in.component';
const Asbeza=()=>{
  console.log("hello this is asbeza");
  return(

    <h2> i am asbeza Page you can buy it here</h2>
  );
}
const App = ()=>{
  return(
    // there is also a kind of grouproute in this like i place a base route different place in django
    <Routes>
      <Route path='/' element={<Navigation/>}>
      <Route index={true} element={<Home/>}/>
      <Route path='/sign-in' element={<SignIn/>}/>
  {/* now the /home is sub route of asbeza */}
  
      <Route path='/asbeza' element={<Asbeza/>}/>
      </Route>
    </Routes>
);
}

export default App;