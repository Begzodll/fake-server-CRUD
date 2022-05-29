const ImageCard = ({image}) => {
    const tags = image.tags.split(',')
    return(
        <div className={'my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 w-full h-100'}>
            <article className={'overflow-hidden rounded-lg shadow-lg bg-slate-800'}>
                <img src={image.webformatURL} alt="img" className={'w-full h-50'}/>
                <div className={'px-5 py-3'}>
                    <div className={'font-bold text-slate-500 text-xl mb-2'}>
                        Photo by {image.user}
                    </div>
                    <ul>
                        <li>
                            <strong className={'text-slate-400'}>Views: </strong>
                            <span className={'text-slate-500'}>{image.views}</span>
                        </li>
                        <li>
                            <strong className={'text-slate-400'}>Downloads: </strong>
                            <span className={'text-slate-500'}>{image.downloads}</span>
                        </li>
                        <li>
                            <strong className={'text-slate-400'}>likes: </strong>
                            <span className={'text-slate-500'}>{image.likes}</span>
                        </li>
                    </ul>
                </div>
                <div className="px-6 py-4">
                    {
                        tags.map((item,index) => (<span key={index} className="inline-block bg-slate-500
                       rounded-full px-3 py-1 text-sm font semibold text-slate-200 m-2">
                    #{item}
                </span>
                        ))
                    }
                </div>
            </article>
        </div>
    )
}
export default ImageCard