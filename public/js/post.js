
const replyFormHandler = async (event) => {
    event.preventDefault();

    const post_title = document.querySelector('#post_title').value.trim();
    const post_body = document.querySelector('#post_body').value.trim();
    


    if (post_title) {
        const response = await fetch('/api/posts/create',{
        method: 'POST',
        body: JSON.stringify({ post_title, post_body }),
        headers: { 'Content-Type': 'application/json' }
    });

        if (response.ok) {
            alert("Post created");
            document.location.reload;
        } else {
            alert(response.statusText);
        }
    }
};

document
.querySelector('.post')
.addEventListener('submit', replyFormHandler);

