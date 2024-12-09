import { useContext, useEffect, useState } from "react";
import api from "../api";
import { LoadingBarContext } from "../contexts/LoadingBarProvider";

const useFetchPage = (endpoint, queryParams='', empty=false, limit=10, initialValue=null) => {
    const [items, setItems] = useState(initialValue)
    const [page, setPage] = useState(1);
    const [hasNext, setHasNext] = useState(true);
    const [reload, setReload] = useState(false);
    const [, setProgress] = useContext(LoadingBarContext);

    const getItems = async () => {
        setProgress(1);
        const response = await api.get(
            `${endpoint}?page=${page}&per_page=${limit}${queryParams}`
        );

        // console.log("Reloading", limit)
        
        if (!empty && response.data.length == 0) {
            setProgress(2);
            setHasNext(false);
            return
        }


        // This if statements it's only because on dev mode 
        // it fetches two times the same page
        if (page != 1 && !empty) {
            // console.log("Page is not 1 and the because you have not allowed emptyness then i'll append the data anyway.")
            setItems(prev => [...prev, ...response.data]);
            setProgress(2);
        } else {
            // If empty then if the data is empty set it anyway
            // console.log(`${endpoint}?page=${page}&per_page=${limit}${queryParams}`)
            // console.log("You do not care if the data is empty, i will replace everything", response.data)
            setItems(response.data)
            setProgress(2);
            return
        }

        if (page == 1) {
            // console.log("page = 1 so just append the data", response.data)
            setItems(response.data)
        }
        setProgress(2);
    }

    useEffect(() => {
        if (hasNext) {
            getItems().catch((err) => console.log(err));
        }
    }, [page])

    useEffect(() => {
        getItems().catch((err) => console.log(err))
    }, [reload, queryParams])

    return [items, setItems, setPage, setReload]
}

export default useFetchPage