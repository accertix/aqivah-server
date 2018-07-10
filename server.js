const resolvers = require("./schema/allResolvers")
const typeDefs = require("./schema/typeDefsTemp")
const { ApolloServer } = require("apollo-server")
const casual = require("casual")

const mocks = {
	Source: () => ({
		id: casual.id,
		name: casual.title,
		url: casual.url,
	}),

	PropertyType: () => ({
		id: casual.id,
		name: casual.word,
	}),

	AcquisitionType: () => casual.random_element(["Rent", "Sale"]),

	Property: () => ({
		id: casual.id,
		url: casual.url,
		title: casual.sentence,
		description: casual.description,
		imageURLs: casual.array_of_words,
		price: casual.double(from=1000, to=1000),
		numBedrooms: casual.integer(from=1, to=10),
		numBathrooms: casual.integer(from=1, to=10),
		size: casual.integer(from=1, to=100) + ' x ' + casual.integer(from=1, to=100),
		unitOfMeasurement: casual.random_element(['Meters', 'Hectares']),
		numPlots: casual.integer(from=5, to=100),
		projectName: casual.title,
		developer: casual.company_name,
		unitName: casual.catch_phrase,
		floorArea: casual.integer(from=100, to=1000),
		hasBalcony: casual.boolean,
		extraAmenities: casual.random_element(['extra1', 'extra2', 'extra3']),
	}),

	PropertyHistory: () => ({
		id: casual.id,
		timestamp: casual.timestamp,
		fieldChanged: casual.random_element(['title', 'description', 'imageURLs', 'price', 'numBedrooms', 'numBathrooms', 'projectName']),
		oldValue: casual.string,
		newValue: casual.string,
	}),

	User: () => ({
		id: casual.id,
		firstname: casual.first_name,
		lastname: casual.last_name,
		phone: casual.phone,
		email: casual.email,

	}),

	Location: () => ({
		id: casual.id,
		name: casual.state,
		region: casual.street,
		trafficRating: casual.integer(from=1, to=5),
		crimeRating: casual.integer(from=1, to=5),
		electricitySupplyRating: casual.integer(from=1, to=5),
		waterSupplyRating: casual.integer(from=1, to=5),
		noiseLevelsRating: casual.integer(from=1, to=5),
		recreationalSpotsRating: casual.integer(from=1, to=5)
	}),

	Region: () =>
		casual.random_element([
			"GreaterAccra",
			"Ashanti",
			"Volta",
			"Eastern",
			"Western",
			"BrongAhafo",
			"Northern",
			"UpperEast",
			"Central",
			"Unspecified",
		]),
}

const server = new ApolloServer({ typeDefs, mocks })

server.listen().then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`)
})
