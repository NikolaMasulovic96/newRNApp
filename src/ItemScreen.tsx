import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';


const ItemScreen: React.FC<{}> = ({ route, navigation }) => {
    const { item } = route.params
    let items = [
        { id: 1, name: "Air pods", price: "250$", description: "AirPods Pro are sweat and water resistant for non-water sports and exercise. AirPods Pro were tested under controlled laboratory conditions, and have a rating of IPX4 under IEC standard 60529.", src: "" },
        { id: 1, name: "Air pods", price: "250$", description: "AirPods Pro are sweat and water resistant for non-water sports and exercise. AirPods Pro were tested under controlled laboratory conditions, and have a rating of IPX4 under IEC standard 60529.", src: "https://m.gigatron.rs/m.html/2019/novembar/airpodspro/images/img-2.jpg" },
        { id: 2, name: "Beats Solo 3", price: "150$", description: "Headphones from beats", src: "https://images.askmen.com/1080x540/2019/09/18-102348-get_170_off_beats_solo3_wireless_on_ear_headphones.jpg" },
        { id: 3, name: "Sasung s10", price: "1020$", description: "best smart from from samsung", src: "https://media.secure-mobiles.com/idmobile/pdp-phones/samsung/Samsung-s10/S10/samsungs10-camera-v2.jpg" },
        { id: 4, name: "Iphone X", price: "1200$", description: "Iphone without home button", src: "https://static.mondo.rs/Picture/651420/jpeg/iPhone-X-2.jpg" },
        { id: 5, name: "MacBook Pro", price: "2450$", description: "Best laptop in the world", src: "https://s.yimg.com/ny/api/res/1.2/9PzZdbWTA0ahvTp0uQPHRA--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAwO2lsPXBsYW5l/http://media.zenfs.com/en_US/News/BGR_News/macbook-pro-5.png.cf.jpg" },
        { id: 6, name: "Iphone se2", price: "700$", description: "Iphone without home button", src: "https://cdn.wccftech.com/wp-content/uploads/2019/12/iPhone-SE-2-concept.jpg" },
        { id: 7, name: "Xiaomi Band 4", price: "30$", description: "Iphone without home button", src: "https://lh3.googleusercontent.com/proxy/BkdJHK3j4JcDnCClKystsTh-RTeBbsuUt7_GY5kMoTAYzMafY9WlzSzrDfIws6nnGJtD8miJc1I31eXcmVX8FDP2t03adJR1fBvzHaSgV4LVyET9Ys1a7ypRaclCwNipJ7e3ioSVVHjrs0LYjbUxOahp8KKsnO8OSk0Ia5hsA3oK7326Eyu_Wg" },
        { id: 8, name: "Iphone X", price: "1200$", description: "Iphone without home button", src: "https://static.mondo.rs/Picture/651420/jpeg/iPhone-X-2.jpg" },
        { id: 9, name: "Iphone X", price: "1200$", description: "Iphone without home button", src: "https://static.mondo.rs/Picture/651420/jpeg/iPhone-X-2.jpg" },
    ]
    navigation.setOptions({ title: item.name })
    const screenWidth = Math.round(Dimensions.get('window').width);


    return (
        <View style={styles.container}>
            <View style={styles.sliderContainer}>
                <FlatList
                    data={items}
                    horizontal={true}
                    renderItem={({ item }) => (
                        <Image
                            source={{
                                uri: item.src
                            }}
                            style={styles.itemImage}
                        />
                    )}
                ></FlatList>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.titleText}>{item.name}</Text>
                <Text style={styles.infoText}>{item.description} </Text>
                <Text style={styles.titleText}>{item.price}</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        top: 10
    },
    infoContainer: {
        width: '100%',
        height: '35%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: '#2E2F33',
        top: 100
    },
    sliderContainer: {
        height: '50%'
    },
    titleText: {
        fontSize: 34,
        fontWeight: "bold",
        color: "white",
        padding: 5
    },
    infoText: {
        fontSize: 16,
        color: "white",
        padding: 7
    },
    itemImage: {
        width: 150,
        height: 300,
        marginRight: 10,
        borderColor: 'white',
        borderWidth: 2
    }
});
export default ItemScreen;

