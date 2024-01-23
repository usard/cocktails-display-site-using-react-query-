import React from 'react';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import Wrapper from '../assets/wrappers/SingleCocktail';
import { useQuery } from '@tanstack/react-query';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const singleCocktailQuery = (id) => {
    return {
        queryKey: ['id', id],
        queryFn: async()=>{
            const response = await axios.get(`${url}${id}`);
            console.log( 'response for single cocktal :', response);
            return  response.data.drinks; 
        }
    }
}
export const loader = (queryClient) =>async({params}) => {
    const {id} = params;
    await queryClient.ensureQueryData(singleCocktailQuery(id))
    return {id}
}
const SingleCocktail = () => {
   const {id:drinkId} = useLoaderData();
   const {data:drinks} = useQuery(singleCocktailQuery(drinkId));
   const drink = drinks[0];
   const {strDrinkThumb: image, strDrink: name, strCategory:category, strInstructions: instructions, strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5, strGlass: glass, strAlcoholic: info, idDrink:id } = drink;
   
   let ingredientsArray=[];
   for(let key in drink){
    if (drink.hasOwnProperty(key)) {
      ingredientsArray.push({key, value: drink[key]});
    }
   }
   ingredientsArray=ingredientsArray.filter((obj)=>obj.key.startsWith('strIngred') && obj.value !== null);
   let str = ingredientsArray.map(obj=> {
       return obj.value;
    }).join(',');
    // console.log('ingredients array in single :', str);
  return (
      <Wrapper className='page'>
        <article>
            <div className='img-container'>
                <img src={image} alt="" />
            </div>
            <div className="data">
                <p className='data-row'> 
                    <span className='attribute'>Name :</span>
                    <span>{name}</span>
                </p>
                <p className='data-row'>
                    <span className='attribute'>Type :</span>
                     <span>{info}</span>
                </p>
                <p className='data-row'>
                    <span className='attribute'>Glass :</span>
                    <span>{glass}</span> 
                </p>
                <p className='data-row'>
                    <span className='attribute'>Category :</span>
                    <span>{category}</span>
                </p>
                <p className='data-row'>
                    <span className='attribute'>Ingredients :</span>
                    <span>{str}</span>
                </p>
                <p className='data-row'>
                    <span className='attribute'>Instructions :</span>
                    <span>{instructions}</span>
                </p>
            </div>
        </article>
      </Wrapper>
  )
}

export default SingleCocktail;