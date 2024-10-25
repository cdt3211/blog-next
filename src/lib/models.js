import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    max: 50,
  },
  password: {
    type: String,
    required: true,
    min: 6
  },
  avatar: {
    type: String
  },
})

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  category: {
    type: String
  },
},
  { timestamps: true }
)

export const User = mongoose.models.User || mongoose.model('User', userSchema);
export const Post = mongoose.models.Post || mongoose.model('Post', postSchema);