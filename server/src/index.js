require('dotenv').config();
const { ApolloServer } = require('apollo-server')
const { importSchema } = require('graphql-import')
const { Prisma } = require('prisma-binding')
const path = require('path')
const { queries } = require('./queries');
const { mutations } = require('./mutations');
const { auth } = require('./mutations/auth');
const { AuthPayload } = require('./queries/AuthPayload');

const resolvers = {
  Query: {
    ...AuthPayload,
    ...queries
  },
  Mutation: {
    ...auth,
    ...mutations
  },
  Post: {
    commentCount: (parent, args, ctx, info) => {
      if(parent.comments){
        return parent.comments.length;
      };
      throw new Error(`Post query must have a selection of comments to resolve count.`)
    }
  }
}

const typeDefs = importSchema(path.resolve('src/schema.graphql'))

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: true,
  playground: {
    settings: {
      'editor.theme': 'light',
    }
  },
  context: req => ({
    ...req,
    prisma: new Prisma({
      typeDefs: 'src/generated/prisma.graphql',
      endpoint: 'http://localhost:4466'
    })
  })
})

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
