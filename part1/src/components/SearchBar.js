import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchMovies } from '../redux/actions/movieActions.js';
import SearchIcon from '@mui/icons-material/Search';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import '../styles/SearchBar.css'

const SearchBar = () => {




  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (title) {
      dispatch(searchMovies(title));
    }
  };

  return (
    <div className="search">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Search Movie By Title"
      />
      <SearchOutlinedIcon className='icon'  onClick={handleSearch}/>

    </div>
  );
};

export default SearchBar;
