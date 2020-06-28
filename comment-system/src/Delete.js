import React, { Component } from 'react';


class Delete extends Component {
    state = { }

    render() {
        let button
        let a = 1;
        if ( a !== 1) { 
            button = "X";
        }
        
        
        

       
        return (         
        <article>
            <div>
                {button}
            </div>
        </article>
       );
    }
}
 
export default Delete;