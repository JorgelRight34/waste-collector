import { useEffect, useState } from "react";
import api from "../api";

const useFetchPage = (endpoint, limit=10) => {
    const [items, setItems] = useState([])
    const [page, setPage] = useState(1);
    const [hasNext, setHasNext] = useState(true);
    const [reload, setReload] = useState(false);

    const getItems = async () => {
        const response = await api.get(`${endpoint}?page=${page}&per_page=${limit}`);
        console.log(`page: ${page}`)
        if (response.data.length == 0) {
            setHasNext(false);
            return
        }

        // This if statements it's only because on dev mode 
        // it fetches two times the same page
        if (page != 1) {
            setItems(prev => [...prev, ...response.data]);
        }
        if (page == 1) [
            setItems(response.data)
        ]
    }

    useEffect(() => {
        if (hasNext) {
            getItems().catch((err) => console.log(err));
        }
    }, [page])

    useEffect(() => {
        getItems().catch((err) => console.log(err))
    }, [reload])

    return [items, setItems, setPage, setReload]
}

export default useFetchPage