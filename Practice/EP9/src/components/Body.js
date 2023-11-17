import RestaurantCard from "./RestaurantCard";
import reslist from "../utils/mockData";
import { useState, useEffect } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

	const [reinfo, setReInfo] = useState(reslist);
	const [searchText, setSearchText] = useState("");
	useEffect(() => {
		fetchData();
	},[])

	const fetchData = async () => {
		const data =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3164945&lng=78.03219179999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
		const json = await data.json();
		setReInfo(json.data.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
		console.log(json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants)
	}

	const onlineStatus = useOnlineStatus();

	if(onlineStatus === false) return <h1>Looks like you are offline, please check your Internet</h1>

	return(
		<div className="body">
			<div className="filter">
				<div className="search">
					<input type="text" className="search-boc" value={searchText} onChange={(e) => {
						setSearchText(e.target.value)
					}}></input>
					<button onClick={()=>{
						console.log(searchText)
						const filteredRestaurants = reinfo.filter(
							(re) => re.info.name.toLowerCase().includes(searchText.toLowerCase())
						)
						setReInfo(filteredRestaurants)
					}}>Search</button>
				</div>
        <button className="filter-btn" onClick={() => {
					const filteredList =	reinfo.filter((re) => re.info.avgRating > 4
						)
						setReInfo(filteredList);
					}}>Top Rated Restaurants
				</button>
      </div>
			<div className="res-container">
				{
					reinfo.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
				}
			</div>
		</div>
	)
}


export default Body;