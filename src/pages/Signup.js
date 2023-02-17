import Header from "../components/Header";
import Signup from "../components/SignUp";

export default function SignupPage(){
    return(
        <>
            <Header
              heading="Signup for an account"
              paragraph="Already have an account? "
              linkName="Login"
              linkUrl="/"
            />
            <Signup/>
        </>
    )
}