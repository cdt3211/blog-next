import { Post } from "./models/post"
import { Category } from "./models/category";

//获取所有文章
export async function fetchPosts() {
  try {
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.error(err);
    throw new Error("failed to fetch posts");
  }
};

//获取文章详情
export async function fetchPostBySlug(slug) {
  try {
    const post = await Post.findOne({ slug }).populate('category').lean()
    return post;
  } catch (err) {
    console.error(err);
    throw new Error("failed to fetch post");
  }
}

// 获取分类
export async function fetchCategories() {
  try {
    const categories = await Category.find().lean();
    return categories.map(category => ({
      ...category,
      _id: category._id.toString()
    }))
  } catch (err) {
    console.error(err);
    return { error: 'Failed to get categories' };
  }
}