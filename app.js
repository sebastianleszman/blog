window.onload = () => {
  fetch("text.json")
    .then((res) => res.json())
    .then((data) => {
      let output = "";
      data.forEach((post) => {
        output += `
               <h3>${post.title}</h3>
               <p>${post.body}</p>
           `;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch((err) => {
      console.log(err);
    });
};
