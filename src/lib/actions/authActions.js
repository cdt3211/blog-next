'use server';
import bcrypt from 'bcryptjs';
import { User } from '../models/user';
import { connectToDb } from '../connectToDb';
import { signIn, signOut } from '@/auth';

export const register = async (formData) => {
  const { username, email, password, passwordRepeat } = Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return { error: "密码不匹配" }
  }

  try {

    const user = await User.findOne({ username });

    if (user) {
      return { error: "用户已存在" }
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    })

    await newUser.save();

    return { success: true };
  } catch (err) {
    console.error(err);
    throw new Error('Error registering user');
  }
}

export const login = async (formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    return { error: "用户名或密码错误！" };
  }
};

export const handleLogout = async () => {
  await signOut();
}