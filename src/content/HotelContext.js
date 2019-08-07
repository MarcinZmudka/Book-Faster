import React, {  createContext, useState} from 'react';


export const HotelContext = createContext(); // udostępnia dane

export const HotelProvider = props => {
    const [hotel, setHotel] = useState([
      {
        "arrival": "22-7-2019",
        "data": {},
        "depart": "25-7-2019",
        "id": 0,
        "interval": 3,
        "name": "Aparthotel Delta Białka ",
        "place": "Białka Tatrzańska",
        "price": 690
      },
      {
        "arrival": "22-7-2019",
        "data": {},
        "depart": "25-7-2019",
        "id": 1,
        "interval": 3,
        "name": "Apartament Cztery Pory Roku ",
        "place": "Białka Tatrzańska",
        "price": 1
      },
      {
        "arrival": "22-7-2019",
        "data": {},
        "depart": "25-7-2019",
        "id": 2,
        "interval": 3,
        "name": "Apartamenty GÓRKA ",
        "place": "Białka Tatrzańska",
        "price": 818
      },
      {
        "arrival": "22-7-2019",
        "data": {},
        "depart": "25-7-2019",
        "id": 3,
        "interval": 3,
        "name": "Amelia ",
        "place": "Białka Tatrzańska",
        "price": 900
      },
      {
        "arrival": "22-7-2019",
        "data": {},
        "depart": "25-7-2019",
        "id": 4,
        "interval": 3,
        "name": "Apartamenty Białczańskie ",
        "place": "Białka Tatrzańska",
        "price": 780
      },
      {
        "arrival": "22-7-2019",
        "data": {},
        "depart": "25-7-2019",
        "id": 5,
        "interval": 3,
        "name": "Rezydencja Diamond",
        "place": "Białka Tatrzańska",
        "price": 1
      },
      {
        "arrival": "22-7-2019",
        "data": {},
        "depart": "25-7-2019",
        "id": 6,
        "interval": 3,
        "name": "Premium 6 ",
        "place": "Białka Tatrzańska",
        "price": 820
      },
      {
        "arrival": "22-7-2019",
        "data": {},
        "depart": "25-7-2019",
        "id": 7,
        "interval": 3,
        "name": "Apartamenty Bajka Białka Tatrzanska z Kuchnią ",
        "place": "Białka Tatrzańska",
        "price": 865
      },
      {
        "arrival": "22-7-2019",
        "data": {},
        "depart": "25-7-2019",
        "id": 8,
        "interval": 3,
        "name": "Apartamenty Kazimierz ",
        "place": "Białka Tatrzańska",
        "price": 720
      },
      {
        "arrival": "22-7-2019",
        "data": {},
        "depart": "25-7-2019",
        "id": 9,
        "interval": 3,
        "name": "Apartamenty Bialka Tatrzanska ",
        "place": "Białka Tatrzańska",
        "price": 380
      },
      {
        "arrival": "22-7-2019",
        "data": {},
        "depart": "25-7-2019",
        "id": 10,
        "interval": 3,
        "name": "Willa Pachówka ",
        "place": "Bukowina Tatrzańska",
        "price": 405
      },
      {
        "arrival": "22-7-2019",
        "data": {},
        "depart": "25-7-2019",
        "id": 11,
        "interval": 3,
        "name": "Apartamenty i pokoje rodzinne ",
        "place": "Czarna Góra",
        "price": 429
      },
      {
        "arrival": "12-7-2019",
        "data": {},
        "depart": "25-7-2019",
        "id": 12,
        "interval": 3,
        "name": "Willa Floryn ",
        "place": "Bukowina Tatrzańska",
        "price": 360
      },
      {
        "arrival": "22-7-2019",
        "data": {},
        "depart": "25-7-2019",
        "id": 13,
        "interval": 3,
        "name": "Misia Łapa Apartamenty ",
        "place": "Bukowina Tatrzańska",
        "price": 668
      },
      {
        "arrival": "12-7-2019",
        "data": {},
        "depart": "24-7-2019",
        "id": 14,
        "interval": 2,
        "name": "Bukowiańska Ostoja ",
        "place": "Bukowina Tatrzańska",
        "price": 390
      }
    ]);
    return(
        <HotelContext.Provider value = {[ hotel, setHotel ]}>
            {props.children}
        </HotelContext.Provider>
    )
}