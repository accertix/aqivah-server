const resolvers = require("./schema/allResolvers")
const typeDefs = require("./schema/typeDefsTemp")
// const neo4j = require("neo4j-driver").v1
const { ApolloServer } = require("apollo-server")

// let driver

// const context = (headers, secrets) => {
// 	if (!driver) {
// 		driver = neo4j.driver(
// 			secrets.NEO4J_URI || process.env.NEO4J_URI,
// 			neo4j.auth.basic(
// 				secrets.NEO4J_USER || process.env.NEO4J_USER,
// 				secrets.NEO4J_PASSWORD || process.env.NEO4J_PASSWORD
// 			)
// 		)
// 	}
// 	return { driver, headers }
// }

// const schema = makeExecutableSchema({
// 	typeDefs,
// 	resolverMap,
// })

// const augmentedSchema = augmentSchema(schema)

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`)
})
