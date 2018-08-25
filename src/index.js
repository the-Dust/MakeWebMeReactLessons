import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

class Clock extends React.Component{
    constructor(props){
        console.log(1)

        super(props)
        this.state={date: new Date()}
    }

    componentDidMount(){
        console.log(3)

        this.timerID = setInterval(
            ()=>this.tick(),1000
        )

    }

    componentWillUnmount(){
        console.log(4)

        clearInterval(this.timerID)
    }

    tick(){
        this.setState({
            date: new Date()
        })
    }

    render(){
        console.log(2)

        return(
            <div>
                <h1>Hello World!</h1>
                <h2>It's {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )

    }
}


ReactDOM.render(
    <Clock/>, 
    document.getElementById('root')
);

//ReactDOM.render(<App />, document.getElementById('root'));

