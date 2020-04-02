import React, { Component } from 'react';
import Navbar from './Navbar';

class AddressBook extends Component {
        
        state = {
            name:"",
            number:"",
            phoneBook:[
              {name: "ABC", number: "07123456789" }
                ],
            forms:false
           }
        
        input1=(event)=>{
            this.setState({
                name:event.target.value
            })
        }
        
        input2=(event)=>{
            this.setState({
                number:event.target.value
            })
        }
        
        addContact=()=>{
            
            const newContact={
                name:this.state.name,
                number:this.state.number         
            }
                 
            this.setState( (prevState)=>({
                phoneBook:prevState.phoneBook.concat(newContact),
                 name:"",
                number:""
            }))      
        }
        
        forms = () => { 
            this.setState(
                { forms: !this.state.forms}
            )
        }                             

  render() {
      
      let form = null;
        if(this.state.forms){
          form=
             (  
              <div>
                <form className="formBox">
                <div>
                    <input type="text" className="nameBox" onChange={this.input1} value={this.state.name} placeHolder="Name" />
                </div>
                <div class="form-group">
                    <input type="text" className="numBox" onChange={this.input2} value={this.state.number} placeHolder="Number"/>
                </div>
                <button type="button" className="addContact" onClick={this.addContact}>Add Contact</button>
                </form>
            </div>
          )
      }
           
    return (
      <div className="addressBook">
        <Navbar/>

        <h2 className="addressTitle">Address Book</h2>

         <button className="newContact" onClick={this.forms}>Create New Contact</button>
            
        {form}
        
        {this.state.phoneBook.map(contact =>

           <div className="eachPerson">

           <p className="name">{contact.name}</p>

           <p className="num">{contact.number}</p>

          </div>
        
        )} 
       </div>
    );
  }
}

export default AddressBook;
