const Neode = require("neode")

const instance = new Neode.fromEnv()
instance.withDirectory(__dirname + "/models")

const resolvers = {
	Query: {
		Properties: (first, offset, limit) => {
			return instance.all("Property").then(results => {
				console.log(results)
				return results
			})
        },
        Property: (id) => {
            return instance.findById('Property', id).then((property) => {
                console.log(property)
                return property
            })
        },
        User: (id) => {
            return instance.findById('User', id).then((user) => {
                console.log(user)
                return user
            })
        },
        Users: () => {
            return instance.all('User').then((users) => {
                console.log(users)
                return users
            })
        },
        Location: (id) => {
            return instance.findById('Location', id).then((location) => {
                console.log(location)
                return location
            })
        },
        Locations: () => {
            return instance.all('Location').then((locations) => {
                console.log(locations)
                return locations
            })
        }
	}
}

module.exports = resolvers
