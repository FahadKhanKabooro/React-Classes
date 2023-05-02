import React, {Component} from "react";
import { Link , useNavigate} from "react-router-dom";
//High Order FubnCtion 
const withNavigate=(WrapperComponents)=>{
    const Forword = React.forwardRef((props,ref)=>{
        const navigate = useNavigate() //Main Page PE legyega
        return <WrapperComponents {...props}  ref={ref} navigate={navigate} />
    })
    return Forword
}

class Login extends Component{
    go_Home=()=>{
// console.log(this.props)
// console.log('fd')
const {navigate} = this.props
navigate("/Home",{
    state:{ email: "new@GMAIL.COM",
            password:123
}
})

    }
    render(){
        return(
            <>
            <h1>Login Page</h1>
            <button onClick={()=>this.go_Home()}>Click</button>
            </>
        )
    }
}
export default withNavigate(Login)