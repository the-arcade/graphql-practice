var express = require("express"),
    graphqlHTTP = require("express-graphql"),
    { buildSchema } = require("graphql"),
    schema = buildSchema(`
            type Query {
                hello: String,
                helloAgain: String
            }
    `),
    root = { hello: () => "Hello, World!",
             helloAgain: () => "Hello, World, again!"},
    app = express();

app.use("/graphql", graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(4000, () => console.log("Now browse to localhost:4000/graphql"));
