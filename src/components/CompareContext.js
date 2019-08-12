import React, {useContext} from "react";
import { HotelContext } from "../content/HotelContext";
import { UserHotelContext } from "../content/UserHotelContext";
import HotelList from "./HotelList";

const CompareContext = () => {
    const [ hotel ] = useContext(HotelContext);
    const [ userHotel ] = useContext(UserHotelContext);
    return (
        <HotelList hotel={hotel} userHotel = {userHotel}/>
    )
}

export default CompareContext;