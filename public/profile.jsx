const Profile = props=>
    (
        <div>
                <img src="http://i.pravatar.cc/300" alt=""/>
                <h1>{props.name} {props.surname}</h1>
                <p>Возраст: {props.age}</p>
                <p>Пол: {props.gender}</p>
                <p>О себе: {props.about}</p>
            </div>
    )

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            age:25
        }
    }
    newRandomAge = ()=>{
        let a = Math.ceil(Math.random()*100)
        console.log("age", a)

        this.setState({
            age: a
        })
    }

    render(){
        return(
            <div>
                <button onClick={this.newRandomAge}>Rerender</button>
                {
                    this.state.age<50?
                    (
                        <Profile
                            age={this.state.age}
                            gender='man'
                            about='something about me...'
                        />
                    ):null
                }
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById("app")
);