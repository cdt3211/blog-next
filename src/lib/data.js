
// import { Post } from "./models/post"
// import { connectToDb } from "./utils"

// export async function getPosts() {
//   try {
//     connectToDb();
//     const posts = await Post.find();
//     return posts;
//   } catch (err) {
//     console.error(err);
//     throw new Error("failed to fetch posts");
//   }
// };

// export async function getPostById(_id) {
//   try {
//     connectToDb();
//     const post = await Post.findById({ _id });
//     return post;
//   } catch (err) {
//     console.error(err)
//     throw new Error("failed to fetch post");
//   }
// }