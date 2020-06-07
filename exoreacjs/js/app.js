class App extends React.Component {
    state = {
        name: "Your Name",
        text: "You comment",
    }

    handlename = event => {
        this.setState({
            name: event.target.value
        })
    }
    handletext = event => {
        this.setState({
            text: event.target.value
        })
    }
    
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
    }


    render() {
        return (
             <form onSubmit={this.handleSubmit}>
                <div> Say something </div> <br/>
                 <label>
                    <input className="nom" type="text" name="name" id=""  
                    value={this.state.name} 
                    onChange={this.handlename} />
                    </label><br/>
                    <textarea className="text" type="text" 
                    value={this.state.text}
                    onChange={this.handletext}>
                </textarea><br/>
                <input className="button" type="submit" value="Comment >"/>
             </form>
        );
    }
}

ReactDOM.render(<App/>,document.getElementById("app"));