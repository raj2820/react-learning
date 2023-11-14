import RestaurantCard from "./RestaurantCard";
import reslist from "../utils/mockData";
import { useState } from "react";


const Body = () => {

	const [reinfo, setReInfo] = useState(reslist);

	return(
		<div className="body">
			<div className="filter.">
                <button className="filter-btn" onClick={() => {
									const filteredList =	reinfo.filter((re) => re.info.avgRating > 4
									 )
									 setReInfo(filteredList);
								}}>Top Rated Restaurants</button>
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