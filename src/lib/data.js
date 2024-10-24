
"use server"
export async function getPosts() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    return res.json()
  } catch (err) {
    console.error(err)
    return { error: 'An error occurred' }
  }
}

export async function getPostById(postId) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    return res.json()
  } catch (err) {
    console.error(err)
    return { error: 'An error occurred' }
  }
}