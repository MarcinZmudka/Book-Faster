import React, {useContext, Fragment} from "react";
import { HotelContext } from "../../content/HotelContext";
import HotelList from "../HotelList/HotelList";
import { UserAuthContext } from "../../content/UserAuthContext";

const CompareContext = () => {
    const [ hotel ] = useContext(HotelContext);
    const [ , , user ] = useContext(UserAuthContext);
    return (
        <Fragment>
            <HotelList hotel={hotel} userHotel = {user.hotel}/>
        </Fragment>
    )
}

export default CompareContext;