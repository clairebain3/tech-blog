const commentFormHandler = async (event) => {
    event.preventDefault();
  
    const content = document.querySelector('#comment-content').value.trim();
    const post_id = "2"
  
    if (content && post_id) {
      const response = await fetch('/api/comment/new', {
        method: 'POST',
        body: JSON.stringify({content, post_id}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard'); // something else
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('.newcomment-form')
    .addEventListener('submit', commentFormHandler);