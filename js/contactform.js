

let form = document.getElementById("contactForm");
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
          'Accept': 'application/json'
      }
  }).then(response => {
      if (response.ok) {
          status.innerHTML = "Your message was submitted! Please give me a day or two to come back to you.";
          form.reset()
      } else {
          response.json().then(data => {
              if (Object.hasOwn(data, 'errors')) {
                  status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
              } else {
                  status.innerHTML = "Oh no! There was a problem submitting your form."
              }
          })
      }
  }).catch(error => {
      status.innerHTML = "Oh no! There was a problem submitting your form"
  });
}
form.addEventListener('submit', handleSubmit);