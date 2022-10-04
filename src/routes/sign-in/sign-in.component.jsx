import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
const SignIn =()=>{
    const logGoogleUser = async ()=>{
        const response = await signInWithGooglePopup();
        console.log("hello");
        console.log(response);
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