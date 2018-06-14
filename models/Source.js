module.exports = {
    id: {
        type: 'uuid',
        primary: true,
        required: true
    },
    name: {
        type: "string",
        unique: true
    },
    url: {
        type: "string",
        unique: true
    }
}