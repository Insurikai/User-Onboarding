import React from 'react';
import { withFormik, Form, Field } from 'formik';

const MyForm = () =>{
    return (
        <Form>
            <Field type="text" name="username" id="username" placeholder="Username"/>
            <Field type="email" name="email" id="email" placeholder="Email"/>
            <Field type="password" name="password" id="password" placeholder="Password"/>
            <Field type="checkbox" name="tos" id="tos"/>
            <button type="submit">Register</button>
        </Form>
    );
}
const FormikForm = withFormik({
    mapPropsToValues({username, email, password, tos}){
        return{
            username: username || "",
            email: email || "",
            password: password || "",
            tos: tos || false
        }
    }
})(MyForm);
export default FormikForm;