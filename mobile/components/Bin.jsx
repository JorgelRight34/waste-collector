import { Image, Text, View } from "react-native"
import styles from "../styles"

const Bin = ({ bin, style }) => {
    return (
        <View style={{...styles.row, ...styles.bin, ...styles.mb3, ...style}}>
            <View style={{...styles.col, ...styles.p2, width: '100%'}}>
                <View style={{...styles.row, ...styles.borderBottom, ...styles.mb1,}}>
                    <Text style={{...styles.h5}}>Zafacón #{bin.id}</Text>
                </View>
                <View>
                    <Text style={{...styles.h6, ...styles.bold}} numberOfLines={1}>{bin.zone.zone}</Text>
                </View>
                <View>
                    <Text style={{...styles.h6}} numberOfLines={1}>{bin.street}</Text>
                </View>
                <View>
                    <Text style={{...styles.p}}>Llenado: {Math.round(bin.fillLevel * 100, 2)}%</Text>
                </View>
            </View>
        </View>
    )
}

export default Bin