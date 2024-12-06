import { Text, View } from "react-native"
import styles from "../styles"
import { FlatList, ScrollView } from "react-native-gesture-handler"
import CollectionRoute from "../components/CollectionRoute"
import useFetchPage from "../hooks/useFetchPage"
import { useEffect } from "react"
import ProtectedRoute from "../components/ProtectedRoute"

const History = ({ navigation }) => {;
    const [routes, setRoutes] = useFetchPage('/routes/')

    useEffect(() => {
        
    }, [routes])

    return (
        <ProtectedRoute navigation={navigation}>
            <ScrollView 
                contentContainerStyle={{}}
                style={{...styles.p1}}
            >
                {routes.map(route => <CollectionRoute key={route.id} route={route} />)}
            </ScrollView>
        </ProtectedRoute>
    )
}

export default History