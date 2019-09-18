const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = require("graphql");
const Filter = require("./filter");
const mongo = require("mongodb");
const assert = require("assert");

// Connection URL

const url =
  "mongodb+srv://App:ZEnF7ejqcpBxKTmV@bookfaster-bp5y5.mongodb.net/test?retryWrites=true&w=majority";
//const url = "mongodb://localhost:27017";
let allHotels = [];

// Database Name
const dbName = "BookFaster";
// Create a new MongoClient
const connectToDatabase = () =>
  new Promise((resolve, reject) => {
    if (allHotels.length > 0) {
      console.log("jestem");
      resolve(allHotels);
    }
    else{
      mongo.MongoClient.connect(
        url,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true
        },
        (err, client) => {
          if (err) {
            console.error(err);
            return;
          }
          console.log("Connected successfully to server");
          const db = client.db("Scraper");
          findDocuments(db, docs => {
            client.close();
            allHotels = docs;
            resolve(docs);
          });
        }
      );
    }

  });

const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection("hotels");
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    callback(docs);
  });
};

//Customer Type
const HotelType = new GraphQLObjectType({
  name: "Hotel",
  fields: () => ({
    _id: { type: GraphQLString },
    name: { type: GraphQLString },
    arrival: { type: GraphQLString },
    departure: { type: GraphQLString },
    interval: { type: GraphQLInt },
    place: { type: GraphQLString },
    price: { type: GraphQLInt },
    accommodation_type: { type: GraphQLInt },
    number_of_guests: { type: GraphQLString }
  })
});

//Root Query
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    hotel: {
      type: new GraphQLList(HotelType),
      args: {
        _id: { type: GraphQLString },
        name: { type: GraphQLString },
        arrival: { type: GraphQLString },
        //departure: { type: GraphQLString },
        interval: { type: GraphQLInt },
        place: { type: GraphQLString },
        accommodation_type: { type: GraphQLInt },
        number_of_guests: { type: GraphQLString }
      },
      async resolve(parentValue, args) {
        const re = await Filter(args, await connectToDatabase());
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
  query: RootQuery
  // mutation
});
