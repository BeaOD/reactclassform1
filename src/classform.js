import React, {Component} from "react";

class Classform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            email:'',
            password:'',
        };
    }

    handleChange= (e) => { 
        console.log (e.target.value);
        this.setState({[e.target.name]:e.target.value});
    } 
    

      handleSubmit =(e)=>{
        e.preventDefault();
        console.log('');
        this.setState({
            name:'', email:'', password:'',
        });
    }
    
    render() {
        return ( 
            <>
    
    <form  onSubmit={this.handleSubmit}>
    <div>
        <label>Name</label>
        <br/>
        <input type='text' placeholder="name" name='name' value={this.state.name} onChange={this.handleChange}></input>    
    </div>

    <div>
        <label>Email</label>
        <br/>
        <input type='email' placeholder="email" name='email' value={this.state.email} onChange={this.handleChange}></input>    
    </div>

    <div>
        <label>Password</label>
        <br/>
        <input type='password'placeholder="password"  name='password' value={this.state.password} onChange={this.handleChange}></input>    
    </div>

      
    <button onChange={this.handleSubmit}>Submit</button>

    </form>

    </>
         );
    } 
    
}
 
export default Classform;