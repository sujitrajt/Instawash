import React,{Component}from 'react'
import axios from 'axios'
import './contactUs.css'
// import '../../../Static website/src/themes/dark.css'
class ContactUs extends Component {
    constructor(props){
        super(props)
        this.state = {
            fname:'',
            lname:'',
            email:'',
            PhoneNumber:'',
            query:'',
            mailSent:false,
            error:null
    };
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
    handleSubmit(event) {
        // console.log(this.state)
        event.preventDefault();
        axios({
            method:'post',
            url:process.env.REACT_APP_API_PATH + '/contactUs.php',
            headers: {
                'content-type':'application/json'
            },
            data:this.state
        }).then(result => {
            console.log(result.data)
            this.setState({
                mailSent: result.data.sent
            })
        }).catch(error => {
            this.setState({
                error: error.message
            })
        })
      }
    handleClear(event){
        event.preventDefault();
        this.setState({
            fname:'',
            lname:'',
            email:'',
            PhoneNumber:'',
            query:''
        })
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="font-oswald heading"> Contact Us </div>
                </div>
                <div className="formContainer contact-form">
                    <div className="field-container">  
                    <div className="innerHeading">
                        <p>Your feedback matters. Write to us if you have any questions, queries or suggestions regarding any
                        page/content </p>
                    </div>  
                    <div className="form">
                        <form className="d-flex flex-direction-column w-100" onSubmit={this.handleSubmit} enctype="text/plain"> 
                            <div className="d-flex flex-direction-row mediaPhone">
                                <input type="text" id="fname" name="fname" placeholder="First Name" value={this.state.fname} onChange={this.handleChange} required/>
                                 <input type="text" id="lname" name="lname" placeholder="Last Name" value={this.state.lname}  onChange={this.handleChange} required/>    
                            </div>
                            <div className="d-flex flex-direction-row mediaPhone">
                                <input type="text" id="email" name="email" placeholder="E-mail" value={this.state.email} onChange={this.handleChange} required/>
                                <input type="text" id="PhoneNumber" name="PhoneNumber" placeholder="Phone Number" value={this.state.PhoneNumber} onChange={this.handleChange}  required/>
                            </div>
                            <div className="d-flex flex-direction-row mediaPhone">
                                <textarea id="query" className="font-roboto" name="query" placeholder="Enter your query" value={this.state.query} onChange={this.handleChange}  required></textarea>
                            </div>
                            <div className="d-flex flex-direction-row buttons mediaPhone">
                                <button className="btn clear" type="reset" onClick={this.handleClear}>Clear</button>
                                <button className="btn submit" type="submit">Submit</button>
                            </div>
                        </form>   
                    </div>
                    </div>
                </div>
                <div>
                    {this.state.mailSent ? <p>Mail sent</p> : <p></p>}
                </div>
            </div>
        
        );
    }
}

export default ContactUs




// function ContactUs() {
//     // useEffect(() => {
//     //     document.getElementsByClassName('nav-item active')[0].classList.remove('active');
//     //     document.getElementById('contactTab').classList.add('active');
//     // });
//     return (
//         <div>
//             <div className="container">
//                 <div className="font-oswald heading"> Contact Us </div>
//             </div>
//             <div className="formContainer contact-form">
//                 <div className="field-container">  
//                 <div className="innerHeading">
//                     <p>Your feedback matters. Write to us if you have any questions, queries or suggestions regarding any
//                     page/content </p>
//                 </div>  
//                 <div className="form">
//                     <form className="d-flex flex-direction-column w-100" action="admin@instawash.com" method="post" enctype="text/plain"> 
//                         <div className="d-flex flex-direction-row mediaPhone">
//                             <input type="text" id="fname" name="fname" placeholder="First Name" required/>
//                              <input type="text" id="lname" name="lname" placeholder="Last Name" required/>    
//                         </div>
//                         <div className="d-flex flex-direction-row mediaPhone">
//                             <input type="text" id="email" name="email" placeholder="E-mail" required/>
//                             <input type="text" id="PhoneNumber" name="PhoneNumber" placeholder="Phone Number" required/>
//                         </div>
//                         <div className="d-flex flex-direction-row mediaPhone">
//                             <textarea id="query" className="font-roboto" name="query" placeholder="Enter your query" required></textarea>
//                         </div>
//                         <div className="d-flex flex-direction-row buttons mediaPhone">
//                             <button className="btn clear" type="reset">Clear</button>
//                             <button className="btn submit" type="submit">Submit</button>
//                         </div>
//                     </form>   
//                 </div>
//                 </div>
//             </div>
//         </div>
    
//     );
// }
// export default ContactUs