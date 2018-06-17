const Neode = require("neode")

const instance = new Neode.fromEnv()
instance.withDirectory(__dirname + "/../models")

//TODO: can the ...args help to make the code easier? so only one word per line for each of the params/properties.
const mutationResolvers = {
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
                    return property._node.properties
				})
		},
	},
}

module.exports = mutationResolvers