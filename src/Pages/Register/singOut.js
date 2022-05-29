import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";
import {LockClosedIcon} from "@heroicons/react/solid";
import {
    getEmailFunc,
    getLastNameFunc,
    getNameFunc,
    getPasswordFunc,
    getRegisterFunc, postDataFunc
} from "../../store/Reducer/Register";
import {useEffect} from "react";
import {toast} from "react-toastify";

const SingOut = (
    {
        register, name, lastName, email, password,
        getRegisterFunc,
        getNameFunc,
        getLastNameFunc,
        getEmailFunc,
        getPasswordFunc,
        postDataFunc
    }) => {

    useEffect(() => {
        getRegisterFunc()
    }, [])

    const navigate = useNavigate()

    const onSaved = (e) => {
        e.preventDefault()

        if( password.length < 8 ){
            toast.error('password should be not less that 8 letters')
        } if (password.length < 8 || name === '' || lastName === '' || email === '') {
            toast.error('You should complete all empty fields')
        } else {
            postDataFunc({
                id: register.length + 1,
                name, lastName, email, password,
            })
            toast.success('Your data succesfuly saved')
            navigate('/participants')
        }

    }

    return (
        <div className={'flex justify-center items-center mt-10 mb-10 '}>
            <div className={'mt-20'}>
                <img src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="logo"
                     className={'w-auto h-12  mx-auto'}/>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Create your account</h2>
                <form className="mt-8 space-y-6">
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                className="appearance-none bg-slate-700 relative block w-full px-3 py-2 border placeholder-slate-400 text-white rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Enter your name"
                                onChange={(e) => getNameFunc(e)}
                            />
                        </div>
                        <div>
                            <input
                                id="l-name"
                                name="name"
                                type="text"
                                required
                                className="appearance-none bg-slate-700 text-white rounded-none relative block w-full px-3 py-2 placeholder-slate-400  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Enter your last name"
                                onChange={(e) => getLastNameFunc(e)}
                            />
                        </div>
                        <div>
                            <input
                                name="email"
                                type="email"
                                required
                                className=" block w-full px-3 py-2 border bg-slate-600 placeholder-slate-400 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                                onChange={(e) => getEmailFunc(e)}
                            />
                        </div>
                        <div>
                            <input
                                name="password"
                                type="password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 text-white bg-slate-600 placeholder-slate-400 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                                onChange={(e) => getPasswordFunc(e)}
                            />
                        </div>
                    </div>


                    <div>
                        <button
                            onClick={(e) => onSaved(e)}
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-slate-700 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true"/>
                </span>
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default connect((
    {
        register: {
            register, name, lastName, email, password
        }
    }) => ({
    register, name, lastName, email, password
}), {
    getRegisterFunc,
    getNameFunc,
    getLastNameFunc,
    getEmailFunc,
    getPasswordFunc,
    postDataFunc
})(SingOut)