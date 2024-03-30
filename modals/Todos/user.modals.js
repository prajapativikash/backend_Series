import mongoose from 'mongoose';
const userScheama = new mongoose.Scheama({
  username: {
    type: 'string',
    required: true,
    unique: true,
    lowercase: true,
  },
  email: {
    type: 'string',
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: 'string',
    required: [true, 'password'],
  },
});

export const user = mongoose.modal('User', userScheama);
