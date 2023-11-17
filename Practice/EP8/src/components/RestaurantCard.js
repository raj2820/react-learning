import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const styleCard = {
	backgroundColor : "#f0f0f0",
}



const RestaurantCard = (props) => {
	const { resData } = props;

	const {cloudinaryImageId, name, avgRating, cuisines, costForTwo, deliveryTime, id} = resData?.info;

	return (
		<div className="res-card" style={styleCard}>
			<Link to={"/restaurants/"+id} target="_blank">
				<img alt="res-logo" src={ CDN_URL+cloudinaryImageId}></img>
				<h3>{name}</h3>
				<h4>{cuisines.join(", ")}</h4>
				<h4>{avgRating}</h4>
				<h4>{costForTwo}</h4>
				<h4>{deliveryTime}</h4>
			</Link>
		</div>
	)
}

export default RestaurantCard;