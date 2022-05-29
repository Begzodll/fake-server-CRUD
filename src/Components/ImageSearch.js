import React,{useState} from "react";
const ImageSearch = ({val,set,handleSubmit,submit}) => {
    return(
        <div className={'max-w-sm rounded overflow-hidden my-10 mx-auto '}>
            <form  className={'w-full mx-w-sm'} id={'formCont'} onSubmit={(e)=>handleSubmit(e)}>
                <div className={'flex items-center text-white border-b border-b-2 border-indigo-500 py-2'}>
                    <input type="text" className={'bg-transparent border-none w-full text-slate-200 mr-3 py-1 px-2 '}
                           placeholder={'Search Image Term...'} value={val} onChange={(e)=>set(e.target.value) }/>
                    <button className={'flex-shrink-0 bg-transparent text-white hover:bg-slate-700 border-indigo-500 hover:border-teal-700 text-sm border-2 text-slate-400 py-1 px-2 rounded'} type="submit" form={'formCont'} >Search</button>
                </div>
            </form>

        </div>
    )
}
export default ImageSearch