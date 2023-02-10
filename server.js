const express = require('express');
const app = express();

const cors = require('cors')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
//javascript object notation
app.use(cors())

var books = [
      {
      id: "1",
      title: "Harry Potter and Deathly Hallows",
      author: "JK rowling"
      },

      {
            id: "2",
            title: "Reasons To Stay Alive",
            author: "Matt Hawg."
      },
      {
            id: "3",
            title: "Atomic Habits",
            author: "James Cleaer"
      }
]
//fetch('')
// app.get(path/url,function(request,response))
//REQUEST --> CLIENT // FRONTEND -get,put,post,delete,patch
//RESPONSE --> SERVER // BACKEND

app.get('/', (req, res) => {
      // res.send("dadyy");
      res.send(books);
});

app.get('/books/:id', (req, res) => {
      const book = books.find((item) => item.id == parseInt(req.params.id));
      return  res.send(book)
});

app.post('/books',(req,res)=>
      {
            const book = req.body;
            book.id = books.length + 1;
            books.push(book);
            res.send(book);
      }
);


app.put('/book/:id',(req,res)=>{
      const id = req.params.id;
      const book = books.find((book)=>{return book.id == id})
      book.title = req.body.title;
      book.author = req.body.author;
      res.send(book);
});

app.delete('/book/:id',(req,res)=>{

      const id = req.params.id;
      books = books.filter((book)=>{book.id != id});
      res.send(books);




})
const port = 4000
app.listen(port, () => {
      console.log(`Example app listening on port http://localhost:${port}!`);
});

//Run app, then load http://localhost:port in a browser to see the output.