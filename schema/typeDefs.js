const { gql } = require('apollo-server')

//TODO: change PropertyHistory.currentValue to newValue. reason: the newValue may have been changed again, and may not be the currentValue in the property
const typeDefs = gql`
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

enum Currency {
    GHS,
    USD
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
    price: Float
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
    likes: User
    history: [PropertyHistory] 
}

type PropertyHistory {
    id: ID!
    timestamp: String
    fieldChanged: String!
    oldValue: String
    currentValue: String!
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
    likes(timestamp: String!): [Property]
    views(timestamp: String!): [Property]
    source: UserSource
}

type UserSource {
    id: ID!
    name: String!
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
    Property(id: ID): Property
    Properties(first: Int = 10, offset: Int = 0, limit: Int = 10) : [Property]
    PropertiesSearch(acqType: String!, numBedrooms: Int, numBathrooms: Int, priceType: String, location: String, price: String, propertyType: String!): [Property]

    User(id: ID): User
    Users: [User]

    Location(id: ID): Location
    Locations: [Location!]

}

type Mutation {
    CreateProperty(url: String!, title: String!, desc: String = null, imageURLs: [String] = null, streetAddress: String = null, price: Float = 0.0, numBedrooms: Int = 0, numBathrooms: Int = 0, size: String = null, unitOfMeasurement: String = null, numPlots: Int = 0, projectName: String = null, developer: String = null, unitName: String = null, floorArea: String = null, hasBalcony: Boolean = false, extraAmenities: [String] = null) : Property

    CreatePropertyType(propertyType: String!): PropertyType
    CreatePropertySource(source: String!): Source
    CreateAcquisitionType(type: String!): AcquisitionType

    AddPropertyAcquisitionType(propertyid: ID!, acqType: String!): Property
    AddPropertySource(propertyid: ID!, source: ID!): Property
    AddPropertyType(propertyid: ID!, typeid: ID!): Property
    AddPropertyLocation(propertyid: ID!, locationid: ID!)
    AddPropertyUserLikes(propertyid: ID!, userid: ID!): Property
    AddPropertyHistory(propertyid: ID!, timestamp: String, fieldChanged: String!, oldValue: String = null, currentValue: String!)

    CreateUser: User

    CreateLocation: Location
}
`

module.exports = typeDefs
