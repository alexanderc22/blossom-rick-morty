import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './graphql/schema.js';
import { resolvers } from './graphql/resolvers.js';
import dotenv from 'dotenv';
import logger from './middleware/logger.js';
// import redisClient from './cache/redis.js'; // Desactivado temporalmente

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(logger);

// Apollo Server setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

await server.start();
server.applyMiddleware({ app, path: '/graphql' });

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}${server.graphqlPath}`);
});

/* ==========================
Optional Redis block
To enable caching, uncomment the lines below after installing Redis
========================== */
// redisClient.on('connect', () => {
//   console.log('⚡ Redis client connected');
// });

// redisClient.on('error', (err) => {
//   console.error('Redis error:', err);
// });
