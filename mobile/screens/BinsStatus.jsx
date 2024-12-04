import { FlatList, ScrollView } from "react-native-gesture-handler"
import Bin from "../components/Bin"
import styles from "../styles"

const BinsStatus = ({ }) => {
    const data = [
        {id: 0, location: 'César Augusto Roques #42', fillLevel: 0.5},
        {id: 1, location: 'Camila Henríquez Ureña', fillLevel: 0.25},
        {id: 2, location: 'Leonardo Da Vinci', fillLevel: 0.7},
    ]

    return (
        <ScrollView style={{...styles.container, ...styles.pt3}}>
            <FlatList 
                data={data}
                renderItem={({ item }) => <Bin bin={item} style={styles.mb5} />}
                keyExtractor={item => item.id}
            />
        </ScrollView>
    )
}

export default BinsStatus