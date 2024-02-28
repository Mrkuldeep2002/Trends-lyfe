import React, { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import TopNav from "./TopNav";
import SideDrawer from "./SideNav";
import { useNavigate } from 'react-router-dom';

const Nav = ({}) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const navigate = useNavigate();
  // const [searchValue, setSearchValue] = useState('');

const handleSearchButtonClick = (query) => {
    // Perform the search based on the query
    console.log('Performing search with query:', query);
    // You can add additional logic to handle the search
    navigate(`/searchresult?query=${query}`);

    
  };
  return (
    <>
      <SideDrawer isOpen={isOpen} onClose={onClose} />
      <TopNav onOpen={onOpen} onSearch={handleSearchButtonClick} />
    </>
  );
};

export default Nav;
