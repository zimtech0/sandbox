function fetchData() {
   // fetch("https://reqres.in/api/users")
   fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
        .then(response =>{
         if (!response.ok){
             throw Error("ERROR");

         }
         return response.json();

         
         })
         .then(data => {
            console.log(data.data);
             .map(user =>{
                 return `
                 <div class="user">
                   <p>Name: ${user.first_name}</p>
                </div>
                   `;
             })
             .join("");
            console.log(html);
            document.querySelector("#app").insertAdjacentHTML("afterbegin",html);

        })
        .catch(error => {
            console.log(error);
        });

}

fetchData();