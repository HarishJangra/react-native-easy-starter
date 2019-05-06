import React from 'react'
import Toast from 'react-native-tiny-toast'

export default function showToast(message, type, duration){
    Toast.show(message , {
        position: -1,
        duration:200,
        containerStyle:{
            backgroundColor: type == 'success' ? 'green' : type == 'error'? 'rgba(200,0,0,0.4)' : type == 'info'? 'orange' : "black",
            padding:8,
            margin:1,
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