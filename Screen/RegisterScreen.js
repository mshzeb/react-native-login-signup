import React, {useState, createRef} from 'react';
import {
    StyleSheet,
    TextInput,
    View,
    Image,
    Text,
    KeyboardAvoidingView,
    Keyboard,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

import Loader from './Components/Loader';

const RegisterScreen = (props) => {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userAge, setUserAge] = useState('');
    const [userAddress, setUserAddress] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorText, setErrorText] = useState('');
    const [isRegistrationSuccess, setIsRegistrationSuccess] = useState(false);
    
    const emailInputRef = createRef();
    const ageInputRef = createRef();
    const addressInputRef = createRef();
    const passwordInputRef = createRef();

    const handleSubmit = () => {
        setErrorText('');
        if (!userName) {
            alert('Please enter Name.');
            return;
        }
        if (!userEmail) {
            alert('Please enter Email.');
            return;
        }
        if (!userAge) {
            alert('Please enter Age.');
            return;
        }
        if (!userAddress) {
            alert('Please enter Address.');
            return;
        }
        if (!userPassword) {
            alert('Please enter Password.');
        }
    }
}

export default RegisterScreen;

const styles = StyleSheet.create({
    SecionStyle: {
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
        borderColor: '#7DE24E',
        height: 40,
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
        marginBottom: 20,
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
    errorTextStyle: {
        color: 'red',
        textAlign: 'center',
        fontSize: 14,
    },
    successTextStyle: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        padding: 30,
    },
});