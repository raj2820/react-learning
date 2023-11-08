import React from "react";
import ReactDOM  from "react-dom/client";


/**
 * Header
 * -Logo
 * -Nav Items
 * Body
 * -Search
 * -resaurantContainer
 * -RestaurantCard
 * Footer
 * -CopyRight
 * -Links
 * -Address
 * -Contact
 * 
 */

const Header = () => {
	return(
		<div className="header">
		  <div className="logo">
				<img src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"></img>
			</div>
			<div className="nav-items">
				<ul>
					<li>Home</li>
					<li>About</li>
					<li>Contact</li>
					<li>Cart</li>
				</ul>
			</div>
		</div>
	)
}

const styleCard = {
	backgroundColor : "#f0f0f0",
}

const RestaurantCard = () => {
	return (
		<div className="res-card" style={styleCard}>
			<img alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf"></img>
			<h3>Food Hotel</h3>
			<h4>Biryani, North Indian, Asian</h4>
			<h4>4.4 stars</h4>
			<h4>38 minutes</h4>
		</div>
	)
}

const Body = () => {
	return(
		<div className="body">
			<div className="search">Search</div>
			<div className="res-container">
				<RestaurantCard/>
			</div>
		</div>
	)
}

const AppLayout = () => {
	return(
		<div className="app">
			<Header />
			<Body/>
		</div>
	)
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />) 