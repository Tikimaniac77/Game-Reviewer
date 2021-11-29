// const newFormHandler = async function (event) {
//     event.preventDefault();

//     console.log(commentTitle);
//     console.log(commentContent);

//     await fetch(`/api/post`, {
//       method: "POST",
//       body: JSON.stringify({
//         commentTitle,
//         commentContent,
//       }),
//       headers: { "Content-Type": "application/json" },
//     });

//     document.location.replace("/dashboard");
//   };

// const grabGameId = 

const newComment = async (event) => {
  console.log("++++++++++TESTTESTETST++++++");
  event.preventDefault();
  const commentTitle = document.querySelector("#userTitle").value;
  const commentContent = document.querySelector("#userReview").value;
  const gameRating = document.querySelector('#userRate').value;

  if (commentTitle && commentContent && gameRating <= 5 && gameRating >= 0) {
    const response = await fetch(`/api/comment`, {
      method: "POST",
      body: JSON.stringify({ commentTitle, commentContent, gameRating }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      location.reload()
      
    } else {
      alert("Failed to post" + response.statusText);
    }
  }
};

document.querySelector("#submitBtn").addEventListener("click", newComment);
