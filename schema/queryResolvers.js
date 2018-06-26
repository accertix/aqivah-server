const mutationResolvers = require('./mutationResolvers')
// const queryResolvers = require('./resolvers')
const _ = require('lodash')
const Neode = require('neode')

const instance = new Neode.fromEnv()
instance.withDirectory(__dirname + "/../models")

const queryResolvers = {
	Query: {
		Properties: (_, args) => {
			return instance.all("Property").then(results => {
				// console.log(results._values)
				const properties = results._values.map(each => {
					// console.log(each._node.properties) //remove by July
					return each._node.properties
				})
				return properties
			})
		},
		Property: (_, args) => {
			return instance
				.cypher("MATCH (p: Property) WHERE p.id = {id} RETURN p", {
					id: args.id,
				})
				.then(result => {
					// console.log(result)
					const prop = result.records.map(each => {
						return each._fields[0].properties
					})
					// console.log(prop[0])
					return prop[0]
				})
		},
		User: (_, args) => {
			return instance.find("User", args.id).then(user => {
				console.log(user)
				return user
			})
		},
		Users: () => {
			return instance.all("User").then(users => {
				console.log(users)
				return users
			})
		},
		Location: (_, args) => {
			return instance.findById("Location", args.id).then(location => {
				console.log(location)
				return location
			})
		},
		Locations: () => {
			return instance.all("Location").then(locations => {
				console.log(locations)
				return locations
			})
		},
	},

	
}

module.exports = queryResolvers