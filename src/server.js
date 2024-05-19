const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const connectDB = require('./db');
const typeDefs = require('./typeDefs/todoTypeDefs');
const resolvers = require('./resolvers/todoResolvers');

const startServer = async () => {
  const app = express();

  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });

  await connectDB();

  // Express endpoints
  app.get('/todos', async (req, res) => {
    try {
      // Implement logic to retrieve all todos from the database
      // Send the response with the todos
    } catch (error) {
      // Handle errors
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.post('/todos', async (req, res) => {
    try {
      // Implement logic to create a new todo
      // Send the response with the newly created todo
    } catch (error) {
      // Handle errors
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.patch('/todos/:id', async (req, res) => {
    try {
      const { id } = req.params;
      // Implement logic to toggle the completion status of the todo with the specified ID
      // Send the response with the updated todo
    } catch (error) {
      // Handle errors
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.delete('/todos/:id', async (req, res) => {
    try {
      const { id } = req.params;
      // Implement logic to delete the todo with the specified ID
      // Send the response with the deleted todo
    } catch (error) {
      // Handle errors
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.listen({ port: 4000 }, () =>
    console.log(`Server running at http://localhost:4000${server.graphqlPath}`)
  );
};

startServer();
