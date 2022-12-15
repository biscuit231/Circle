
const replyFormHandler = async (event) => {
    event.preventDefault();

    const reply = document.querySelector('#reply').value.trim();
    // const userId = session.user_id
    if (reply) {
        const response = await fetch('/api/replys/create',{
        method: 'POST',
        body: JSON.stringify({ reply }),
        headers: { 'Content-Type': 'application/json' }
    });

        if (response.ok) {
            console.log("res okay");
            document.location.reload;
        
        } else {
            alert(response.statusText);
        }
    }
};

document
.querySelector('.reply')
.addEventListener('submit', replyFormHandler);