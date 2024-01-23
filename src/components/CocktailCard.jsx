import React from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/CocktailCard';

const CocktailCard = ({drink}) => {
  const {idDrink:id, strDrinkThumb: img,strImageSource: info, strAlcoholic: type, strDrink: name  } = drink;
  // console.log('img in card :', img)
  return (
    <Wrapper>
        <div className='img-container'>
          <img src={img} alt="" />
        </div>
       <footer>
         <h4 title={name} >{name}</h4>
         <h5 title={type}>{type}</h5>
         <Link to={`cocktail/${id}`} className='btn'>details</Link>
       </footer>
    </Wrapper>
  )
}

export default CocktailCard