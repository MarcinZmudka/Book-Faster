# Book-Faster

Live demo [here](http://bookfaster.pl/) - need while to start up the server and to download data from db.

Use login `test1@test.com` and `test12`. Choose beetwen 30 September 2019 and 30 February 2020 when picking date. 

## About 

Project is created for people who owns hotel or apartament and are selling it on Booking.com. It allows in easy way to compare their price per night (which is hard on booking) to another available rooms at the same time on Booking. It remebers your rooms name and allow to filter through like:

* type og object (Apartament, hotel, room, Camping, Hostel etc.)
* duration of stay 
* number of guests,
* place ( Białka Tatrzańska, Zakopane, Bukowina Tatrzańska)
* name of place

I used real booking data from Booking API. 

## Setup 

Clone repo and in the command shell write:

```bash
npm i && npm start
```

## Tech Stack

* Frontend written in React
* Backend in Express
* MongoDB
* Firebase for authentication
