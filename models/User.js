module.exports = {
    id: {
        primary: true,
        type: 'uuid'
    },
    firstname: {
        type: 'string'
    },
    lastname: {
        type: 'string'
    },
    phone: {
        type: 'string',
        unique: true
    },
    email: {
        type: 'string',
        unique: true
    },
    listed: {
        type: "relationship",
        target: "Property",
        direction: "OUT",
        relationship: "LISTED",
        eager: true
    },
    likes: {
        type: "relationship",
        relationship: 'LIKED',
        direction: 'OUT',
        target: 'Property',
        eager: true
        //TODO: find out about pagination.
        //TODO: how do you fetch items which aren't eagearly loaded?
    },
    views: {
        type: "relationship",
        relationship: 'VIEWED',
        direction: 'OUT',
        target: 'Property'
    }
}