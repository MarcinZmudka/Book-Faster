const Filter =  (args, allHotels) => {
  return new Promise((resolve, reject) => {
    let hotels = allHotels;
    console.log(hotels === null);
    if (args.id != "" && args.id != undefined) {
      hotels =  hotels.filter(item => item.id === args.id);
    }
    if (args.name != "" && args.name != undefined ) {
      hotels = hotels.filter(item => {
        return item.name.toUpperCase().trim().includes(args.name.toUpperCase().trim())
      });
    }
    if (args.arrival != "" && args.arrival != undefined) {
      hotels = hotels.filter(item => item.arrival.toUpperCase().trim() == args.arrival.toUpperCase().trim());
    }
    if (args.interval != 0 && args.interval != undefined) {
      hotels = hotels.filter(item => item.interval == args.interval);
    }
    if (args.place != "" && args.place != undefined) {
      hotels = hotels.filter(item => 
        { 
          return item.place.toUpperCase().trim().includes(args.place.toUpperCase().trim());
        })
    }
    // if( args.numberOfGuest != "" && args.numberOgGuest != undefined){
    //   hotels = hotels.filter(item => 
    //     { 
    //       return item.numberOfGuest.toUpperCase().trim() == args.numberOfGuest.toUpperCase().trim();
    //     })
    // }
    // if( args.accommodation_type != 0 && args.accommodation_type != undefined){
    //   hotels = hotels.filter(item => 
    //     { 
    //       return item.accommodation_type == args.accommodation_type.toUpperCase().trim();
    //     })
    // }
    resolve(hotels);
  })
  
};

module.exports = Filter;