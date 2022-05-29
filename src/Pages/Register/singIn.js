import {LockClosedIcon} from '@heroicons/react/solid'
import {useEffect} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {useState} from "react";
import {getRegisterFunc, SingInEmailFunc, SingInPasswordFunc} from "../../store/Reducer/Register";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

const SingIn = (
    {
        register, name, lastName, email, password, dataAcc,
        SingInEmailFunc, SingInPasswordFunc, getRegisterFunc
    }) => {

    const navigate = useNavigate()

    useEffect(() => {
        getRegisterFunc()
    }, [])


    const onSaved = (e) => {
        e.preventDefault()

        for (let i = 0; i < register.length; i++) {
            if (register[i].email === dataAcc.email && register[i].password === dataAcc.password) {
                toast.success("success");
                navigate('/participants')
                return;
            }
        }
        toast.error('Check you password')
    }

    return (
        <div className={'flex justify-center items-center mt-10 mb-10 '}>
            <div className={'mt-20'}>
                <img src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="logo"
                     className={'w-auto h-12  mx-auto'}/>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Sign in to your account</h2>
                <form className="mt-8 space-y-6">
                    <input type="hidden" name="remember" defaultValue="true"/>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                                onChange={(e) => SingInEmailFunc(e)}
                                value={dataAcc.email}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                                onChange={(e) => SingInPasswordFunc(e)}
                                value={dataAcc.password}
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                Remember me
                            </label>
                        </div>

                        <div className="text-sm">
                            <Link to={'/singOut'} className="font-medium text-indigo-600 hover:text-indigo-500">
                                Create an account
                            </Link>
                        </div>
                    </div>

                    <div>
                        <button
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-slate-700 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onClick={(e) => onSaved(e)}
                        >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true"/>
                </span>
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default connect(
    ({
         register: {
             dataAcc, register, name, lastName, email, password
         }
     }) => ({
        dataAcc, register, name, lastName, email, password
    }), {getRegisterFunc, SingInEmailFunc, SingInPasswordFunc})(SingIn)