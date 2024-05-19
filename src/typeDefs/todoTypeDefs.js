const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Todo {
    id: ID!
    text: String!
    completed: Boolean!
  }

  type Query {
    todos: [Todo]!
    todoById(id: ID!): Todo
  }

  type Mutation {
    createTodo(text: String!): Todo!
    updateTodoText(id: ID!, newText: String!): Todo!
    toggleTodoCompleted(id: ID!): Todo!
    deleteTodo(id: ID!): Todo!
  }
`;

module.exports = typeDefs;
