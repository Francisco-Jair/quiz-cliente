import axios from 'axios'
import { useEffect, useState } from 'react'

const useCollectData = (url) => {
    const [fetch, setFetching] = useState({isFetching: false})
    const [dataState, setDataState] = useState({data:[]})
    const [apiUrl] = useState(url)

    useEffect(() => {
        const fetchDataFromApi = async () => {
            try{
                setFetching({isFetching: true})
                const response = await axios.get(apiUrl)
                setDataState({...dataState, data: response.data})
                
            }catch(e){
                setFetching({...fetch, isFetching:true})
            }

        }

        fetchDataFromApi();
        // eslint-disable-next-line
    }, [])


    return [dataState]

}


export default useCollectData