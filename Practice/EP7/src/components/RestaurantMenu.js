import React, { useEffect } from 'react'

const RestaurantMenu = () => {

    useEffect(() => {
        fetchMenu();
    },[])

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.3164945&lng=78.03219179999999&restaurantId=73011&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        console.log(json)
    }

  return (
    <div className='menu'>
        <h1>Name of Res</h1>
        <h2>Menu</h2>
        <ul>
            <li>Biryani</li>
            <li>Burgers</li>
            <li>Diet Coke</li>
        </ul>
    </div>
  )
}

export default RestaurantMenu;