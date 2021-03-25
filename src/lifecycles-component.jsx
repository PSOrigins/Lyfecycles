import React from 'react'

class Lifecycles extends React.Component {
    constructor(props){
        super(props);
        console.log("constructor!");
    }

    componentDidMount(){
        console.log("Component mounted!");
    }

    componentDidUpdate() {
        console.log("Component updates!");
    }

    componentWillUnmount(){
        console.log("Component will unmount!");
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("Component updated something!", nextProps)
        return nextProps.text !== this.props.text;
    }

    render(){
        return (
            <div className="lifecycles">
                <h3>Lyfecycle component</h3>
                {this.props.text}
            </div>
        )
    }
}

export default Lifecycles
