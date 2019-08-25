let hotels = "";
const Filter_engine = (user, hotel, requirements) => {
  hotels = hotel;
  const selected = selectByDate(hotels, requirements, 1);
  const displayHotels = findUser(selected, user);
  const finalHotels = selectByName(displayHotels[0], requirements, 0);
  return [finalHotels, displayHotels[1]];
};
export default Filter_engine;

const findUser = (selected, user) => {
  let displayHotels = selected.filter(item => item.name.trim() !== user);
  let displayUser = selected.filter(item => item.name.trim() === user);
  return [displayHotels, displayUser];
};
const selectByName = (preselect, requirements, i) => {
  let selected = null;
  if (requirements[i] !== "" && preselect == null) {
    selected = hotels.filter(item => {
      const name = item.name.toUpperCase();
      const req = requirements[i].toUpperCase();
      if (name.includes(req)) {
        return item;
      }
    });
  }
  else if(requirements[i] !== "" && preselect !== null){
    selected = preselect.filter(item => {
      const name = item.name.toUpperCase();
      const req = requirements[i].toUpperCase();
      if (name.includes(req)) {
        return item;
      }
    });
  }
  else if (requirements[i] === "" &&  preselect !== null){
    selected = preselect;
  }
  else if(requirements[i] === "" &&  preselect == null){
    return hotels;
  }
  return selected;
};

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
  return selected;
};
const selectByDate = (hotels, requirements, i) => {
  let selected = null;
  if (requirements[i] === "") {
    // nie ma wcześniejszych wymagań ani obecnych
    selected = null;
  } else if (requirements[i] !== "") {
    // nie ma wcześniejszych śą obecne
    selected = hotels.filter(item => item.arrival === requirements[i]);
  }
  return selectByInterval(selected, requirements, ++i);
};

const selectByInterval = (preselect, requirements, i) => {
  let selected = null;
  if (preselect === null && requirements[i] === "") {
    // nie ma wcześniejszych wymagań ani obecnych
    selected = hotels;
  } else if (preselect === null && requirements[i] !== "") {
    // nie ma wcześniejszych śą obecne
    selected = hotels.filter(item => item.interval == requirements[i]);
  } else if (requirements[i] === "" && preselect !== null) {
    //są wcześniejsze, nie ma obecnych
    selected = preselect;
  } else {
    // są wcześniejsze są obecne
    selected = preselect.filter(item => item.interval == requirements[i]);
  }
  return selectByPlace(selected, requirements, ++i);
};
