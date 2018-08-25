import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { PreviousMap } from '../node_modules/postcss';

class Modal extends React.Component{
    constructor(props){
        super(props)
        this.state={modalVisible: false}
        this.toggleModalHandler = this.toggleModalHandler.bind(this)
    }

    toggleModalHandler = (e, arg1, arg2) => { //public class fields syntax, ("this" doest't looses)
        console.log(e.target)
        console.log(this)
        console.log(arg1)
        console.log(arg2)

        this.setState(
            prevState => ({modalVisible : !prevState.modalVisible})
        )
    }

    
    toggleModalHandler2(arg3, arg4, e){ //public class method syntax, ("this" !!looses, we have to bind it in constructor, for example)
        console.log(e.target)
        console.log(this)
        console.log(arg3)
        console.log(arg4)

        this.setState(
            prevState => ({modalVisible : !prevState.modalVisible})
        )
    } 
    

    render(){
        return(
            <div>
                {this.state.modalVisible
                ?(
                    <div className="modal">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptate, quasi nulla delectus officia laudantium odio accusantium sint cumque beatae eligendi! Animi dolore quas facere voluptatum ipsam, nesciunt ad et?
                    </div>
                )
                : null
                }
                <button onClick={this.toggleModalHandler}>toggleModal</button>
                <button onClick={(e)=>this.toggleModalHandler(e, "arg1", "arg2")}>add parameters with arrow function</button>
                <button onClick={this.toggleModalHandler2.bind(this, "arg3", "arg4") }>add parameters with arrow bind</button>
            </div>
        )

    }
}

function LogoutButton(props){
    return(
        <button onClick={props.onClick}>Logout</button>
    )
}

function LoginButton(props){
    return(
        <button onClick={props.onClick}>Login</button>
    )
}

class LoginControl extends React.Component{
    constructor(props){
        super(props)
        this.handleLoginClick = this.handleLoginClick.bind(this)
        this.handleLogoutClick = this.handleLogoutClick.bind(this)
        this.state={isLoggedIn:false}
    }

    handleLoginClick(){
        this.setState({isLoggedIn:true})
    }

    handleLogoutClick(){
        this.setState({isLoggedIn:false})
    }

    render(){
        return(
            <div>
                {/*this.state.isLoggedIn && <img src="http://i.pravatar.cc/300" alt=""/>*/}
                <Ava isLoggedIn={this.state.isLoggedIn}/>
                {this.state.isLoggedIn? 
                <div><h1>Wellcome, username</h1><LogoutButton onClick={this.handleLogoutClick}/></div>
                :<div><h1>Hello, guest</h1><LoginButton onClick={this.handleLoginClick}/></div>}
            </div>
        )
    }
}

function Ava(props){
    return props.isLoggedIn?<img src="http://i.pravatar.cc/300" alt=""/>:null //return null is react docs recomendation
}

ReactDOM.render(
    //<Modal/>, 
    <LoginControl/>, 
    document.getElementById('root')
);

//ReactDOM.render(<App />, document.getElementById('root'));

