const Neode = require('neode')

const instance = new Neode.fromEnv()
instance.withDirectory(__dirname+'/models')



const resolvers = {
    Query: {
        Property(obj, params, ctx, resolveInfo){
            return 
        },

        Properties(obj, params, ctx, resolveInfo){
            return 
        },

        Users(obj, params, ctx, resolveInfo){
            return 
        },

        User(obj, params, ctx, resolveInfo){
            return 
        },

        Location(obj, params, ctx, resolveInfo){
            return 
        },

        Locations(obj, params, ctx, resolveInfo){
            return 
        }
    }
}

module.exports = resolvers
