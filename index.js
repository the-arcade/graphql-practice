var { graphql, buildSchema } = require("graphql"),
    schema = buildSchema(`
            type Query {
                hello: String
            }
    `),
    root = { hello: () => "Hello world!" };

graphql(schema, "{ hello }", root)
    .then((response) => {
        console.log(response);
    });
