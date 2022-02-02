import React,{useMemo } from 'react';
import { getHeroesByPublisher } from '../selectors/getHeroesByPublisher';
import HereoCard from './HeroeCard';

const HeroeList = ({publisher}) => {
    const heroes =useMemo(()=>getHeroesByPublisher(publisher),[publisher]) 
  return (
      <>
        <div className='row row-cols-1 row-cols-md-3 g-4 animate__animated animate__fadeIn'>
            {
                heroes.map(heroe =>(
                    
                       <HereoCard key={heroe.id} {...heroe}/>
                
                ))
            }
        </div>
      </>

  )
};

export default HeroeList;
