import mongoose from 'mongoose';

const todoSchemas = new mongoose.Schemas(
  {
    content: {
      type: 'string',
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId, // it is a special types
      ref: 'User',
    },
    subTodo: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubTodo',
      }, // Array of Sub todo
    ],
  },
  { timeStamps: true }
);

export const todo = mongoose.modal('Todo', todoSchemas);
