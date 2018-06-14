module.exports = {
    id: {
        type: 'uuid',
        primary: true
    },
    name: {
        type: 'string',
        unique: true
    },
    region: {
        type: "relationship",
        relationship: "IN_REGION",
        target: "Region",
        direction: "OUT",
        eager: true
    },
    trafficRating: {
        type: 'int'
    },
    crimeRating: {
        type: 'int'
    },
    electricitySupplyRating: {
        type: 'int'
    },
    waterSupplyRating: {
        type: 'int'
    },
    noiseLevelsRating: {
        type: 'int'
    },
    recreationalSpotsRating: {
        type: 'int'
    }
}