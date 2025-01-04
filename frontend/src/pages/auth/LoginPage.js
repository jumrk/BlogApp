import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
export const LoginPage = () => {
    return (
        <div className='w-full h-screen flex'>
            <div className='flex justify-center items-center w-[60%]'>
                <div className='' >
                    <h1 className='text-3xl font-semibold'>Welcome back!</h1>
                    <p className='text-[16px] mt-3 '>Enter your Credentials to access your account</p>
                    <div className='mt-10'>
                        <label htmlFor="email" className='text-[14px]'>Email address</label> <br />
                        <input id='email' className='w-full mt-2 h-9 border p-3 rounded-xl outline-none' type="email" required placeholder='Enter your email' />
                    </div>
                    <div className='mt-6'>
                        <label htmlFor="password" className='text-[14px]'>Password</label> <br />
                        <input id='password' className='w-full mt-2 h-9 border p-3 rounded-xl outline-none' type="password" required placeholder='Enter your password' />
                    </div>

                    <div className='flex gap-2 items-center mt-8'>
                        <input className='cursor-pointer' type="checkbox" id="remember" />
                        <label className='cursor-pointer text-sm' htmlFor="remember">Remember for 30 days</label>
                    </div>

                    <div className="mt-4">
                        <button className='w-full h-9 text-white bg-[#3A5B22] rounded-xl font-bold'>Login</button>
                    </div>

                    <div className='flex justify-center mt-6'>
                        <p>Or</p>
                    </div>

                    <div className='flex gap-5 '>
                        <div className='cursor-pointer flex px-5 gap-2 py-3 border rounded-xl items-center'>
                            <FcGoogle size={30} />
                            <p>Sign in with Google</p>
                        </div>
                        <div className='cursor-pointer flex px-5 gap-2 py-3 border rounded-xl items-center'>
                            <FaApple size={30} />
                            <p>Sign in with Apple</p>
                        </div>
                    </div>

                    <div className='flex gap-1 mt-6 justify-center'>
                        <p>Don't have an account?</p><p className='cursor-pointer text-[#0F3DDE]'>Sign Up</p>
                    </div>
                </div>
            </div>
            <div className='w-[40%] h-full'>
                <img className='w-full h-full  rounded-tl-[40px] rounded-bl-[40px]' src="/banner_auth.jpg" alt="" />
            </div>
        </div>
    )
}
