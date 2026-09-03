import {registerUser} from "../services/authService.js";
import {loginUser} from "../services/authService.js";
/*-----------------REGISTER User-----------------*/
export async function register(req,res,next){
try{
const {name,email,password} = req.body;
if(!name){
    return res.status(400).json({
        message:"Name is required"
    });
}
if(!email || !email.includes("@")){
    return res.status(400).json({
       message: "Valid email is required"
  });
}
if(!password || password.length < 8){
return res.status(400).json({
  message: "Password must be at least 8 characters"
  });
}
const user = await registerUser(name, email, password)
res.status(201).json(user)
   } catch (error) {
        next(error);
    }
}
/*-----------------LOGIN User-----------------*/
export async function login(req, res, next) {

    try {

        const { email, password } = req.body;

        if (!email || !email.includes("@")) {
            return res.status(400).json({
                message: "Valid email is required"
            });
        }

        if (!password) {
            return res.status(400).json({
                message: "Password is required"
            });
        }

const { user, token } = await loginUser(email, password);

res.status(200).json({
    message: "Login successful",
    user,
    token
});

    } catch (error) {
        next(error);
    }
}