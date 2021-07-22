import React from 'react';

class Rating extends React.Component {
    render (){
        const {rating} = this.props
        const nota = rating.map((movie) => movie.rating)
       return(
           <section>
           <div> rating </div>
           <div className='rating'>
               {rating}
           </div>   
           </section>
       )
    }
}

export default Rating;
