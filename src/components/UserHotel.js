import React, {useContext}from "react";
import { UserHotelStatsContext } from "../content/UserHotelStatsContext";
import Hotel from "./Hotel";

const UserHotel = () => {
    const [ userHotelStats, setUserHotelStats] = useContext(UserHotelStatsContext);
    console.log(userHotelStats[0]);
        return (
            <div>
                {userHotelStats.length > 0 ? <Hotel value={userHotelStats[0]}/> : "" }
            </div>
        )
}

export default UserHotel;