
import { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import styles from "../styles";
import { FontAwesome } from '@expo/vector-icons'
import MyWebView from "./MyWebView";
import { webServerUrl } from "../utils/constants";


const CollectionRoute = ({ route, className, height }) => {
    const [isModalShowing, setIsModalShowing] = useState(false)

    const hideModal = () => {
        setIsModalShowing(false);
    }

    return (
        <>
            <View  
                style={{ height: height, ...styles.container,  borderRadius: 10, ...styles.mb5 }}
            >
                <View style={{...styles.p2, ...styles.borderBottom}}>
                    <Text numberOfLines={1}>{route?.startingPoint?.name}</Text>
                </View>
                <View style={{...styles.p2, ...styles.borderBottom, width: '95%'}}>
                    <View style={{...styles.me3, flexDirection: 'row'}}>
                        <FontAwesome icon="fa-solid fa-truck-front" size={25} color="black" />
                        <Text>{route.distance}m</Text>
                    </View>
                    <View style={{...styles.me3, flexDirection: 'row'}}>
                        <FontAwesome icon="fa-solid fa-clock" size={25} color="black" />
                        <Text>{route.duration}s</Text>
                    </View>
                    <View style={{...styles.me3, flexDirection: 'row'}}>
                        <FontAwesome icon="fa-solid fa-calendar" size={25} color="black" />
                        <Text>{route.date}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <FontAwesome icon="fa-solid fa-location-dot" size={25} color="black" />
                        <Text>{route?.instructions?.length}</Text>
                    </View>
                </View>
                <View style={{...styles.p2}}>
                    <TouchableOpacity style={{...styles.primaryBtn}} onPress={() => setIsModalShowing(true)}>
                        <Text style={{...styles.whiteText}}>Más Información</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Modal
                visible={isModalShowing}
                onRequestClose={hideModal}
                animationType="slide"
            >
                <View style={{...styles.rowCenter, ...styles.p2, ...styles.borderBottom}}>
                    <Text>
                        Ruta #{route.id}
                    </Text>
                    <TouchableOpacity style={{...styles.msAuto, width: 40}} onPress={hideModal}>
                        <Text>Cerrar</Text>
                    </TouchableOpacity>
                </View>
                 <MyWebView
                    uri={`${webServerUrl}/history/?route=${route.id}` }
                />
            </Modal>
        </>
    )
}

export default CollectionRoute