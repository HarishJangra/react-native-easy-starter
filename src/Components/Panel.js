import React from 'react'
import {View,ActivityIndicator, Text, TouchableNativeFeedback } from 'react-native'
import SlidingUpPanel from 'rn-sliding-up-panel'
import { useRef, useImperativeHandle, forwardRef } from 'react';
import {Container} from '../Components'
import { Button } from 'react-native-paper';

function SlidingPanel (props, ref) {

    const panelRef = useRef()

    useImperativeHandle(ref, () => ({
        show :(toValue, velocity) => {
            console.log('LOG_show');
            
            panelRef.current.show(toValue, velocity)
        },
        hide: () => {
            panelRef.current.hide()
        }
    }));

    return (
            <SlidingUpPanel
                 ref={panelRef}  
                //  showBackdrop={false}
                 draggableRange={{top:300, bottom:0}}             
                 height={300}
                 allowDragging={false}
                 
                 >
                    <Container>
                    <View style={{flexDirection:'row', justifyContent:'flex-end'}}>
                    <Button
                        style={{marginBottom:10}}
                        color={'white'}
                        onPress={()=>panelRef.current.hide()}
                    >
                        OK
                    </Button>
                 </View>
                 <Container style={{padding:20, backgroundColor:'#fafafa'}}>
                    <Text style={{fontSize:18, fontWeight:'bold', color:'black'}}> Do you want to reset your password?  </Text>
                 </Container>

                    </Container>
                 </SlidingUpPanel>
       
    )
}

SlidingPanel = forwardRef(SlidingPanel)

export default SlidingPanel