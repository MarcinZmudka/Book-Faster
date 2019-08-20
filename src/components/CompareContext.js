import React, {useContext} from "react";
import { HotelContext } from "../content/HotelContext";
import HotelList from "./HotelList";
import { UserAuthContext } from "../content/UserAuthContext";

const CompareContext = () => {
    const [ hotel ] = useContext(HotelContext);
    const [ , , user ] = useContext(UserAuthContext);
    return (
        <HotelList hotel={hotel} userHotel = {user.hotel}/>
    )
}

export default CompareContext;