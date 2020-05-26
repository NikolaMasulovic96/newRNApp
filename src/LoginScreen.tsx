import React, { useState } from 'react'
import { View, Text, ImageBackground, StyleSheet, Button, Image } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import authService from './services/userService'
// import { useAsync } from 'react-use'

interface IUser {
    username: string
    password: string
}

const LoginScreen = ({ navigation }) => {

    const [state, setState] = useState<IUser>({
        username: '',
        password: ''
    })

    const handleUsername = (username: string) => {
        setState({
            ...state,
            username: username
        })
    }
    const handlePassword = (password: string) => {
        setState({
            ...state,
            password: password
        })
    }
    const login = async () => {
        const user = {
            username: state.username,
            password: state.password
        }
         const token  = await authService.login(user)
        alert('token: ' + token)

        // () => navigation.navigate('Home')
    }

    return (
        <ImageBackground style={styles.backgroundContainer} source={{ uri: "https://northdelawhere.happeningmag.com/wp-content/uploads/Sleep-Under-the-Stars.jpeg" }}>
            <View style={styles.loginContainer}>
                <Image style={styles.logoImage} source={{ uri: "https://cdn0.iconfinder.com/data/icons/flat-designed-circle-icon-2/1000/coffee.png" }}></Image>
                <TextInput style={styles.input}
                    placeholder={"Username"}
                    placeholderTextColor={"white"}
                    underlineColorAndroid={"white"}
                    onChangeText={handleUsername}
                ></TextInput>
                <TextInput style={styles.input}
                    placeholder={"Password"}
                    placeholderTextColor={"white"}
                    underlineColorAndroid={"white"}
                    secureTextEntry={true}
                    onChangeText={handlePassword}
                ></TextInput>
                <Button
                    title="Login"
                    onPress={login}
                />
            </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    backgroundContainer: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center'
    },
    loginContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '50%',
        width: '70%',
        backgroundColor: 'rgba(52, 52, 52, 0.4)'
    },
    input: {
        width: '90%',
        color: 'white'
    },
    logoImage: {
        height: 70,
        width: 70
    }
});
export default LoginScreen