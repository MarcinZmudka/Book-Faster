let value = 0; //zmienna do zmiany sortowania 
const Sorter = (type, displayedHotels) => {
  let sorterdDisplayed = [];
  if(Sorter.turn === undefined){
    Sorter.turn = 1;
  }
  value = -Sorter.turn;
  Sorter.turn = value;

  switch (type) {
    case "nazwa":
      sorterdDisplayed = displayedHotels.sort(sortName);
      break;
    case "cena":
      sorterdDisplayed = displayedHotels.sort(sortPrice);
      break;
    case "miejscowość":
      sorterdDisplayed = displayedHotels.sort(sortPlace);
      break;
    case "data przyjazdu":
      sorterdDisplayed = displayedHotels.sort(sortArrival);
      break;
    case "data wyjazdu":
      sorterdDisplayed = displayedHotels.sort(sortDepart);
      break;
    case "dni":
      sorterdDisplayed = displayedHotels.sort(sortDay);
      break;
    default:
        sorterdDisplayed = displayedHotels;
        break;
  }
  return sorterdDisplayed;
};

export default Sorter;

const sortName = (one, two) => {
  if (one.name < two.name) {
    return value;
  }
  if (one.name > two.name) {
    return -value;
  }
  return 0;
};
const sortPrice = (one, two) => {
  if (one.price < two.price) {
    return value;
  }
  if (one.price > two.price) {
    return -value;
  }
  return 0;
};
const sortPlace = (one, two) => {
  if (one.place < two.place) {
    return value;
  }
  if (one.place > two.place) {
    return -value;
  }
  return 0;
};
const sortArrival = (one, two) => {
  if (one.arrival < two.arrival) {
    return value;
  }
  if (one.arrival > two.arrival) {
    return -value;
  }
  return 0;
};
const sortDepart = (one, two) => {
  if (one.depart < two.depart) {
    return value;
  }
  if (one.depart > two.depart) {
    return -value;
  }
  return 0;
};
const sortDay = (one, two) => {
  if (one.interval < two.interval) {
    return value;
  }
  if (one.interval > two.interval) {
    return -value;
  }
  return 0;
};
