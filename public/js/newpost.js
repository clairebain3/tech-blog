const postFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#newpost-title').value.trim();
    const content = document.querySelector('#newpost-content').value.trim();
  
    if (title && content) {
      const response = await fetch('/api/post/', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('.newpost-form')
    .addEventListener('submit', postFormHandler);

