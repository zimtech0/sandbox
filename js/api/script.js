function fetchData() {
    fetch("https://reqres.in/api/users")
        .then(response =>{
         if (!response.ok){
             throw Error("Error: https://jsonplaceholder.typicode.com/users/1/posts");

         }
         return response.json();

         
         })
         .then(data => {
            console.log(data.data);
            const html = data.data
             .map(user =>{
                 return `
                 <div class="user">
                   <p>Name: ${user.first_name}</p>
                </div>
                   `;
             })
             .join("");
            console.log(html);
            document.querySelector("api").insertAdjacentHTML("afterbegin",html);

        })
        .catch(error => {
            console.log(error);
        });

}

fetchData();