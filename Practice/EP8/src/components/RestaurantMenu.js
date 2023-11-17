import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Shimmer from './Shimmer'
import { MENU_API } from '../utils/constants'
const RestaurantMenu = () => {
		const {resId} = useParams();
		const [resMenu, setResMenu] = useState(null)

    useEffect(() => {
        fetchMenu();
    },[])

    const fetchMenu = async () => {
        const data = await fetch(MENU_API+resId);
        const json = await data.json();
        console.log(json)
				setResMenu(json)
    }

		if  (resMenu === null) return  <Shimmer />

		const {name,cuisines,costForTwoMessage} = resMenu?.data?.cards[0]?.card?.card?.info;
		const {itemCards} = resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card

		return (
    <div className='menu'>
        <h1>{name}</h1>
        <h2>{costForTwoMessage}</h2>
				<h2>Cuisines</h2>
        <ul>
					{
						cuisines.map(
							(food,index)=><li key={index}>{food}</li>
						)
					}
        </ul>
				<h3>Menu</h3>
				<ol>
					{
						itemCards.map(item =><li key={item.card.info.id}>{item.card.info.name} - {item.card.info.price}</li>)
					}
				</ol>
    </div>
  )
}

export default RestaurantMenu;