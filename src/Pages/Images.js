import {useEffect, useState} from "react";
import ImageSearch from "../Components/ImageSearch";
import ImageCard from '../Components/ImageCard'
import {toast} from "react-toastify";

const Images = () => {

    const [images, setImages] = useState([])
    const [search, setSearch] = useState('')
    const [term, setTerm] = useState('programming')

    useEffect(() => {
        toast.warn('Bad words are forbidden')
        toast.warn('Off topic')
    }, [toast])


    useEffect(() => {
        fetch(`https://pixabay.com/api/?key=27597840-7a741b419ef9114af3f9bc2c0&q=${term}&image_type=photo&pretty=true`)
            .then(res => res.json())
            .then(data => setImages(data.hits))
    }, [term,images])


    const handleSubmit = (e) => {
        e.preventDefault()
        setTerm(search)
        search ? setSearch('') : setSearch(term)
        if (search === 'sex' || search === 'porn' || search === 'xxx' || search === 'erotic') {
            setTerm('')
            toast.error('You used bad words so you are banned 😠')
            setInterval(() => {
                window.location = 'https://own-portfolio-begzodll.vercel.app/'
            }, 3000)
        }
    }


    return (
        <div className={'my-12 mx-auto px-4 md:px-12 bg-[#0F172A]'}>
            <ImageSearch val={search} set={setSearch} handleSubmit={handleSubmit}/>

            {
                images.length === 0 ? <p className={'text-white flex items-center justify-center mt-20 text-6xl'}>404</p>:
                    <div className="flex flex-wrap -mx-1 lg:-mx-4">
                        {images.map(image => (
                        <ImageCard key={image.id} image={image}/>
                        ))}
                </div>
            }

        </div>
    )
}
export default Images;