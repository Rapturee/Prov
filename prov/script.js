async function fetchAndDisplayPosts() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts = await response.json();
  
      const filteredPosts = posts.filter(post => post.userId === 1);
  
      const postsContainer = document.getElementById('posts');
  
      filteredPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
          <h2>${post.title}</h2>
          <p>${post.body}</p>
        `;
        postsContainer.appendChild(postElement);
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  fetchAndDisplayPosts();


  

  