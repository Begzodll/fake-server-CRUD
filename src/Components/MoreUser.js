import React, {useEffect} from "react";
import {useParams,useNavigate} from "react-router-dom";
import {connect} from "react-redux";
import {getUserFunc} from "../store/Reducer/UserReduser";

const MoreUser = ({getUserFunc, user}) => {
    useEffect(() => {
        getUserFunc()
    }, [])

    const match = useParams()
    const navigator = useNavigate()

    const Back = (e) => {
      e.preventDefault()
        navigator('/participants/')
    }

    return (
        <div className={'flex justify-center items-center mt-20'}>
            <div className={'my-1'}>
                <article className={'overflow-hidden rounded-lg shadow-lg bg-slate-800 h-auto w-full'}>
                    {
                        user.user.filter(item => item.id == match.id)
                            .map((item, index) => (
                                    <div className={'px-12'} key={index}>
                                        <h1 className={'text-3xl mt-5 text-white text-center'}
                                            key={index + 1}>About: {item.name} user</h1>
                                        <ul className={'w-auto mt-10 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white'}>
                                            <li className={'w-auto px-4 py-2 border-b border-gray:600 bg-slate-800 rounded-t-lg dark:border-gray-600'}>
                                                <span className={'text-slate-400 mr-3 uppercase'}>Name:</span><span
                                                className={'text-slate-300'}>{item.name}</span></li>
                                            <li className={'w-auto px-4 py-2 border-b border-gray:600 bg-slate-800 rounded-t-lg dark:border-gray-600'}>
                                                <span className={'text-slate-400 mr-3 uppercase'}>LastName:</span><span
                                                className={'text-slate-300'}>{item.lastName}</span></li>
                                            <li className={'w-auto px-4 py-2 border-b border-gray:600 bg-slate-800 rounded-t-lg dark:border-gray-600'}>
                                                <span className={'text-slate-400 mr-3 uppercase'}>Course:</span><span
                                                className={'text-slate-300'}>{item.course}</span></li>
                                            <li className={'w-auto px-4 py-2 border-b border-gray:600 bg-slate-800 rounded-t-lg dark:border-gray-600'}>
                                                <span className={'text-slate-400 mr-3 uppercase'}>Email:</span><span
                                                className={'text-slate-300'}>{item.email}</span></li>
                                            <li className={'w-auto px-4 py-2 border-b border-gray:600 bg-slate-800 rounded-t-lg dark:border-gray-600'}>
                                                <span className={'text-slate-400 mr-3 uppercase'}>Village:</span><span
                                                className={'text-slate-300'}>{item.village}</span></li>
                                            <li className={'w-auto px-4 py-2 border-b border-gray:600 bg-slate-800 rounded-t-lg dark:border-gray-600'}>
                                                <span className={'text-slate-400 mr-3 uppercase'}>City:</span><span
                                                className={'text-slate-300'}>{item.city}</span></li>
                                            <li className={'w-auto px-4 py-2 border-b border-gray:600 bg-slate-800 rounded-t-lg dark:border-gray-600'}>
                                                <span className={'text-slate-400 mr-3 uppercase'}>State:</span><span
                                                className={'text-slate-300'}>{item.state}</span></li>
                                            <li className={'w-auto px-4 py-2 border-b border-gray:600 bg-slate-800 rounded-t-lg dark:border-gray-600'}>
                                                <span className={'text-slate-400 mr-3 uppercase'}>Zip:</span><span
                                                className={'text-slate-300'}>{item.zip}</span></li>
                                        </ul>
                                    </div>
                                )
                            )
                    }
                    <div className={'flex justify-between m-4'}>
                        <div/>
                        <button onClick={Back} className={'bg-green-600 px-5 rounded text-slate-300 uppercase'}>
                            back
                        </button>
                    </div>
                </article>
            </div>
        </div>
    )
}
export default connect(({user}) => ({user}),
    {getUserFunc})(MoreUser)