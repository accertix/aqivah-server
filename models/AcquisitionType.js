//TODO: find out if this can be expressed as an enum in neode.

module.exports = {
    id: {
        primary: true,
        type: 'uuid',
        required: true
    },
    name: {
        type: 'string',
        unique: true
    }
}