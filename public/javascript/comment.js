const commentForm = document.getElementById("comment-form");
const commentSection = document.getElementById("comment-section");

const toggleFormBtn = document.getElementById("toggle-form-btn");
const discussionForm = document.getElementById("discussion-form");
const commentBoxToggleIcon = document.getElementById('comment-box-toggle-icon');

var commentBoxState = false;

toggleFormBtn.addEventListener("click", () => {
    if(!commentBoxState){
        discussionForm.classList.remove("hidden");
        commentBoxToggleIcon.src = 'static/up.svg';
        commentBoxState = true;
    } else {
        discussionForm.classList.add("hidden");
        commentBoxToggleIcon.src = 'static/down.svg';
        commentBoxState = false;
    }
});


commentForm.addEventListener("submit", function (event) {
    event.preventDefault();
    
    // Get form inputs
    const name = document.getElementById("name").value;
    const comment = document.getElementById("comment").value;
    
    // Create new comment card
    const commentCard = document.createElement("div");
    commentCard.classList.add("flex", "space-x-4");
    
    // Create profile picture element
    const profilePic = document.createElement("div");
    profilePic.classList.add("flex-shrink-0");
    profilePic.innerHTML = `<img src="profile.jpg" alt="Profile Picture" class="w-12 h-12 rounded-full">`;
    
    // Create comment content element
    const commentContent = document.createElement("div");
    commentContent.classList.add("flex-grow");
    commentContent.innerHTML = `
    <h3 class="text-lg font-bold">${name}</h3>
    <p class="text-gray-600">${comment}</p>
    <p class="text-gray-400 text-sm">Just now</p>
    `;
    
    // Append profile picture and comment content to comment card
    commentCard.appendChild(profilePic);
    commentCard.appendChild(commentContent);
    
    // Append comment card to comment section
    commentSection.appendChild(commentCard);
    
    // Clear form inputs
    document.getElementById("name").value = "";
    document.getElementById("comment").value = "";
});