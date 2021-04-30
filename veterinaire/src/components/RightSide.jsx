import React from 'react';
import {Form, Button} from "react-bootstrap";

export const RightSide = () => {
    return (
        <div>
            <br/><br/><br/>
            <Form style={{width:"80%", marginLeft:"10%", marginTop:"10%"}}>
                <Form.Group >
                    <Form.Label>Enter your username</Form.Label>
                    <Form.Control type="text" placeholder="Enter your usename"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"/>
                </Form.Group>
                <Button  type="submit">Submit</Button>
            </Form>
            
        </div>
    )
}
export default RightSide;