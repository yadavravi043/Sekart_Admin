import React from "react";
import { Form } from "react-bootstrap";
const Input = (props) => {
    const {label,type,placeholder,value,onChange}=props
  return (
    <>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>{label}</Form.Label>
        <Form.Control 
        type={type}
         placeholder={placeholder} 
         value={value}
         onChange={onChange}
         />
         <Form.Text className="text-muted">
         {props.errorMessage}
       </Form.Text>
      </Form.Group>
    </>
  );
};
export default Input;
