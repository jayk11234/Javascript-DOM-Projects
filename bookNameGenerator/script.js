//variables
let btn = document.querySelector('#new-book');
let bookname = document.querySelector('#bookname');
let author = document.querySelector('#author');

const books = [
    {
      name: "The Fault in Our Stars",
      author: "John Green",
      
    },
    {
      name: "The Hunger Games",
      author: "Suzanne Collins",
      
    },
    {
      name: "Divergent",
      author: "Veronica Roth",
      
    },
    {
      name: "The Maze Runner",
      author: "James Dashner",
      
    },
    {
      name: "To All the Boys I've Loved Before",
      author: "Jenny Han",
      
    },
    {
      name: "Thirteen Reasons Why",
      author: "Jay Asher",
      
    },
    {
      name: "The Giver",
      author: "Lois Lowry",
      
    },
    {
      name: "Eleanor & Park",
      author: "Rainbow Rowell",
      
    },
    {
      name: "The Perks of Being a Wallflower",
      author: "Stephen Chbosky",
      
    },
    {
      name: "Paper Towns",
      author: "John Green",
      
    }
  ];
  
btn.addEventListener('click',function(){

    let idx = Math.floor(Math.random()*books.length);
    let book =books[idx];
    bookname.innerText = book.name;
    author.innerText  = book.author;

})
  