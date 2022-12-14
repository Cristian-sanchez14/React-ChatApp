import React from 'react'

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user" />
      </div>
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/11638290/pexels-photo-11638290.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          alt="logo"
        />
        <div className="userChatinfo">
          <span>Cristian</span>
        </div>
      </div>
    </div>
  )
}

export default Search
