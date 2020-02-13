import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Overlay } from 'react-native-elements';

const Modal= (prop:any)=>{
    const {isVisible, setIsVisible, children} = prop;
    const closeModal = () => setIsVisible(false);

    return(
        <Overlay
            isVisible={isVisible}
            windowBackgroundColor="rgba(0,0,0,.5)"
            overlayBackgroundColor="transparent"
            overlayStyle={styles.overlay}
            onBackdropPress={closeModal}
        >
            {children}
        </Overlay>
    );
}

const styles = StyleSheet.create({
    overlay:{
        height:"auto",
        width:"90%",
        backgroundColor: "white",
        
    },
});

export default Modal;