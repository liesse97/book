import { useState,useEffect } from 'react';
import SearchBooks from './components/SearchBooks';
import BooksCard from './components/BooksCard';
import{BookLayout,Title} from './components/Books.style';
// import BooksModal from './components/BooksModal'


// const apiUrl= "https://www.googleapis.com/books/v1/volumes?q="
// const apiUrl= "https://www.googleapis.com/books/v1/volumes?q=hello"



function App() {
  return(
    <BooksCard/>

    )

}
export default App
  // const [Loading, setLoading] = useState(false);
//search keyword from input
  // const [keyWord, setKeyword]=useState("");
//store books
  // const[books,setBooks]=useState([]);

  // console.log(books[1].id)



  // function to fetch data from ap
// const dataBooks = async()=>{
// setLoading(true)
// const dataUrl = apiUrl + keyWord;
// // const dataUrl = apiUrl;
// const res = await fetch(dataUrl);
// const data = await res.json();
// setBooks(data.items);
// setLoading(false)
// }
// console.log(books[1])

//call function when our application loads
// useEffect(() => {
//   dataBooks ()
// }, []);

//searchbook
// const handleSubmit = event =>{
//   event.preventDefault()
//   dataBooks()
// }
  // return (
    // <div className="App">
    //   <Title>Find Book</Title>
    //   <SearchBooks 
    //   handleSubmit={handleSubmit}
    //   onChange={event =>setKeyword(event.target.value)}
    //   value={keyWord}
    //   Loading={Loading}

    //   />
    //   <BookLayout>
    //     {books ? books.map(book=>(
  
    //       <BooksCard 
    //      key={book.id}
    //       book={book.volumeInfo}
    //       />
    //     )):"No books"}

    //   </BookLayout>


//     </div>
//   );
// }

// export default App;
