module.exports = {
    id: {
        primary: true,
        type: 'uuid'
    },
    url: {
        type: 'string',
        unique: true
    },
    source: {
        type: "relationship",
        target: "Source",
        relationship: "SOURCED_FROM",
        direction: "out",
        eager: true
    },
    propertyType: {
        type: "relationship",
        target: "PropertyType",
        relationship: "IS_OF_TYPE",
        direction: "out",
        eager: true
    },
    title: {
        type: 'string',
    },
    description: {
        type: 'string',
    },
    imageURLs: {
        //TODO: how to represent an array of strings here.
        type: "string"
    },
    lister: {
        type: "relationship",
        target: "User",
        relationship: "LISTED_BY"
    },
    location: {
        type: "relationship",
        target: "Location",
        relationship: "LOCATED_IN",
        direction: "out",
        eager: true
    },
    streetAddress: {
        type: "string"
    },
    price: {
        type: "float" //TODO: verify if this and all other floats are correct
    },
    numBedrooms: {
        type: "int"
    },
    numBathrooms: {
        type: "int"
    },
    size: {
        type: "float" //TODO: HERE TOO
    },
    unitOfMeasurement: {
        type: "string"
    },
    numPlots: {
        type: "int",
    },
    projectName: {
        type: "string",
    },
    developer: {
        type: "string"
    },
    unitName: {
        type: "string"
    },
    floorArea: {
        type: "float" //TODO: HERE..
    },
    hasBalcony: {
        type: "boolean"
    },
    extraAmenities: {
        //TODO: define array of strings.
        type: "string"
    },
    history: {
        type: "relationship",
        target: "PropertyHistory",
        direction: "out",
        relationship: "USED_TO_BE"
    }
    
}