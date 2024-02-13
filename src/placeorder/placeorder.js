import React, {Component} from 'react'
import './placeorder.css'
class PlaceOrder extends Component{
    constructor (props) {
        super(props)
        this.state = {
            FirstName:'',
            LastName:'',
            email:'',
            phoneNumber:'',
            service:'',
            Items:'',
            Instruction:'',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClear = this.handleClear.bind(this)
    }
    handleChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }
    handleClear(event){
        event.preventDefault()
        this.setState({
            FirstName:'',
            LastName:'',
            email:'',
            phoneNumber:'',
            service:'',
            Items:'',
            Instruction:'',
        })
    }
    handleSubmit(event){
        console.log(this.state)
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <div id="place-order" className="info-content">
                    <div className="font-oswald d-flex flex-direction-row w-100  justify-center sideNavHeader"> Place Order </div>
                    <div className="form">
                        <form className="d-flex flex-direction-column w-100 align-items-center place-order-form" onSubmit={this.handleSubmit}>
                            <div className="d-flex flex-direction-column order-Container">
                                <div className="d-flex flex-direction-row justify-center media">
                                    <input type="text" id="fname" name="FirstName" className="font-roboto" placeholder="First Name" value={this.state.FirstName} onChange={this.handleChange} required/>
                                    <input type="text" id="lane"  name="LastName" className="font-roboto" placeholder="Last Name" value={this.state.LastName} onChange={this.handleChange} required/>
                                </div>
                                <div className="d-flex flex-direction-row justify-center media">
                                    <input type="text" id="email" className="font-roboto"  name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} required/>
                                     <input type="number" id="phoneNumber" className="font-roboto"  name="phoneNumber" placeholder="Phone Number" value={this.state.phoneNumber} onChange={this.handleChange} required/>
                                </div>
                                <div className="d-flex flex-direction-row justify-center media">
                                    <select name="service" id="service" className="font-roboto" defaultValue={'DEFAULT'} value={this.state.service} onChange={this.handleChange} required>
                                        <option  value="DEFAULT">Select Required Service</option>
                                        <option value="Washing" >Washing</option>
                                        <option value="Drying">Drying</option>
                                        <option value="Ironing">Ironing</option>
                                        <option value="CompleteLaundryService">Complete Laundry Service (Washing+Drying+Ironing)</option>
                                    </select>
                                    <input type="number" id="noOfItems" name="Items" placeholder="Number of Items" value={this.state.Items} onChange={this.handleChange} required/>
                                </div>
                                <div className="d-flex flex-direction-row justify-center media">
                                    <textarea id="Instruction" className="font-roboto" name="Instruction" placeholder="Special Instruction" value={this.state.Instruction} onChange={this.handleChange}></textarea>
                                </div>
                                <div className="d-flex w-100  flex-direction-row justify-center ">
                                     <button className="btn clear" type="reset" onClick={this.handleClear}>Clear</button>
                                    <button className="btn orderButton" type="submit">Place Order</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
    
export default PlaceOrder