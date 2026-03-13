//select all <li> element and print their text using a loop

let list = document.querySelectorAll("li")

for(let i =0; i < list.length; i++){
    console.log(list[i].textContent);
}


// Create a new list item <li>new task</li> and add it to the end of a <ul>

let ul = document.querySelector("ul");
let li = document.createElement("li");

li.textContent = "New Task"

ul.appendChild(li);


 //<!-- task 2 create a new image element with a placeholder source and add it st the top of a div.   -->

 let img = document.createElement("img");
 img.setAttribute(
   "src",
   "https://i.ytimg.com/vi/5S_W1oK5IEs/maxresdefault.jpg",
 );

 img.classList.add("image");
 let div = document.querySelector("div").prepend(img);


 
let p = document.querySelector("p");

 