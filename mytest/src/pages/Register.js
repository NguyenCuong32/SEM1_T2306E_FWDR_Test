import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
export default function Create() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const postData = () => {
        console.log(firstName);
        console.log(lastName);
        console.log(checkbox);
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Product</label>
                    <input placeholder='Product' onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Name</label>
                    <input placeholder='Name' onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                <label>Phone Number</label>
                <input placeholder='phone number' onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                <label>Email</label>
                <input placeholder='email' onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}