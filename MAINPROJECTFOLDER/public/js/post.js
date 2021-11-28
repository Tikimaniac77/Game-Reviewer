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

  if (commentTitle && commentContent) {
    const response = await fetch(`/api/comment`, {
      method: "POST",
      body: JSON.stringify({ commentTitle, commentContent,  }),
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
