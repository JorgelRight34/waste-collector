import { useEffect, useState } from "react";
import api from "../api";

const useFetchPage = (endpoint, limit=10) => {
    const [items, setItems] = useState([])
    const [page, setPage] = useState(1);
    const [hasNext, setHasNext] = useState(true);

    useEffect(() => {
        const getItems = async () => {
            const response = await api.get(`${endpoint}?page=${page}&per_page=${limit}`);
            console.log(`page: ${page}`)
            if (response.data.length == 0) {
                setHasNext(false);
                return
            }
            if (page != 1) {
                setItems(prev => [...prev, ...response.data]);
            }
            if (page == 1) [
                setItems(response.data)
            ]
        }

        if (hasNext) {
            getItems().catch((err) => console.log(err));
        }
    }, [page])

    return [items, setItems, setPage]
}

export default useFetchPage