import React from 'react'


class Card extends React.Component {

    render() {
        return (
        
        <div class="card" style='width: 18rem'>

            <img class="card-img-top" src= {this.props.flag} alt="Card image cap"/>
            

            <div class ="card-body">

            <br/><p class ="card-text">
            Name:{this.props.name}
            </p>

            <br/><p class ="card-text">
            Capital:{this.props.capital}
            </p>

            <br/> <p class ="card-text">
            <i class="bi bi-globe2"></i>
            Region:{this.props.region}
            </p>

            <br/> <p class ="card-text">
            <i class="bi bi-person-circle"></i> 
            Population:{this.props.population}
            </p>

            </div>
        </div>
        )
 }};


export default Card
