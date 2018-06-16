const Neode = require("neode")

const instance = new Neode().fromEnv()
// instance.fromEnv()
instance.withDirectory(__dirname + "/../models")

//TODO: can the ...args help to make the code easier? so only one word per line for each of the params/properties.
const mutationResolvers = {
	,
}

module.exports = mutationResolvers