import React from "react"
import { Formik,Form, Field,ErrorMessage } from "formik"
import * as Yup from 'yup';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth,db } from "../Configs/Firebase";
import { Ref,push } from "firebase/database";
// import { Form } from "react-router-dom";

function LoginForm(){
    return(
        <>
        <h1>Form</h1>
        <Formik
        initialValues={{email :"",firstName:""}} //inital value start 
      
        validationSchema={Yup.object({
            password:Yup.string().min(6,"min lettr 6").required(),
            email:Yup.string().email("Invalid email address").required()
        }) }
        onSubmit={async (value)=>{
            console.log(value)
            try{
                const user = await createUserWithEmailAndPassword(auth,value.email,value.password)
                console.log(user.user.uid)
                
                alert("Registered successful")
            } catch(e){
                console.log(e)
                alert(e.code)
            }
        }}
        >
            <Form style={{textAlign:"center"}}>
                <label htmlFor="email">Email: </label>
                <Field className='email' name={"email"}/>
                <br/>

                <ErrorMessage name={"email"}/>
                <br/>
                <label htmlFor="password">Password: </label>
                <Field name={"password"}/>
                <br/>

                <ErrorMessage name={"password"}/>
                <br/>

                <button style={{backgroundColor:'blue', color:'white'}} type="submit">Submit</button>

            </Form>

        </Formik>
        </>

    )
}

export default LoginForm