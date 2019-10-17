import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

const MyForm = ({touched, errors}) =>{
    return (
        <Form className="myForm">
            <div className="holder">
                <Field type="text" name="username" id="username" placeholder="Username"/>
                {touched.username && errors.username && ( <p className="error">{errors.username}</p> )}
            </div>
            <div className="holder">
                <Field type="email" name="email" id="email" placeholder="Email"/>
                {touched.email && errors.email && ( <p className="error">{errors.email}</p> )}
            </div>
            <div className="holder">
                <Field type="password" name="password" id="password" placeholder="Password"/>
                {touched.password && errors.password && ( <p className="error">{errors.password}</p> )}
            </div>
            <div className="holder">
                <Field type="checkbox" name="tos" id="tos"/>
                {touched.tos && errors.tos && ( <p className="error">{errors.tos}</p> )}
            </div>
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
        };
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().trim().min(4, 'Username is too short.').required("Required"),
        email: Yup.string().trim().email().required("Required"),
        password: Yup.string().min(8, 'Password is too short.').required("Required"),
        tos: Yup.bool().oneOf([true], 'You must accept the ToS')
    })
})(MyForm);
export default FormikForm;