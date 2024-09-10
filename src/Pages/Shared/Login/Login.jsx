import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../FirebaseProvider/FirebaseProvidee";
import { useForm } from "react-hook-form";
import SocialLogin from "../../../components/SocialLogin";
import useAuth from "../../../hooks/useAuth";


const Login = () => {

    const {loginUser} = useAuth()

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const {email, password} = data
        loginUser(email, password)
        .then(result =>{
            if(result.user){
                
            }
        })
        .catch(error =>{
            console.log(error);
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" {...register("email")}/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" {...register("password")}/>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6 p-0">
                            <button className="btn btn-neutral">Login</button>
                        </div>
                        <label className="label">
                            New here? <Link to="/registration" className="label-text-alt link link-hover">Create an account</Link>
                        </label>
                        <SocialLogin />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;