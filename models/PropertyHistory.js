module.exports = {
    id: {
        type: 'uuid',
        primary: true,
        required: true
    },
    timestamp: {
        type: 'string' //TODO: is there a way to represent date-time in neode model?
    },
    fieldChanged: {
        type: 'string'
    },
    oldValue: {
        type: 'string'
    },
    newValue: {
        type: 'string'
    }
}