import React from "react";
import { Button, Form } from "semantic-ui-react";

function SignIn() {
    return (
        <Form>
            <Form.Field>
                <label>First Name</label>
                <input placeholder="First Name" />
            </Form.Field>
            <Form.Field>
                <label>Last Name</label>
                <input placeholder="Last Name" />
            </Form.Field>
            <Button type="submit">Sign In</Button>
        </Form>
        
            
    )
}

export default SignIn;