const POST_TEMPLATE = postItemTemplate.innerHTML;

function onGetPostClick() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => handlePosts(data))
    .catch((error) => console.dir(error))
    .finally(() => console.log("The End!"));
}

function handlePosts(posts) {
  for (post of posts) {
    addPost(post);
  }
}

function addPost(post) {
  let html = POST_TEMPLATE.replace("{{title}}", post.title)
    .replace("{{body}}", post.body)
    .replace("{{id}}", post.id);
  postsContainer.insertAdjacentHTML("beforeend", html);
  const card = postsContainer.querySelector(`[data-id="${post.id}"]`);
  card.querySelector("button").onclick = onCardButtonClick.bind(
    null,
    post.id,
    card
  );
}

function onCardButtonClick(id, container) {
  // we can do something with id as well
  container.classList.remove("border-info");
  container.classList.add("border-danger");
}
