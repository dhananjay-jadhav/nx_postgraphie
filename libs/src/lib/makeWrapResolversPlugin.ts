import { makeWrapResolversPlugin } from "postgraphile";


const ResolverPlugin = makeWrapResolversPlugin({
    Mutation: {
        createUser: {
            requires: 
        }
    }
})

 export default ResolverPlugin;