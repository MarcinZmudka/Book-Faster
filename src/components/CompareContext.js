import React, {useContext} from "react";
import { HotelContext } from "../content/HotelContext";
import { UserHotelContext } from "../content/UserHotelContext";
import HotelList from "./HotelList";

const CompareContext = () => {
    const [hotel, setHotel] = useContext(HotelContext);
    const [userHotel, setUserHotel] = useContext(UserHotelContext);
    return (
        <div>
        <HotelList hotel={hotel} userHotel = {userHotel}/>
        </div>
    )
}

export default CompareContext;