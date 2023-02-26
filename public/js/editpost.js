// function editPost(){
      
      
// }

const editPost = async (event) => {
    event.preventDefault();

  const title = document.querySelector('#editpost-title').value.trim();
  const content = document.querySelector('#editpost-content').value.trim();
  const id = parseInt(document.location.pathname.replace("/editpost/",""))
  console.log(id)
const url = `/api/post/ ${id}`

  if (title && content) {
    console.log("putting")
        const response = await fetch(url, {
    // const response = await fetch('/api/post/id', {
      method: 'PUT',
      body: JSON.stringify({ title, content}),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  } else{console.log('error')}
    
    
  }

  document
  .querySelector('.editpost-form')
  .addEventListener('submit', editPost);

