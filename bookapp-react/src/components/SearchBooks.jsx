import React from 'react'

const SearchBooks = ({handleSubmit,value,Loading,onChange})=>
 {
    return (
        <div>
<form onSubmit={handleSubmit}>
    <input type="search" placeholder="search">
        </input>
    <input 
    value={value}
    disabled={Loading}
    onChange={onChange}
    placeholder="search Book"
    />
    <input type="submit"
    disabled={Loading || !value}
    value="Search"
    />
    </form>   
         </div>
    )
}
export default SearchBooks
