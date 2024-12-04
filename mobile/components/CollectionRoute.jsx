
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "../styles";
import Icon from 'react-native-vector-icons/FontAwesome';


const CollectionRoute = ({ route, className, height }) => {
    const [isDialogShowing, setIsDialogShowing] = useState(false)
    const [routes, setRoutes] = useState(null);


    return (
        <>
            <View  
                style={{ height: height, ...styles.container,  borderRadius: 10 }}
            >
                <View style={{...styles.p2, ...styles.borderBottom}}>
                    <Text>{route?.startingPoint?.name}</Text>
                </View>
                <View style={{...styles.p2, ...styles.borderBottom, flexDirection: 'row'}}>
                    <View className="d-flex align-items-center me-3" style={{...styles.me3, flexDirection: 'row'}}>
                        <Icon name="map-marker-distance" size={30} color="black" />
                        <Text>{route.distance}m</Text>
                    </View>
                    <View className="d-flex align-items-center me-3" style={{...styles.me3, flexDirection: 'row'}}>
                        <Icon name="clock" size={30} color="black" />
                        <Text>{route.duration}s</Text>
                    </View>
                    <View className="d-flex align-items-center me-3" style={{...styles.me3, flexDirection: 'row'}}>
                        <Icon name="date" size={30} color="black" />
                        <Text>{route.date}</Text>
                    </View>
                    <View className="d-flex align-items-center me-3" style={{flexDirection: 'row'}}>
                        <Icon name="recycle" size={30} color="black" />
                        <Text>{route?.instructions?.length}</Text>
                    </View>
                </View>
                <View style={{...styles.p2}}>
                    <TouchableOpacity style={{...styles.primaryBtn}} onPress={() => console.log(route)}>
                        <Text style={{...styles.whiteText}}>Más Información</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/*
            <Dialog
                title={route?.startingPoint?.name}
                show={isDialogShowing}
                onHide={handleOnHide}
                body={isDialogShowing ? renderDialogBody() : ''}
                height="95vh"
                width="95vw"
            /> */}

        </>
    
    )
}

export default CollectionRoute