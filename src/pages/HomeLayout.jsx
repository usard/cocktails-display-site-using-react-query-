import React from 'react';
import axios from 'axios';
import SearchForm from '../components/SearchForm';
import CocktailList from '../components/CocktailList';
import { useLoaderData, useNavigation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const url='https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const searchCocktailsQuery = (searchTerm) => {
  return {
      queryKey:['search', searchTerm || 'all'],
      queryFn: async () => {
        try {
          const response =  await axios.get(`${url}${searchTerm}`);
          return response.data.drinks; 
        }
        catch(error) {
          return error.data.message
        }
      }
    }
}

export const loader = (queryClient) => async({request}) => {
  const localURL = new URL(request.url);
  const searchTerm = localURL.searchParams.get('search') || '';
  await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm)); // this will check whether the query result is present in the cache or not , if it is present then it will directly provide the data from the cache , else it will fetch the result from running the query this will take some time.  return { searchTerm };
  return {searchTerm};
}

const HomeLayout = () => {
  const { searchTerm} = useLoaderData();
  const {data: drinks} = useQuery(searchCocktailsQuery(searchTerm));  
  return (
    <>
      <SearchForm  searchTerm={searchTerm} ></SearchForm> 
      {drinks && <CocktailList drinks={drinks}></CocktailList>}
    </>
  )
}

export default HomeLayout