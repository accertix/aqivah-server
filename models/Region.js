//TODO: can this be expressed as an enum instead?

module.exports = {
    id: {
        type: 'uuid',
        primary: true,
        required: true
    },
    name: {
        type: 'string',
        unique: true
    }
}