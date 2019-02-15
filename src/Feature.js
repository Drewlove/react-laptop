import React, {Component} from 'react'; 
import Option from './Option'; 

class Feature extends Component{

//   });

//   return 
    render(){
        return (
        <div className="feature" key={this.props.index}>
         <div className="feature__name">{this.props.featureName}</div>
            <ul className="feature__list">
            {
                this.props.options.map((option, index) => {  
                    return (
                    <Option 
                    selectedOption={this.props.selectedOption}
                    key={index} 
                    option={option}
                    featureName={this.props.featureName}
                    updateFeature={this.props.updateFeature}/>)      
                })
            }
            </ul>
        </div>
        )
    }
}

export default Feature
