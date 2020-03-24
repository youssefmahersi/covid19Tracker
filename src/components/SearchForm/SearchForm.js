import React from "react";
import { InputGroup, FormControl } from 'react-bootstrap';
import classes from "./SearchForm.module.css";
const SearchForm = (props)=>{
    const inputClasses = [];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
    }
  return (
    <div className={classes.SearchForm}>

  <InputGroup className="mb-3">
  <FormControl as="select" onChange={props.changed}>
  <option  defaultValue="">Choose a country</option>
    {
      props.countries.map(country =>(
        <option key={country} defaultValue={country}>{country}</option>
      ))
    }
      </FormControl>
    
    <InputGroup.Append>
    </InputGroup.Append>
  </InputGroup>
  </div>
  )
    
}
export default SearchForm;