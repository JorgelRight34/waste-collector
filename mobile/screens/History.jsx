import { Text, View } from "react-native"
import styles from "../styles"
import { FlatList, ScrollView } from "react-native-gesture-handler"
import CollectionRoute from "../components/CollectionRoute"
import useFetchPage from "../hooks/useFetchPage"
import { useEffect } from "react"

const History = ({ }) => {;
    const [routes, setRoutes] = useFetchPage('/routes/')

    useEffect(() => {
        console.log(routes)
    }, [routes])

    return (
        <ScrollView 
            contentContainerStyle={{}}
            style={{...styles.p1}}
        >
            {routes.map(route => <CollectionRoute route={route} />)}
        </ScrollView>
    )
}

export default History