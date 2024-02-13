import React, {Component} from 'react'
import './scheduleDrop.css'
class ScheduleDrop extends Component {
    constructor(){
        super()
        this.state = {
            fname:'',
            lname:'',
            email:'',
            phoneNumber:'',
            service:'',
            date:'',
            time:''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClear = this.handleClear.bind(this)
    }
    handleSubmit(event){
        console.log(this.state)
        event.preventDefault();
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
            fname:'',
            lname:'',
            email:'',
            phoneNumber:'',
            service:'',
            date:'',
            time:''
        })
    }
    render(){
        return (
            <div>
                <div id="ScheduleDrop" className="info-content">
                    <div className="font-oswald d-flex flex-direction-row w-100  justify-center sideNavHeader"> Schedule a Drop</div>
                    <div className="form">
                        <form className="d-flex flex-direction-columan w-100 justify-center sideNavHeader schedule-form" onSubmit={this.handleSubmit}>
                            <div className="d-flex flex-direction-column schedule-container">
                                <div className="d-flex flex-direction-row justify-center media">
                                    <input type="text" id="fname" name="fname" placeholder="First Name" value={this.state.fname} onChange={this.handleChange} required />
                                    <input type="text" id="lname" name="lname" placeholder="Last Name" value={this.state.lname} onChange={this.handleChange}  required />
                                </div>
                                <div className="d-flex flexdirection-row justify-center media">
                                    <input type="text" id="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} required />
                                    <input type="number" id="phoneNumber" name="phoneNumber" placeholder="Phone Number" value={this.state.phoneNumber} onChange={this.handleChange} required />
                                </div>
                                <div className="d-flex flexdirection-row justify-center schedule-dropoff media">
                                    <div className="schedule d-flex align-items-center">Please Select a Drop Off Time</div>
                                    <div className="d-flex justify-between">
                                        <input type="date" id="start" name="date" value={this.state.date} min="2021-10-01" max="2030-12-31"
                                            className="dayTime" onChange={this.handleChange} required/>
                                        <input type="time" id="appt" name="time" value={this.state.time} min="09:00" max="18:00" className="dayTime" onChange={this.handleChange} required />
                                    </div>
                                </div>
                                <div className="d-flex flex-direction-row justify-center">
                                    <select name="service" id="service" className="font-roboto" value={this.state.service} onChange={this.handleChange} required>
                                        <option hidden selected>Select Required Service</option>
                                        <option value="Washing">Washing</option>
                                        <option value="Drying">Drying</option>
                                        <option value="Ironing">Ironing</option>
                                        <option value="Complete Laundry Service">Complete Laundry Service (Washing+Drying+Ironing)</option>
                                    </select>
                                </div>
                                <div className="d-flex w-100 flexdirection-row justify-center">
                                    <button className="btn clear" type="reset" onClick={this.handleClear}>Clear</button>
                                    <button className="btn submit" type="submit">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default ScheduleDrop