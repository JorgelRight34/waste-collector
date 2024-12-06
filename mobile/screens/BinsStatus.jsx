import { FlatList, ScrollView } from "react-native-gesture-handler"
import Bin from "../components/Bin"
import styles from "../styles"
import useFetchPage from "../hooks/useFetchPage"
import ProtectedRoute from "../components/ProtectedRoute"

const BinsStatus = ({ navigation }) => {
    const [bins, setBins, setPage] = useFetchPage('/bins/')

    return ( 
        <ProtectedRoute navigation={navigation}>
            <ScrollView contentContainerStyle={{...styles.container, ...styles.pt3}}>
                <FlatList 
                    data={bins}
                    renderItem={({ item }) => <Bin bin={item} style={styles.mb5} />}
                    keyExtractor={item => item.id}
                />
            </ScrollView>
        </ProtectedRoute>
    )
}

export default BinsStatus