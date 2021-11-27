// const newFormHandler = async function (event) {
//     event.preventDefault();
  
    
  
//     console.log(postTitle);
//     console.log(postContent);
  
//     await fetch(`/api/post`, {
//       method: "POST",
//       body: JSON.stringify({
//         postTitle,
//         postContent,
//       }),
//       headers: { "Content-Type": "application/json" },
//     });
  
//     document.location.replace("/dashboard");
//   };
  


const newComment = async (event) => {
    console.log('++++++++++TESTTESTETST++++++')
        event.preventDefault();
        const postTitle = document.querySelector('#userTitle').value;
        const postContent = document.querySelector('#userReview').value;
        
      
        if ( postTitle && postContent) {
          const response = await fetch(`/api/game/:id`, {
            method: 'POST',
            body: JSON.stringify({ postTitle, postContent }),
            headers: {
              'Content-Type': 'application/json',
            },
          });
      
          if (response.ok) {
            alert('posted!')
          } else {
            alert('Failed to post');
          }
        }
      };

    document.querySelector("#submitBtn").addEventListener("click", newComment);