let hotels = "";
const Filter_engine = (hotel, requirements) =>{
    hotels = hotel;
    return selectByName(hotels, requirements);
}
export default Filter_engine;

const selectByName = (hotels, requirements) => {
    console.log("nazwa", requirements[0]);
    let selected =
      requirements[0] === ""
        ? null
        : hotels.filter(item => {
            const name = item.name.toUpperCase();
            const req = requirements[0].toUpperCase();
            if (name.includes(req)) {
              return item;
            }
          });
    return selectByPlace(selected, requirements, 1);
  };
  // do zrobienia tak jak Date
const selectByPlace = (preselect, requirements, i) => {
    let selected = null;
    if (preselect === null && requirements[i] === "") {
      // nie ma wcześniejszych wymagań ani obecnych
      selected = null;
    } else if (preselect === null && requirements[i] !== "") {
      // nie ma wcześniejszych są obecne
      selected = hotels.filter(item => {
        const place = item.place.toUpperCase();
        const req = requirements[i].toUpperCase();
        if (place.includes(req)) {
          return item;
        }
      });
    } else if (requirements[i] === "" && preselect !== null) {
      //są wcześniejsze, nie ma obecnych
      selected = preselect;
    } else {
      // są wcześniejsze są obecne
      selected = preselect.filter(item => {
        const place = item.place.toUpperCase();
        const req = requirements[i].toUpperCase();
        if (place.includes(req)) {
          return item;
        }
      });
    }
    return selectByDate(selected, requirements, ++i);
  };
const selectByDate = (preselect, requirements, i) => {
    let selected = null;
    if (preselect === null && requirements[i] === "") {
      // nie ma wcześniejszych wymagań ani obecnych
      console.log("if1");
      selected = null;
    } else if (preselect === null && requirements[i] !== "") {
      // nie ma wcześniejszych śą obecne
        console.log("if2");
        selected = hotels.filter(
        item => item.arrival === requirements[i]
      );
    } else if (requirements[i] === "" && preselect !== null) {
      //są wcześniejsze, nie ma obecnych
      selected = preselect;
    } else {
      // są wcześniejsze są obecne
      selected = preselect.filter(item => item.arrival === requirements[1]);
    }
    console.log("select by date", selected);
    return selectByInterval(selected, requirements, ++i);
  };

 const selectByInterval = (preselect, requirements, i) => {
    let selected = null;
    if (preselect === null && requirements[i] === "") {
      // nie ma wcześniejszych wymagań ani obecnych
      selected = hotels;
    } else if (preselect === null && requirements[i] !== "") {
      // nie ma wcześniejszych śą obecne
      selected = hotels.filter(
        item => item.interval == requirements[i]
      );
    } else if (requirements[i] === "" && preselect !== null) {
      //są wcześniejsze, nie ma obecnych
      selected = preselect;
    } else {
      // są wcześniejsze są obecne
      selected = preselect.filter(item => item.interval == requirements[i]);
    }
    return selected;
 }