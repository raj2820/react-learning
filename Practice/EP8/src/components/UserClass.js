import React from "react";
class UserClass extends React.Component {

    constructor(props){
        super(props);
				this.state = {
					userInfo : {
						Name : "Dummy",
						location : "Default",
						avatar_url : "",
					}
				}
				console.log("constructor");
    }

		componentDidUpdate(){
			console.log("componentdidupdate")
		}

		componentWillUnmount(){
			console.log("componentwillunmount")
		}
	
		async componentDidMount(){
			const data = await fetch("https://api.github.com/users/raj2820")
			const json = await data.json();
			console.log(json)
			console.log("component did mount");

			this.setState({
				userInfo: json,
			})

		}

    render() {
			console.log("render");
			const {name, location, login, avatar_url} = this.state.userInfo
        return (
            <div className="user-card">
                <h2>Name : {name}</h2>
                <h3>Location : {location}</h3>
                <h4>Contact: {login}</h4>
								<img src={avatar_url} />
								{/* <h1>Count : {this.state.count} </h1> */}
								
					{/* <button onClick={() => {
						this.setState({
							count: this.state.count + 1,
						})
					}}>Count Increase</button> */}
            </div>
          )
    }
}

export default UserClass;