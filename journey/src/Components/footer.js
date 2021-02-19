import React from 'react'
import '../Styles/footer.css';
import Button from '../Components/button';
import {Link} from 'react-router-dom';
import {  Form, FormGroup, Label, Input } from 'reactstrap';



function footer() {
    return (
        <div className ='footer-container'>
            <section className = 'footer-signup'>
                <p className = 'footer-signup-heading'>
                    Be sure to join my subscription list for your next dose of motivation and inspiration!
                </p>
                <div className = 'footer-signup-text'>
                    <div className = 'input-area'>
                        <form>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="exampleEmail" className="mr-sm-2">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="examplePassword" className="mr-sm-2">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" />
      </FormGroup>
      <Button>Submit</Button>
                        </form>
                    </div>
                </div>
            </section>
            <div className='footer-link'>
                <div className ='footer-link-wrapper'>
                    <div className ='footer-link-items'></div>
                    <h2> ABout us in footer</h2>
                    <Link to ='/sign up'>How it works in footer</Link>
                    <Link to='/'>Testimonials in footer</Link>
                </div>
            </div>
            
        </div>
    )
}

export default footer;
