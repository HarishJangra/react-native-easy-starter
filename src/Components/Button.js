import React from 'react'
import {Button} from 'react-native-paper'

export default ({label, color, style, mode,  zeroMargin, onPress, loading ,contentStyle, ...other}) => {    
    return(
        <Button
            style={[{ marginTop: zeroMargin ? 0 : 20 } , style]}
            loading={loading}
            mode ={mode || 'contained'}
            contentStyle={{ padding:8, ...contentStyle }}
            color={color}
            onPress={!loading ? onPress : null}
            {...other}
        >
            {label}
        </Button>
    )
}

