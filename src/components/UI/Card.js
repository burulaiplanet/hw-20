import './Card.css'
import React from 'react'

class Card extends React.Component{
 
     render(){
        const classes= "card " + this.props.className
        return (
            <div className={classes}>
               
                {this.props.children}
               
            </div>
        ) 
     }
}
 
export default Card