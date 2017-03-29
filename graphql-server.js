var express = require("express"),
    bodyParser = require("body-parser"),
    { graphqlExpress, graphiqlExpress } = require("graphql-server-express"),
    { makeExecutableSchema } = require("graphql-tools"),
    typeDefs = [`
        type Query {
            hello: String
        }

        schema {
            query: Query
        }
    `],
    resolvers = {
        Query: {
            hello (root) {
                return "world";
            }
        }
    },
    schema = makeExecutableSchema({typeDefs, resolvers}),
    app = express();

app.use("/graphql", bodyParser.json(), graphqlExpress({schema}));
app.use("/graphiql", graphiqlExpress({endpointURL: "/graphql"}));

app.listen(4000, () => {
    console.log("Now browse to localhost:4000/graphiql");
    console.log("or make a GET request to 'http://localhost:4000/graphql?query=%7B%0A%20%20hello%0A%7D'");
});
