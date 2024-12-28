import { useEffect } from "react";
import { useState } from "react";


const useCollection = () => {

    const [collection, setCollection] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() =>  {
        fetch('e-commerce.json')
       .then(res => res.json())
       .then(data => {
        setCollection(data)
        setLoading(false)
       })
    }, [])

    return[collection, loading]
};

export default useCollection;