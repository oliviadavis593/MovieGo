import React, {useState} from 'react';

const Search = (props) => {
    const [searchValue, setSearchValue] = useState("");

    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value);
    }

    const resetInputField = () => {
        setSearchValue("")
    }

    const callSearchFunction = (e) => {
        e.preventDefault();
        props.search(searchValue);
        resetInputField();
    }

    return(
        <form className="search">
            <input
                value={searchValue}
                onChange={handleSearchInputChanges}
                type="text"
            />
            <input onClick={callSearchFunction} type="submit" value="SEARCH" />
        </form>
    );
}

export default Search; 

//Explanation of code
/*
- In order to handle internal state - we'd have to create a class component 
  (in the past)

- With hooks we can have a functional component handle its own internal state

- 1st hooks API = useState = lets us add React state to function components

- useState hook accepts one argument which is the initial state - then returns
  an array containing current state(= this.state for class components)
  and a function to update it (= this.setState)

- We're passing our current state as the value for the search input field

- When the onChange event is called = handleSearchInputChanges function is called
  which calls the state update function with the new value 

- resetInputField = basically caled the state update function (setSearchValue)
  with an empty string - in order to clear the inpiur field 
*/