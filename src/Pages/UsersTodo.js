import React, {useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import {connect} from "react-redux";
import {getUserFunc, userDelete,} from "../store/Reducer/UserReduser";


const UsersTodo = ({user, getUserFunc, userDelete}) => {

    useEffect(()=>{
        getUserFunc()
    },[])

    const navigate = useNavigate()

    const MoreUser = (item) => navigate('/participants/' + item.id)


    return (
        <div className={'bg-slate-900 py-7'}>
            <div className={'max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 mt-10 my-20'}>
                <div className="relative overflow-x-auto bg-slate-800 shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead
                            className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Course
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Payment
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            user.map((item, index) => <tr key={index} className={'border-b-2  border-slate-600'}>
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                    {item.name}
                                </th>
                                <td className="px-6 py-4">
                                    {item.course}
                                </td>
                                <td className="px-6 py-4">
                                    {item.payment}
                                </td>
                                <td className="px-6 py-4">
                                    {item.date}
                                </td>
                                <td className="px-6 py-4 text-right">
                                 <span>
                                    <button
                                        className={'bg-green-800 hover:bg-green-900 text-white font-bold py-1 px-2 rounded'}
                                        onClick={() => MoreUser(item)}>More</button>
                                     {''}
                                     <button
                                         className={'bg-red-800 hover:bg-red-900 text-white font-bold py-1 mx-1 px-2 rounded'}
                                         onClick={() => userDelete(item.id)}>Del</button>
                                </span>
                                </td>
                            </tr>)
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default connect((
    {
        user: {
            user
        }
    }) => ({
    user
}), {
    getUserFunc, userDelete
})(UsersTodo)
