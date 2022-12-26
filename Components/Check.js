import React from 'react';
import {View, StyleSheet} from 'react-native';
import Checkbox from 'expo-checkbox';
const Check = ({ischecked,setIsChecked}) => {
    return (
 
        <Checkbox
        value={ischecked}
        onValueChange={setIsChecked}
        color={ischecked?"gray":""}
        style={styles.check}
        />
    );
}

const styles = StyleSheet.create({

    check:{
        margin:10,
    }
})

export default Check;
