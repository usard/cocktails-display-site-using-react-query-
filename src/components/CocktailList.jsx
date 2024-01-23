import React from 'react';
import { useNavigation } from 'react-router-dom';
import CocktailCard from './CocktailCard';
import Wrapper from '../assets/wrappers/CocktailList';

const CocktailList = ({drinks}) => {
    const navigation = useNavigation();
    if(navigation.state === 'loading') {
       return (
          <div>loading ...</div>
       )
    }
//    console.log('drinks in cocktail list :', drinks);
   if(drinks.length <1) {
    return (
        <div> there are no drinks to show...</div>
    )
   }
  return (
    <Wrapper>
        {
            drinks.map((drink, index)=> {
                return (
                   <CocktailCard key={index} drink={drink}></CocktailCard>
                )
            })
        }
    </Wrapper>
  )
}

export default CocktailList