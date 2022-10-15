import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
const SignIn =()=>{
    const logGoogleUser = async ()=> {
      console.log("hello what the fuck is wrong ???")
        const response = await signInWithGooglePopup();
        console.log("hello");
       
    }
   return(
<div>
 <button onClick={logGoogleUser}>
    SignIn
 </button>
</div>

   );
}
export default SignIn;