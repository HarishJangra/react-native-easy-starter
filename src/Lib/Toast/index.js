import React from 'react'
import Toast from 'react-native-tiny-toast'
import colors from '../../Themes/Colors';

export default function showToast(message, type, duration){
    Toast.show(message , {
        position: -1,
        duration:200,
        textColor: type == 'success' ? 'green' : type == 'error'? 'red' : type == 'info'? 'orange' : "white",
        containerStyle:{
            backgroundColor:colors.blueGrey900,
            borderRadius:0,
            padding:16,
            margin:10,
        },
    })
}


export function showLoading (message =""){
    Toast.showLoading(message, {
        position:0,
        containerStyle:{
          backgroundColor:'transparent'  
        },
        textColor:'cyan',
        maskColor:'rgba(200, 200, 200, 0.5)'
    })

}

export function showErrorToast(message){
    showToast(message , 'error')
}

export function showInfoToast(message){
    showToast(message , 'info')

}