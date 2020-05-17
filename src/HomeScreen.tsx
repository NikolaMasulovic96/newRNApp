import React from 'react'
import { View, Text, Button, FlatList, Image, StyleSheet } from 'react-native'

const HomeScreen = ({ navigation }) => {
    let items = Array.apply(null, Array(60)).map((v, i) => {
        return { id: i, src: 'http://placehold.it/200x200?text=' + (i + 1) };
      });
    return (
        <View>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Item')}
            />
            <FlatList
                data={items}
                renderItem={({ item }) => (
                    <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
                        <Image style={styles.imageThumbnail} source={{ uri: item.src }} />
                    </View>
                )}
                //Setting the number of column
                numColumns={3}
                keyExtractor={(item, index) => index.toString()}
            />

        </View>
    )
}
const styles = StyleSheet.create({
    MainContainer: {
        justifyContent: 'center',
        flex: 1,
        paddingTop: 30,
    },
    imageThumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
    },
});
export default HomeScreen
