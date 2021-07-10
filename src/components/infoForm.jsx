import React from 'react'

import {Form, Button} from 'react-bootstrap';
const InfoForm = () => {
    return (
        <div  className='container d-flex align-self-center justify-content-center m-3 p-3'>
            {/* let formStyle={
                background: 'white',
                padding: '1.5em',
                borderRadius: '1em'
            }
            let formGroupStyle={
                justifyContent:'center',
                alignItems: 'center'
            }
            let nameStyle={
                width: '35%',
                display: 'inline',
                margin: '0px 15px'
            }
            let labelStyle={
                float: 'left',
                margin: '7px 0px',
                fontWeight: '500',
                fontFamily: 'Fira Sans, sans-serif'
            }
            let textStyle={
                width: '95%'
            }
            let headingStyle={
                fontWeight: '500',
                fontFamily: 'Fira Sans, sans-serif'
            }
            let containerStyle={
                minHeight: '100vh',
                display: 'flex',
                fontWeight: '400',
                fontFamily: 'Fira Sans, sans-serif',
                width: '100%',
                height: '100%'
            }
            let rootStyle={
                width: '35vw',
                margin: '50px 490px',
                background: '#e1edf7'
            } */}

            <Form style={{border:'1 px solid ', borderRadius:'1 em'}}>
                

                <Form.Group controlId="password">
                    <Form.Label>Phone No. </Form.Label>
                    <Form.Control type="text" placeholder="Password"/>
                </Form.Group>
                
                
                <Form.Group controlId="age">
                    <Form.Label>Age : </Form.Label>
                    <Form.Control type="number" placeholder="Enter your age" />
                </Form.Group>
                <Form.Group controlId="company">
                    <Form.Label>College/Company : </Form.Label>
                    <Form.Control type="text" placeholder="College/Company" />
                </Form.Group>
                <Form.Group controlId="city">
                    <Form.Label>City : </Form.Label>
                    <Form.Control type="text" placeholder="Enter your city" />
                </Form.Group>
                
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Text>Projects interested in:</Form.Text>
                    <Form.Check type="checkbox" label="Bright Spark Education Program" />
                    <Form.Check type="checkbox" label="Transformers( Livelihood)" />
                    <Form.Check type="checkbox" label="Food and Nutrition Program" />
                    <Form.Check type="checkbox" label="Gender Program" />
                    <Form.Check type="checkbox" label="Youngistaan Animla Heroes" />
                    <Form.Check type="checkbox" label="Blood Donor" />
                    <Form.Check type="checkbox" label="Others" />
                </Form.Group>
                <Form.Group controlId="experience">
                    <Form.Label>Past Volunteering Experiences : </Form.Label>
                    <Form.Control as="textarea" rows={5} type="text"  />
                </Form.Group>
                <Form.Group controlId="how">
                    <Form.Label>How did you hear about us? </Form.Label>
                    <Form.Control as="textarea" rows={5} type="text"  />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default InfoForm
