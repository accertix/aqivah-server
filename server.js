require("dotenv").config()
const resolverMap = require("./schema/resolvers")
const typeDefs = require("./schema/typeDefs")
const { augmentSchema } = require("neo4j-graphql-js")
const neo4j = require("neo4j-driver").v1
const { makeExecutableSchema } = require("graphql-tools")
// const bodyparser = require("body-parser")
// const express = require("express")
// const { graphqlExpress, graphiqlExpress } = require("apollo-server-express")
const { ApolloServer } = require("apollo-server")

let driver
// const rootValue = {}
// const server = express()
// const PORT = 3000

const context = (headers, secrets) => {
	if (!driver) {
		driver = neo4j.driver(
			secrets.NEO4J_URI || process.env.NEO4J_URI,
			neo4j.auth.basic(
				secrets.NEO4J_USER || process.env.NEO4J_USER,
				secrets.NEO4J_PASSWORD || process.env.NEO4J_PASSWORD
			)
		)
	}
	return { driver, headers }
}

const schema = makeExecutableSchema({
	typeDefs,
	resolverMap,
})

const augmentedSchema = augmentSchema(schema)

const server = new ApolloServer({ augmentedSchema, context })

server.listen().then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`)
})
