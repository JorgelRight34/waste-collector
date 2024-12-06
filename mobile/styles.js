import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row'
    },
    col: {
        flexDirection: 'column'
    },  
    h1: {
        fontSize: 32,  // Similar to h1
        fontWeight: 'bold',
        marginBottom: 10,
    },
    h2: {
        fontSize: 28,  // Similar to h2
        fontWeight: 'bold',
        marginBottom: 10,
    },
    h3: {
        fontSize: 24,  // Similar to h3
        fontWeight: 'bold',
        marginBottom: 10,
    },
    h4: {
        fontSize: 20,  // Similar to h4
        fontWeight: '600',
        marginBottom: 10,
    },
    h5: {
        fontSize: 18,  // Similar to h5
        fontWeight: '600',
        marginBottom: 10,
    },
    h6: {
        fontSize: 16,  // Similar to h6
        fontWeight: 'normal',
        marginBottom: 10,
    },
    p: {
        fontSize: 13,
        fontWeight: 'normal'
    },
    borderBottom: {
        borderBottomColor: 'gray', 
        borderBottomWidth: 1
    },
    bold: {
        fontWeight: 'bold'
    },
    bin: {
        width: 325,
        borderRadius: 5,
        borderBlockColor: 'black',
        borderWidth: 1
    },
    binImg: {
        width: 100,
        height: 100,
        resizeMode: "contain"
    },
    binImgContainer: {
        width: 50,
        height: 50
    },
    rowCenter: {
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'center', 
    },
    p1: {
        padding: 10
    },
    p2: {
        padding: 20
    },
    p3: {
        padding: 30
    },
    pt3: {
        paddingTop: 30
    },
    pb3: {
        paddingBottom: 30
    },
    msAuto: {
        marginLeft: 'auto'
    },
    mb1: {
        marginBottom: 10
    },
    mb2: {
        marginBottom: 20
    },
    mb3: {
        marginBottom: 30
    },
    me3: {
        marginRight: 30
    },
    mb5: {
        marginBottom: 50
    },
    map: {
        width: '100%',
        height: '90%',
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    primaryBtn: {
        margin: 10, // Add space between buttons
        backgroundColor: '#007BFF', // Button color
        padding: 10,
        width: 300,
        borderRadius: 5,
        alignItems: 'center',
    },
    whiteText: {
        textAlign: 'center',
        width: 200,
        color: '#fff',
        fontSize: 16,
        flexWrap: 'wrap', // Allow text wrapping
    },
    input: {
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 1,
    }
})

export default styles