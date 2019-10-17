import {GraphQLServer} from 'graphql-yoga';


// Type definitions
const typeDefs = `
    type Query {
        greeting(name: String): String!
        me: User!
        post: Post!
    }

    type User {
        id: ID!
        name: String!
        email: String!
        age: Int
    }

    type Post {
        id: ID!
        title: String!
        body: String!
        published: Boolean!
    }
`

//Resolvers
const resolvers = {
    Query :{
        greeting(parent, args, ctx, info){
            if(args.name){
                return `Hello ${args.name}`;
            }
            return 'Hello';
        }, 
        me(){
            return {
                id: '123098',
                name: 'Mike',
                email: 'mine@example.com',
                age: 28
            }
        },
        post(){
            return{
                id: 'Post123',
                title: 'The smell shirts of UCode Instructors',
                body: 'All we ever wanted was to look good as a company but now we smell bad...',
                published: true
            }
        }
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
});

server.start(()=>{
    console.log('The server is up!')
});