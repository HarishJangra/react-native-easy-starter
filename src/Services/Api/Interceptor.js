import {getLoginCredentials, setLoginCredentials} from '../Keychain'
import { URIS } from './index';

export default (api)  => {    
    api.axiosInstance.interceptors.response.use(
        (response)=> {      
            return response
        },

        async (error) => {
            let originalRequest =  error.config
            console.log('LOG_goterror',originalRequest);
            
            if(error.response && error.response.status == 401 && !originalRequest._retry && !originalRequest.headers._retry) {
                console.log('LOG_status401_error',  '-> refreshing now '); 
                originalRequest._retry = true
                //get refresh token
                const credentials = await getLoginCredentials();
                const {refresh_token} = credentials
                // api call for access token using refresh token

                return new Promise(async (resolve, reject)=> {
                    const response =  await api.post(URIS.REFRESH , {refresh_token}, {headers:{'_retry':true}})
                    //store access_token and data    
                    if(response.ok && response.status == 200){
                        api.setHeader("Authorization", "Bearer " + response.data.access_token);        
                        originalRequest.headers['Authorization'] = 'Bearer '+response.data.access_token                
                        await setLoginCredentials(
                             JSON.stringify(response.data)
                        );
                        resolve(api.axiosInstance(originalRequest))
                    }else {
                        return Promise.resolve(error)
                    }                
    
                })

            }else {
                return Promise.resolve(error)
            }


        }
    )
}