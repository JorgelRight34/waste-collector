import { Image, Text, View } from "react-native"
import styles from "../styles"

const Bin = ({ bin, style }) => {
    return (
        <View style={{...styles.row, ...styles.bin, ...styles.mb3}}>
            <View style={{...styles.col, ...styles.imageContainer}}>
                <Image 
                    style={styles.binImg}
                    source={require("../assets/trash-bin.png")} 
                    resizeMethod="contain"
                />
            </View>
            <View style={{...styles.col, ...styles.p2}}>
                <View style={{...styles.row}}>
                    <Text style={{...styles.h5}}>Zafacón #{bin.id}</Text>
                </View>
                <View>
                    <Text style={{...styles.h6}} numberOfLines={1}>{bin.location}</Text>
                </View>
                <View>
                    <Text style={{...styles.p}}>Llenado: {bin.fillLevel * 100}%</Text>
                </View>
            </View>
        </View>
    )
}

export default Bin