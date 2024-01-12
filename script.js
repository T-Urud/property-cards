const like = document.querySelectorAll(".like-btn");

like.forEach((likes) => {
  likes.addEventListener("click", () => {
    likes.classList.toggle("liked");
  });
});
