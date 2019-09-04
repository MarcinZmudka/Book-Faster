const express = require("express");
const expressGraphQL = require("express-graphql");
const schema = require("./schema.js");
const app = express();
const cors = require("cors");
const path = require("path");
app.use(cors());

app.use("/graphql", expressGraphQL({
    schema: schema,
    graphiql: true
}));

app.use(express.static('public'));
app.get('*', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'public, "index.html'));
})
app.listen(4000, () => {
    console.log("Server is running on port 4000");
});

