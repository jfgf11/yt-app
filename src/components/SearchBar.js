import React, {useState} from 'react';


const SearchBarHooks = ({onFormSubmit})=> {
    const [term, setTerm] = useState("");

    const handleOnSubmit = (event)=>{
        event.preventDefault();
        onFormSubmit(term);
    }

        return (
            <div className="search-bar ui segmet">
                <form className= "ui form" onSubmit = {handleOnSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                        type="text" 
                        value={term} 
                        onChange={(e)=>{setTerm(e.target.value)}}></input>
                    </div>
                </form>
            </div>
          );

}


export default SearchBarHooks;