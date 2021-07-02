function fetchData() {
   fetch("https://jsonplaceholder.typicode.com/users/1/posts")
        .then(response =>{
         if (!response.ok){
             throw Error("ERROR");

         }
         return response.json();

         
         })
         .then(data => {
            console.log(data.data);
             .map(userId =>{
                 return `
                 <div class="userId">
                   <p>User Id: ${userId.userId}</p>
                   <p>Post Id: ${userId.id}</p>
                   <p>Post Title: ${userId.title}</p>
                   <p>Post Contents: ${userId.body}</p>

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