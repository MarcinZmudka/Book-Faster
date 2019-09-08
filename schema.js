const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = require("graphql");
const Filter = require("./filter");
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb+srv://App:ZEnF7ejqcpBxKTmV@bookfaster-bp5y5.mongodb.net/test?retryWrites=true&w=majority';
// const url = "mongodb://localhost:27017";

// Database Name
const dbName = 'Scraper'; 

// Create a new MongoClient
const client = new MongoClient(url);
let allHotels = null;
// Use connect method to connect to the Server
client.connect(function(err) { // trzeba dodać to do promise
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);
  findDocuments(db, (docs) => {
    allHotels = docs;
    client.close();
  });
  
});
const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('hotels');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    callback(docs);
  });
}

//Customer Type
const HotelType = new GraphQLObjectType({
  name: "Hotel",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    arrival: { type: GraphQLString },
    depart: { type: GraphQLString },
    interval: { type: GraphQLInt },
    place: { type: GraphQLString },
    price: { type: GraphQLInt },
    accommodation_type: { type: GraphQLInt },
    numberOfGueast: { type: GraphQLString }
  })
});

//Root Query
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    hotel: {
      type: new GraphQLList(HotelType),
      args: {
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        arrival: { type: GraphQLString },
        depart: { type: GraphQLString },
        interval: { type: GraphQLInt },
        place: { type: GraphQLString },
        accommodation_type: {type: GraphQLInt},
        numberOfGuest: {type: GraphQLString},
      },
      async resolve(parentValue, args) {
        const re = await Filter(args, allHotels);
        return re;
      }
    },
    hotels: {
      type: new GraphQLList(HotelType),
      resolve(parentValue, args) {
        return allHotels;
      }
    }
  }
});
// Mutations
// const mutation = new GraphQLObjectType({
//   name: "Mutation",
//   fields:{
//     addCustomer:{
//       type:CustomerType,
//       args:{
//         name: {type: new GraphQLNonNull(GraphQLString)},
//         email: {type: new GraphQLNonNull(GraphQLString)},
//         age: {type: new GraphQLNonNull(GraphQLInt)},
//       },
//       resolve(parentValue, args){
//           return axios.post('http://localhost:4001/customers', {
//             name: args.name,
//             email: args.email,
//             age: args.age
//           }).then(res => res.data)
//       }
//     },
//     deleteCustomer:{
//       type:CustomerType,
//       args:{
//         id: {type: new GraphQLNonNull(GraphQLString)},
//       },
//       resolve(parentValue, args){
//           return axios.delete('http://localhost:4001/customers/'+args.id).then(res => res.data)
//       }
//     },
//     editCustomer:{
//       type:CustomerType,
//       args:{
//         id: {type: new GraphQLNonNull(GraphQLString)},
//         name: {type: GraphQLString},
//         email: {type: GraphQLString},
//         age: {type: GraphQLInt}
//       },
//       resolve(parentValue, args){
//           return axios.patch('http://localhost:4001/customers/'+args.id, args).then(res => res.data)
//       }
//     }
//   }
// })
module.exports = new GraphQLSchema({
  query: RootQuery,
  // mutation
});
