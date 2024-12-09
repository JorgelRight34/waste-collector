import { Text, TouchableOpacity, View } from "react-native"
import styles from "../styles"
import { FlatList } from "react-native-gesture-handler"
import CollectionRoute from "../components/CollectionRoute"
import useFetchPage from "../hooks/useFetchPage"
import { useEffect, useState } from "react"
import ProtectedRoute from "../components/ProtectedRoute"
import DateTimePicker from "react-native-modal-datetime-picker"
import { formatHour } from "../utils/utility-functions"

const History = ({ navigation }) => {;
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const [routes, setRoutes, setPage] = useFetchPage("/routes/", `&date=${formatHour(date)}`, true);

    useEffect(() => {
        
    }, [routes])

    const handleConfirm = (date) => {
        setOpen(false);
        setDate(date);
    }

    return (
        <ProtectedRoute navigation={navigation}>
            <View
                contentContainerStyle={{}}
                style={{...styles.p1}}
            >
                <View style={{...styles.mb3, alignItems: 'center'}}>
                    <TouchableOpacity 
                        title="Seleccionar Fecha" 
                        onPress={() => setOpen(true)}
                        style={{...styles.primaryBtn}}
                    >
                        <Text style={{...styles.whiteText}}>
                            Seleccionar Fecha ({formatHour(date)})
                        </Text>
                    </TouchableOpacity>
                    <DateTimePicker
                        isVisible={open}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={() => setOpen(false)}
                    />
                </View>
                <FlatList
                    data={routes}
                    nestedScrollEnabled
                    renderItem={({ item }) => <CollectionRoute route={item} className="mb-3" />}
                    keyExtractor={route => route.id}
                    onEndReachedThreshold={() => setPage(prev => prev + 1)}
                 />
            </View>
        </ProtectedRoute>
    )
}

export default History