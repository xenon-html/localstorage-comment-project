

const anonymousInput = document.querySelector(".anonymous-input");
const userComment = document.querySelector(".usercomment");
const publishBtn = document.querySelector("#publish");
const comments = document.querySelector(".comments")

userComment.addEventListener("input",(e) => {
  if(e.currentTarget.value !== "") {
    publishBtn.removeAttribute("disabled");
    publishBtn.classList.add("able");
  }else{
    publishBtn.setAttribute("disabled", "disabled");
    publishBtn.classList.remove("able");
  }
} );
//user object
const userId = {
  name:"",
  message:"",
  date:""
}

//create a function to publish your comment;
function addComment() {
  userId.name = anonymousInput.value;
  userId.message = userComment.value;
  userId.date = new Date().toLocaleString();

  let publishedComment = `
      <div class="parent">
        <img src=""/>
        <div>
          <h3>${userId.name}</h3>
          <p>${userId.message}</p>
          <div class="engagements"></div>
          <span>${userId.date}</span>
        </div>
      </div>
      `;
      comments.innerHTML += publishedComment;
      
      //lets connect our comment box to the local storage
      localStorage.setItem("comments", comments.innerHTML);

      userComment.value = "";
      anonymousInput.value = "Anonymous";

      //lets increments the count when a comments is posted
      let counts = document.querySelectorAll(".parent").length;
      document.getElementById("comment-count").textContent = counts;
}

//this  adds an event listener in the the comment;
publishBtn.addEventListener("click", addComment);

//when the dom loads, fetch data from the localstorage
window.addEventListener("DOMContentLoaded", (e) =>{
  comments.innerHTML = localStorage.getItem("comments")

  
      //lets increments the count when a comments is posted
      let counts = document.querySelectorAll(".parent").length;
      document.getElementById("comment-count").textContent = counts;
} 
)
