import React from 'react';

const List = ({ people }) => {
  return (<>
     {people.map((person) => {
         const {id,Name,Age,image} = person;
         return(
             <article key={id} className='person'>
                 <img src={image} alt={Name} />
                 <div>
                     <h4>{Name}</h4>
                     <p> {Age} years old</p>
                 </div>
             </article>
         )
     })}
    </>
  );
};

export default List;
