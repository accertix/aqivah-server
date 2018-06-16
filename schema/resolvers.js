const Neode = require("neode")
//TODO: find out if JS array destructuring can help with easily returning accurate values

const instance = new Neode.fromEnv()
instance.withDirectory(__dirname + "/../models")

const resolvers = {
	Query: {
		Properties: (first, offset, limit) => {
			return instance.all("Property").then(results => {
				console.log(results._values)
				const properties = results._values.map(each => {
					console.log(each._node.properties)
					return each._node.properties
				})
				return properties
			})
		},
		Property: $id => {
			console.log($id)
			return instance
				.cypher("MATCH (p: Property) WHERE p.id = {id} RETURN p", {
					id: id,
				})
				.then(result => {
					const prop = result.records.map(each => {
						return each._fields[0].properties
					})
					console.log(prop)
					return prop[1]
				})
		},
		User: id => {
			return instance.findById("User", id).then(user => {
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
		Location: id => {
			return instance.findById("Location", id).then(location => {
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

module.exports = resolvers
