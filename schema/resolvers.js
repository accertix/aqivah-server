const Neode = require("neode")
const _ = require("lodash")
const mutationResolvers = require("./mutationResolvers")
//TODO: find out if JS array destructuring can help with easily returning accurate values
//TODO: figure out future of all commented out code.
// require("dotenv").config()
// const neo4j = require("neo4j-driver").v1
// const driver = neo4j.driver(
// 	process.env.NEO4J_HOST,
// 	neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASS)
// )
const instance = new Neode.fromEnv()
instance.withDirectory(__dirname + "/../models")

const resolvers = {
	Query: {
		Properties: (_, args) => {
			return instance.all("Property").then(results => {
				console.log(results._values)
				const properties = results._values.map(each => {
					console.log(each._node.properties)
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
					console.log(result)
					const prop = result.records.map(each => {
						return each._fields[0].properties
					})
					console.log(prop[0])
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

	Mutation: {
		CreateProperty: (_, args) => {
			console.log("in starting instance")
			return instance
				.create("Property", {
					url: args.url,
					title: args.title,
					description: args.desc,
					imageURLs: args.imageURLs,
					streetAddress: args.streetAddress,
					price: args.price,
					numBedrooms: args.numBedrooms,
					numBathrooms: args.numBathrooms,
					size: args.size,
					unitOfMeasurement: args.unitOfMeasurement,
					numPlots: args.numPlots,
					projectName: args.projectName,
					developer: args.developer,
					unitName: args.unitName,
					floorArea: args.floorArea,
					hasBalcony: args.hasBalcony,
					extraAmenities: args.extraAmenities,
				})
				.then(property => {
					console.log("in the mutation")
					console.log(property)
				})
		},
	},
}
// const resolvers = _.merge(queryResolvers, mutationResolvers)

module.exports = resolvers
