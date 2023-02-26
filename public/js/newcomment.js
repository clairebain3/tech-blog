const commentFormHandler = async (event) => {
    event.preventDefault();
  
    const content = document.querySelector('#comment-content').value.trim();
    const post_id = parseInt(document.location.pathname.split("/").pop());
    // if (!post_id){
    // const post_id = parseInt(document.location.pathname.replace("/mypost/",""))
    // }
    console.log(post_id)
    console.log(content)
  
    if (content && post_id) {
      const response = await fetch('/api/comment/new', {
        method: 'POST',
        body: JSON.stringify({content, post_id}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace(''); // something else
      } else {
        alert(response.statusText);

      }
    }
  };

  const deletepost = async (event) => {
    event.preventDefault();
    const id = parseInt(document.location.pathname.replace("/mypost/",""))

  const url = `/api/post/ ${id}`
  console.log(url)
    // if (content && post_id) {
      const response = await fetch(url, {
        method: 'DELETE',
        // body: JSON.stringify({id}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard'); // something else
      } else {
        alert(response.statusText);

      // }
    }
  };

  
  document
    .querySelector('.newcomment-form')
    .addEventListener('submit', commentFormHandler);

    function newcomment() {
      const commentForm = document.querySelector('.newcomment-form')
     commentForm.style.display = "inline"
    }

 const del = document.getElementById('deletePost')
    del.addEventListener('click', deletepost)