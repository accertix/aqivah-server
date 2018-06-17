const Neode = require("neode")
const _ = require("lodash")
const mutationResolvers = require("./mutationResolvers")
const queryResolvers = require('./queryResolvers')
//TODO: find out if JS array destructuring can help with easily returning accurate values
//TODO: figure out future of all commented out code.
// require("dotenv").config()
// const neo4j = require("neo4j-driver").v1
// const driver = neo4j.driver(
// 	process.env.NEO4J_HOST,
// 	neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASS)
// )
const instance = new Neode.fromEnv()
instance.withDirectory(__dirname + "/../models") //TODO: is this necessary?

const resolvers = _.merge(queryResolvers, mutationResolvers)

module.exports = resolvers
