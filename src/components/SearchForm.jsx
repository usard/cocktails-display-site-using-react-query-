import React from 'react';
import { Form } from 'react-router-dom';
import Wrapper from '../assets/wrappers/SearchForm';

const searchForm = ({searchTerm}) => {
  return (
      <Wrapper>
         <Form >
            <input type="search" name='search' id='search' defaultValue={searchTerm}/>
            <button type='submit' >search</button>
         </Form>
      </Wrapper>
  )
}

export default searchForm;