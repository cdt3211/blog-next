'use server'

import { Category } from "../models/category";
import { connectToDb } from "../connectToDb";

// 添加分类
export async function addCategory(formData) {
  try {
    await connectToDb();
    const category = new Category({
      name: formData.get('name')
    })
    await category.save();
    revalidatePath('/blog');
  } catch (err) {
    console.error(err);
    return { error: 'Failed to add category' };
  }
}