import { CiSearch } from "react-icons/ci";
import React, { useState } from 'react';
import { Button } from "@nextui-org/button";

const Search = () => {
    return (
        <form className="relative w-full lg:w-[400px] flex items-center flex-row">
        <input
          placeholder="Search"
          className="px-3 py-2 lg:py-0 rounded bg-gray-600 rounded-r-none text-slate-100 w-full lg:w-auto focus:ring-purple-300"
        />
        
        <Button 
          type="submit"
          size="sm"
          className="rounded-l-none mt-2 lg:mt-0" 
        >
          <CiSearch className="h-10 w-5 text-muted-foreground" />

        </Button>
      </form>
      
    );
  };
export default Search;
