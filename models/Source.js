module.exports = {
    id: {
        type: 'uuid',
        primary: true
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