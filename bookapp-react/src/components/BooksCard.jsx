import React, { useState } from 'react';
import { Card, Col, Row } from 'antd';
import{Book,BookLayout,Title,Div,Input,Butn} from './Books.style'
import {books} from './mockdata'
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';
import "./Books.css";
import axios from 'axios'


// const BooksCard = ({book})=> {
  const BooksCard = ()=> {

      const[search,setSearch]=useState("")


  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const searchBook=(evt)=>{
    if(evt.key==="Enter"){
      console.log('heh')
    }
  }

    // const { Search } = Input;
    // const onSearch = value => console.log(value);
    return(
      <div>
        <Title> Find Book</Title>

    {/* <Search placeholder="input search text"
     onSearch={onSearch} enterButton /> */}
    {/* <Form>
    <Input type="text" name="name" />
  <Input1
   type="submit"
   value="Search"
 />
</Form> */}
<Div>
   <Input 
   type="text" 
   placeholder ="Enter Your Books" 
   value={search} 
   onChange={e=>setSearch(e.target.value)}
   onKeyPress={searchBook}/>
   <Butn><i class="fas fa-search"></i></Butn>

</Div>
<  BookLayout>
 { books.map(book=>
   <Book>
   <img
   onClick={showModal}
src={book.img}
alt="Girl in a jacket" 
width="220" 
height="250"
/>
<Modal
//  title={book.title}
 visible={isModalVisible}
  onOk={handleOk}
  onCancel={handleCancel}
  footer={null}
  >
<img
src={book.img}
alt="Girl in a jacket" 
 width="220" 
height="250"

/>         <h2>{book.title}</h2>
<h4>{book.author}</h4>
        <p>{book.text}</p>
      </Modal>

</Book>
   )
  }
</BookLayout>   
</div>
 )
  }
  export default BooksCard
