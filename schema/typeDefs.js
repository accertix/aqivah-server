//TODO: is the likes relationship properly implemented between property and user? is there a better way to do it?

const typeDefs = `
type PropertySource {
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
    source: PropertySource @relation(name: "SOURCED_FROM", direction: "OUT")
    propertyType: PropertyType @relation(name: "IS_OF_TYPE", direction: "OUT")
    acquisitionType: AcquisitionType
    title: String!
    description: String
    imageURLs: [String]
    location: Location @relation(name: "LOCATED_AT", direction: "OUT")
    lister: User! @relation(name: "LISTED_BY", direction: "OUT")
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
    likes: User @relation(name: "LIKED_BY", direction: "OUT")
    history: [PropertyHistory] @relation(name: "USED_TO_BE", direction: "OUT")
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
    listed: [Property] @relation(name: "LISTED", direction: "OUT")
    likes(timestamp: String!): [Property] @relation(name: "LIKED", direction: "OUT")
    views(timestamp: String!): [Property] @relation(name: "VIEWED", direction: "OUT")
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
    Properties(first: Int = 10, offset: Int = 0, limit: Int = 10) : [Property] @cypher(statement: "MATCH (p: Property) RETURN p LIMIT {limit}")

    User(id: ID): User
    Users: [User]

    Location(id: ID): Location
    Locations: [Location]

}
`

module.exports = typeDefs
