const Todo = require('../models/Todo');

const resolvers = {
  Query: {
    todos: async () => {
      try {
        const todos = await Todo.find();
        return todos;
      } catch (err) {
        throw new Error('Failed to fetch todos');
      }
    },
    todoById: async (_, { id }) => {
      try {
        const todo = await Todo.findById(id);
        return todo;
      } catch (err) {
        throw new Error('Failed to fetch todo by ID');
      }
    },
  },
  Mutation: {
    createTodo: async (_, { text }) => {
      try {
        const todo = new Todo({ text });
        await todo.save();
        return todo;
      } catch (err) {
        throw new Error('Failed to create todo');
      }
    },
    updateTodoText: async (_, { id, newText }) => {
        try {
          const todo = await Todo.findByIdAndUpdate(id, { text: newText }, { new: true });
          return todo;
        } catch (err) {
          throw new Error('Failed to update todo text');
        }
      },
    toggleTodoCompleted: async (_, { id }) => {
      try {
        const todo = await Todo.findById(id);
        todo.completed = !todo.completed;
        await todo.save();
        return todo;
      } catch (err) {
        throw new Error('Failed to toggle todo completion');
      }
    },
    deleteTodo: async (_, { id }) => {
      try {
        const todo = await Todo.findByIdAndDelete(id);
        return todo;
      } catch (err) {
        throw new Error('Failed to delete todo');
      }
    },
  },
};

module.exports = resolvers;
