import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";



const Header = () => {
	const [btnName, setBtnName] = useState("Login");
	return(
		<div className="header">
		  <div className="logo">
				<img src={LOGO_URL}></img>
			</div>
			<div className="nav-items">
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About</Link></li> 
					<li><Link to="/contact">Contact</Link></li>
					<li>Cart</li>
					<li className="login" onClick={() =>{
						btnName === "Logout"? setBtnName("Login") : setBtnName("Logout");
						console.log(btnName)
						}}>{btnName}</li>
				</ul>
			</div>
		</div>
	)
}

export default Header;