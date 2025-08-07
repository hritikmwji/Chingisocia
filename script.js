// Like
function likePost(id) {
  let saved = JSON.parse(localStorage.getItem("savedPosts") || "[]");
  saved = saved.map(post => {
    if (post.id === id) {
      post.likes = (post.likes || 0) + 1;
    }
    return post;
  });
  localStorage.setItem("savedPosts", JSON.stringify(saved));
  loadSavedPosts(); // Refresh feed
}

// Comment
function commentPost(id) {
  const text = prompt("Enter your comment:");
  if (!text) return;

  let saved = JSON.parse(localStorage.getItem("savedPosts") || "[]");
  saved = saved.map(post => {
    if (post.id === id) {
      post.comments = post.comments || [];
      post.comments.push({ user: currentUser, text });
    }
    return post;
  });
  localStorage.setItem("savedPosts", JSON.stringify(saved));
  loadSavedPosts();
}

// Delete
function deletePost(id) {
  let saved = JSON.parse(localStorage.getItem("savedPosts") || "[]");
  saved = saved.filter(post => post.id !== id);
  localStorage.setItem("savedPosts", JSON.stringify(saved));
  loadSavedPosts();
}