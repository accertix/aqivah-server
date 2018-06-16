const mutationResolvers = require('./mutationResolvers')
const queryResolvers = require('./resolvers')
const _ = require('lodash')
const Neode = require('neode')

const resolvers = _.merge(mutationResolvers, queryResolvers)
const instance = new Neode().fromEnv().withDirectory(__dirname + "/../models")

module.exports = resolvers