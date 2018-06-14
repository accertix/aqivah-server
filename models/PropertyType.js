module.exports = {
    id: {
        primary: true,
        type: 'uuid'
    },
    name: {
        type: "string",
        unique: true
    }
}