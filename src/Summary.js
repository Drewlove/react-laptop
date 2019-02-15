import React, {Component} from 'react'

class Summary extends Component{
    render(){
        console.log(this.props.selectedFeature)
        return (
            <div className="summary__option" key={this.props.index}>
            <div className="summary__option__label">{this.props.index}  </div>
            <div className="summary__option__value">{this.props.selectedFeature.name}</div>
            <div className="summary__option__cost">
              { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                  .format(this.props.selectedFeature.cost) }
            </div>
        </div>
        )
    }
}

export default Summary 