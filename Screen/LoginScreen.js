import React, {useState, createRef} from 'react';
import {
    StyleSheet,
    TextInput,
    View,
    Text,
    ScrollView,
    Image,
    Keyboard,
    TouchableOpacity,
    KeyboardAvoidingView,
} from 'react-native';

import { AsyncStorage } from '@react-native-community/asyns-storage';
import { Loader } from './Components/Loader';
import { data } from 'browserslist';

const LoginScreen = ({navigation}) => {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errortext, setErrortext]  = useState('');

    const passwordInputRef = createRef();

    const handleSubmitPress = () => {
        setErrortext('');
        if (!userEmail) {
            alert('Please enter correct Email.');
            return;
        }
        if(!userPassword) {
            alert('Please enter correct Password.');
            return;
        }
        setLoading(true);
        let dataToSend = {email: userEmail, password: userPassword};
        let formBody = [];
        for (let key in dataToSend) {
            let encodedKey = encodeURIComponent(key);
            let encodedValue = encodeURIComponent(dataToSend[key]);
            formBody.push(encodedKey + '=' + encodedValue);
        }
        formBody = formBody.join('&');

        fetch('http://localhost:3000/api/user/login', {
            method: 'POST',
            body: formBody,
            headers: {
                //Header Definition
                'Content-Type': 'application/x-www-form-url-encoded;charset-UTF-8',
            },
        })
        .then((response) => response.json())
        .then((responseJson) => {
            //Hide Loader
            setLoading(false);
            console.log(responseJson);
            //If server response message same as Data Matched
            if (responseJson.status === 'success') {
                AsyncStorage.setItem('user_id', responseJson.data.email);
                console.log(responseJson.data.email);
                navigation.replace('DrawerNavigationRoutes');
            } else {
                setErrortext(responseJson.msg);
                console.log('Please check your email id or password');
            }
        })
        .catch((error) => {
            //Hide Loader
            setLoading(false);
            console.error(error);
        });
    };

    return(
        
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    mainBody: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#307ecc',
        alignContent: 'center',
    },
    SectionStyle: {
        flexDirection: 'row',
        height: 40,
        marginTop: 20,
        marginLeft: 35,
        marginRight: 35,
        margin: 10,
    },
    buttonStyle: {
        backgroundColor: '#7DE24E',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: "#7DE24E",
        height: 40,
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
        marginBottom: 25,
    },
    buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
    },
    inputStyle: {
        flex: 1,
        color: 'white',
        paddingLeft: 15,
        paddingRight: 15,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#dadae8',
    },
    registerTextStyle: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14,
        alignSelf: 'center',
        padding: 10,
    }
})