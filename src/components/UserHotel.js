import React, {useContext}from "react";
import { UserHotelStatsContext } from "../content/UserHotelStatsContext";
import Hotel from "./Hotel";
import "./css/UserHotel.css";
import Jumbotron from "react-bootstrap/Jumbotron";



const jumboStyle1 = {
    display : "none",
}
const jumboStyle2 = {
    display : "block",
}
const UserHotel = () => {
    const [ userHotelStats ] = useContext(UserHotelStatsContext);

    console.log(userHotelStats[0]);
        return (
            <Jumbotron className = "jumbo_user mt-0 mb-2 p-1" style = {userHotelStats.length > 0 ? jumboStyle2 : jumboStyle1} >
                {userHotelStats.length > 0 ? <Hotel value={userHotelStats[0]}/> : "" }
            </Jumbotron>
        )
}

export default UserHotel;