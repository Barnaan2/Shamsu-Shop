import { Fragment } from "react";
import { Outlet,Link} from "react-router-dom";
import './nav.style.css';
// import {ReactComponent as Sha } from '../../assets/shamsu_logo.png';
const Navigation = () =>{
    return(
        <Fragment>
<div className="navbar">
    
  <div className="logo">
  <Link to = '/'>
  <img src="https://th.bing.com/th/id/R.cbc1b56fdfc5449abd4a47ff5e108298?rik=pc5b2ByccYDtbQ&riu=http%3a%2f%2fwww.aboutethiopia.co.uk%2fphotos%2ffood%2fES138.jpg&ehk=DEJ3OxTgLD9zZjgUOr8uTgpl5pbwS%2fq9AzGV1gACqsE%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" alt=" logo" />
    </Link>

  </div>
    <div className="navbar-links-container">
        <Link className="navbar-link" to='/asbeza'>
ASBEZA </Link >
<Link className="navbar-link" to='/sign-in'>
        Sign In
        </Link>
        <Link className="navbar-link">
            Shektasheket
        </Link>
        <Link className="navbar-link">
            Silk Yidewilu
        </Link>
    </div>
</div>
<Outlet/>
</Fragment>
    );
}
export default Navigation;