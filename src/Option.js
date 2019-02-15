import React, {Component} from 'react'; 

class Option extends Component{
    render(){
        const selectedClass = this.props.option.name === this.props.selectedOption ? 'feature__selected' : '';
        const featureClass = 'feature__option ' + selectedClass; 
        return(
             <li key={this.props.index} className="feature__item">
                <div className={featureClass}
                onClick={()=> this.props.updateFeature(this.props.featureName, this.props.option)}>
                { this.props.option.name }
                ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                .format(this.props.option.cost) })
                </div>
            </li>

        )
    }
}

export default Option; 