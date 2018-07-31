const { gql } = require('apollo-server')

//TODO: change PropertyHistory.currentValue to newValue. reason: the newValue may have been changed again, and may not be the currentValue in the property
const typeDefsTemp = gql`
type Source {
    id: ID!
    name: String!
    url: String!
}

type PropertyType {
    id: ID!
    name: String!
}

enum AcquisitionType {
    Rent,
    Sale
}

type Property {
    id: ID!
    url: String!
    source: Source 
    propertyType: PropertyType 
    acquisitionType: AcquisitionType
    title: String!
    description: String
    imageURLs: [String]
    location: Location
    streetAddress: String
    price: String
    numBedrooms: Int
    numBathrooms: Int
    size: String
    unitOfMeasurement: String
    numPlots: Int
    projectName: String
    developer: String
    unitName: String
    floorArea: String
    hasBalcony: Boolean
    extraAmenities: [String]
    lister: User!
    likedBy: User
    history: [PropertyHistory] 
}

type PropertyHistory {
    id: ID!
    timestamp: String
    fieldChanged: String!
    oldValue: String
    newValue: String!
}

#listers found in web scrapings are made to be users too.
#all users can search, as well as post listings.
type User {
    id: ID!
    firstname: String!
    lastname: String
    phone: String!
    email: String
    listed: Property
    likes(timestamp: String): [Property]
    views(timestamp: String): [Property]
}


enum Region {
    GreaterAccra,
    Ashanti,
    Volta,
    Eastern,
    Western,
    BrongAhafo,
    Northern,
    UpperEast,
    UpperWest,
    Central,
    Unspecified
}


type Location {
    id: ID!
    name: String!
    region: Region!
    trafficRating: Int
    crimeRating: Int
    electricitySupplyRating: Int
    waterSupplyRating: Int
    noiseLevelsRating: Int
    recreationalSpotsRating: Int
}


type Query {
    Property(id: ID!): Property
    Properties(first: Int = 10, offset: Int = 0, limit: Int = 10) : [Property]
    PropertiesSearch(acqType: String!, numBedrooms: Int, numBathrooms: Int, priceType: String, location: String, price: String, propertyType: String!): [Property]


    User(id: ID): User
    Users: [User]

    Location(id: ID): Location
    Locations: [Location]

}


type Mutation {
    CreateProperty(url: String!, title: String!, desc: String, imageURLs: [String], streetAddress: String, price: String, numBedrooms: Int = 0, numBathrooms: Int = 0, size: String, unitOfMeasurement: String, numPlots: Int = 0, projectName: String, developer: String, unitName: String, floorArea: String, hasBalcony: Boolean = false, extraAmenities: [String]) : Property
}
`

module.exports = typeDefsTemp
