import React from 'react';
import {v4 as uuidv4} from 'uuid'
import '../style/components/score.css';


function Score({value , text , color}) {
    return (
        <div className="score">
             {[1,2,3,4,5].map((score) => (
                   <span key={uuidv4()}>
                          <i style={{color}} className={
                              value + 1 === score + 0.5 
                              ? 'fas fa-star-half-alt' 
                              :  (value >=score 
                              ? 'fas fa-star' 
                              : 'far fa-star')
                        
                        }></i>
                   </span>
             ))}
             <span className="text_views">{text}</span>
        </div>
    );
}
Score.defaultProps = {
    color: "#FFA41C"
};

export default Score;