import React from 'react'
import { View, Text, Button, FlatList, Image, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen = ({ navigation }) => {
    let items = [
        { id: 1,name:"Air pods", price:"250$", description:"AirPods Pro are sweat and water resistant for non-water sports and exercise. AirPods Pro were tested under controlled laboratory conditions, and have a rating of IPX4 under IEC standard 60529.", src: "https://m.gigatron.rs/m.html/2019/novembar/airpodspro/images/img-2.jpg" },
        { id: 2,name:"Beats Solo 3", price:"150$", description:"Headphones from beats", src: "https://images.askmen.com/1080x540/2019/09/18-102348-get_170_off_beats_solo3_wireless_on_ear_headphones.jpg" },
        { id: 3,name:"Sasung s10", price:"1020$", description:"best smart from from samsung", src: "https://media.secure-mobiles.com/idmobile/pdp-phones/samsung/Samsung-s10/S10/samsungs10-camera-v2.jpg" },
        { id: 4,name:"Iphone X", price:"1200$", description:"Iphone without home button" ,src: "https://static.mondo.rs/Picture/651420/jpeg/iPhone-X-2.jpg" },
        { id: 5,name:"MacBook Pro", price:"2450$", description:"Best laptop in the world" ,src: "https://s.yimg.com/ny/api/res/1.2/9PzZdbWTA0ahvTp0uQPHRA--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAwO2lsPXBsYW5l/http://media.zenfs.com/en_US/News/BGR_News/macbook-pro-5.png.cf.jpg" },
        { id: 6,name:"Iphone se2", price:"700$", description:"Iphone without home button" ,src: "https://cdn.wccftech.com/wp-content/uploads/2019/12/iPhone-SE-2-concept.jpg" },
        { id: 7,name:"Xiaomi Band 4", price:"30$", description:"Iphone without home button" ,src: "https://lh3.googleusercontent.com/proxy/BkdJHK3j4JcDnCClKystsTh-RTeBbsuUt7_GY5kMoTAYzMafY9WlzSzrDfIws6nnGJtD8miJc1I31eXcmVX8FDP2t03adJR1fBvzHaSgV4LVyET9Ys1a7ypRaclCwNipJ7e3ioSVVHjrs0LYjbUxOahp8KKsnO8OSk0Ia5hsA3oK7326Eyu_Wg" },
        { id: 8,name:"Iphone X", price:"1200$", description:"Iphone without home button" ,src: "https://static.mondo.rs/Picture/651420/jpeg/iPhone-X-2.jpg" },
        { id: 9,name:"Iphone X", price:"1200$", description:"Iphone without home button" ,src: "https://static.mondo.rs/Picture/651420/jpeg/iPhone-X-2.jpg" },
    ]
    return (
        <View style={styles.MainContainer}>
            <FlatList
                data={items}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <TouchableOpacity onPress={() => navigation.navigate('Item',{item})}>
                            <Image style={styles.imageThumbnail} source={{ uri: item.src }} />
                            <Text style={styles.titleText}>{item.name}</Text>
                            <View style={styles.buyButton}>
                                <Text style={styles.infoText}>View</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}
                //Setting the number of column
                numColumns={2}
                keyExtractor={(item, index) => index.toString()}
            />   
        </View>
    )
}
const styles = StyleSheet.create({
    MainContainer: {
        justifyContent: 'center',
        flex: 1,
        paddingTop: 10,
        backgroundColor:'black'
    },
    buyButton: {
        width:60,
        height: 30,
        borderRadius:20,
        borderColor:"white",
        backgroundColor: '#2E2F33',
        borderWidth:1,
        marginLeft: "auto",
        marginRight: "auto",
      },
      titleText:{
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
        padding: 5,
        marginLeft: "auto",
        marginRight: "auto",
      },
      infoText:{
        fontSize: 13,
        color: "white",
        padding:7,
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "auto",
        marginTop: "auto"
      },
    imageThumbnail:{
        width:90,
        height: 70,
        marginLeft: "auto",
        marginRight: "auto",
        top:7
    },
    item:{
        flex: 1,
        flexDirection: 'column',
        margin: 1,
        marginLeft:5,
        marginRight:5,
        marginBottom:5,
        width:"40%",
        borderRadius:20,
        height: 150 ,
        backgroundColor:"#313332"
    }
});
export default HomeScreen
