const loginEl = document.getElementById("login");
const logoutEl = document.getElementById("logout");

// const nodemailer = require("nodemailer");
// const sendgridTransport = require("nodemailer-sendgrid-transport");

// const transport = nodemailer.createTransport(
//   sendgridTransport({
//     auth: {
//       api_key:
//         "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",
//     },
//   })
// );

const loginFormHandler = async (e) => {
  e.preventDefault();

  // Collect values from the login form
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  // loginEl.classList.remove('hidden')
  // logoutEl.classList.add('hidden')
  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page

      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#name-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (name && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // transport
      //   .sendMail({
      //     to: `${email}`,
      //     from: "Tikimaniac77@gmail.com",
      //     subject: "Game-Reviewer - Thank you for Signing UP!",
      //     html: "<h2>Thank you for Signing Up to Game-Reviwer!</h2>",
      //   })
      //   .then(console.log("Success"))
      //   .catch((err) => console.log(err));

      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector("#loginBtn").addEventListener("click", loginFormHandler);

document
  .querySelector("#signUpBtn")
  .addEventListener("click", signupFormHandler);
