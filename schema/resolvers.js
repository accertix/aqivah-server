const neo4jgraphql = require('neo4j-graphql-js')


const resolvers = {
    Query: {
        Property(obj, params, ctx, resolveInfo){
            return neo4jgraphql(obj, params, ctx, resolveInfo)
        },

        Properties(obj, params, ctx, resolveInfo){
            return neo4jgraphql(obj, params, ctx, resolveInfo)
        },

        Users(obj, params, ctx, resolveInfo){
            return neo4jgraphql(obj, params, ctx, resolveInfo)
        },

        User(obj, params, ctx, resolveInfo){
            return neo4jgraphql(obj, params, ctx, resolveInfo)
        },

        Location(obj, params, ctx, resolveInfo){
            return neo4jgraphql(obj, params, ctx, resolveInfo)
        },

        Locations(obj, params, ctx, resolveInfo){
            return neo4jgraphql(obj, params, ctx, resolveInfo)
        }
    }
}

module.exports = resolvers
