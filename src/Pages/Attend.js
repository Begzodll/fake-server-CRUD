import React, { useEffect} from "react";
import {connect} from "react-redux";
import {
    getAddressFunc,
    getCityFunc,
    getEmailFunc,
    getLastNameFunc,
    getNameFunc,
    getStateFunc, getUserFunc,
    getWebinarFunc, getZipFunc, postSavedFunc
} from "../store/Reducer/UserReduser";
import {toast} from "react-toastify";

const Attend = (
    {
        //States
        user,
        nameValue,
        lastNameVal,
        email,
        webinarVal,
        stAddress,

        //Functions
        getUserFunc,
        getNameFunc,
        getLastNameFunc,
        getEmailFunc,
        getWebinarFunc,
        getAddressFunc,
        getCityFunc,
        getStateFunc,
        getZipFunc,
        postSavedFunc
    }
) => {


    useEffect(()=>{
        getUserFunc()
    },[])

    const date = new Date()


    const onSubmit = (e) => {
            e.preventDefault()
        if (nameValue !== '' && lastNameVal !== "" && webinarVal !== '' && email !== '' && stAddress.street !== '' && stAddress.location.city !== '' && stAddress.location.state !== "" && stAddress.location.zip !== '') {
            postSavedFunc({
                id: user.length + 1,
                name: nameValue,
                lastName: lastNameVal,
                email,
                village: stAddress.street,
                city: stAddress.location.city,
                state: stAddress.location.state,
                zip: stAddress.location.zip,
                course: webinarVal,
                payment: 'none',
                date: date.getFullYear() + "/" + date.getMonth() + "/" + date.getDate()

            })
            toast.success('Your information saved')
        } else {
            toast.error('Complete all empty fields')
        }
    }

    return (
        <div className={'max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 mt-10'}>
            <div className={'flex justify-center items-center mt-10'}>
                <div className="mt-10 sm:mt-0">
                    <div className="md:grid md:grid-cols-1 md:gap-6">
                        <div className="mt-5 md:mt-0 md:col-span-2">
                            <form id={'attend'} onSubmit={(e) => onSubmit(e)}>
                                <div className="shadow overflow-hidden sm:rounded-md">
                                    <div className="px-4 py-5 bg-slate-700 sm:p-6">
                                        <div className="grid grid-cols-6 gap-6">
                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="first-name"
                                                       className="block text-sm font-medium text-slate-300">
                                                    First name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="first-name"
                                                    id="first-name"
                                                    autoComplete="given-name"
                                                    onChange={(e) => getNameFunc(e)}
                                                    value={nameValue}
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-slate-600 bg-slate-600 rounded-md text-white"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="last-name"
                                                       className="block text-sm font-medium text-slate-300">
                                                    Last name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="last-name"
                                                    id="last-name"
                                                    autoComplete="family-name"
                                                    onChange={(e) => getLastNameFunc(e)}
                                                    value={lastNameVal}
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-slate-600 bg-slate-600 rounded-md text-white"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-4">
                                                <label htmlFor="email-address"
                                                       className="block text-sm font-medium text-slate-300">
                                                    Email address
                                                </label>
                                                <input
                                                    type="text"
                                                    name="email-address"
                                                    id="email-address"
                                                    autoComplete="email"
                                                    required
                                                    onChange={(e) => getEmailFunc(e)}
                                                    value={email}
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-600 bg-slate-600 text-white rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="country"
                                                       className="block text-sm  text-slate-300 font-medium">
                                                    Chose webinar
                                                </label>
                                                <select
                                                    id="country"
                                                    name="country"
                                                    autoComplete="country-name"
                                                    onChange={(e) => getWebinarFunc(e)}
                                                    value={webinarVal}
                                                    className="mt-1 block w-full py-2 px-3 border border-slate-600 bg-slate-600 text-white bg-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                >
                                                    <option>Chose Webinare</option>
                                                    <option value={'Programming'}>Programming</option>
                                                    <option value={'Business analytics'}>Business analytics</option>
                                                    <option value={'Machine Learning'}>Machine Learning</option>
                                                </select>
                                            </div>

                                            <div className="col-span-6">
                                                <label htmlFor="street-address"
                                                       className="block text-sm font-medium text-slate-300">
                                                    Street address
                                                </label>
                                                <input
                                                    type="text"
                                                    name="street-address"
                                                    id="street-address"
                                                    autoComplete="street-address"
                                                    onChange={(e) => getAddressFunc(e)}
                                                    value={stAddress.street}
                                                    className="mt-1 focus:ring-indigo-500 text-white focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-slate-700 bg-slate-600 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                                <label htmlFor="city"
                                                       className="block text-sm font-medium text-slate-300">
                                                    City
                                                </label>
                                                <input
                                                    type="text"
                                                    name="city"
                                                    id="city"
                                                    autoComplete="address-level2"
                                                    onChange={(e) => getCityFunc(e)}
                                                    value={stAddress.location.city}
                                                    className="mt-1 focus:ring-indigo-500 text-white focus:border-indigo-500 block w-full bg-slate-600 shadow-sm sm:text-sm border-slate-600 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                <label htmlFor="region"
                                                       className="block text-sm font-medium text-slate-300">
                                                    State / Province
                                                </label>
                                                <input
                                                    type="text"
                                                    name="region"
                                                    id="region"
                                                    autoComplete="address-level1"
                                                    onChange={(e) => getStateFunc(e)}
                                                    value={stAddress.location.state}
                                                    className="mt-1 focus:ring-indigo-500 text-white focus:border-indigo-500 block w-full bg-slate-600 shadow-sm sm:text-sm border-slate-600 rounded-md"/>
                                            </div>

                                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                <label htmlFor="postal-code"
                                                       className="block text-sm font-medium text-slate-300">
                                                    ZIP / Postal code
                                                </label>
                                                <input
                                                    type="text"
                                                    name="postal-code"
                                                    id="postal-code"
                                                    autoComplete="postal-code"
                                                    onChange={(e) => getZipFunc(e)}
                                                    value={stAddress.location.zip}
                                                    className="mt-1 focus:ring-indigo-500 text-white focus:border-indigo-500 block w-full bg-slate-600 shadow-sm sm:text-sm border-slate-600 rounded-md"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-4 py-3 bg-slate-800 text-right sm:px-6">
                                        <button
                                            type="submit"
                                            form={'attend'}
                                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
export default connect((
        {
            user: {
                user,
                nameValue,
                lastNameVal,
                email,
                webinarVal,
                stAddress
            }
        }) => (
        {
            user,
            nameValue,
            lastNameVal,
            email,
            webinarVal,
            stAddress
        }),
    {
        getUserFunc,
        getNameFunc,
        getLastNameFunc,
        getEmailFunc,
        getWebinarFunc,
        getAddressFunc,
        getCityFunc,
        getStateFunc,
        getZipFunc,
        postSavedFunc
    })(Attend)
