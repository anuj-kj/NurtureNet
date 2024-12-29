import { jwtDecode } from 'jwt-decode';
import { JwtModel } from '../models/auth/JwtModel';

import { getData, postData } from '../api/apiService';
import { RegisterModel } from '../models/auth/RegisterModel';

export const credentialLogin = async (username: string, password: string): Promise<JwtModel> => {
    return await postData('/auth/login', { username, password });
    
};
export const register = async (registerModel: RegisterModel): Promise<JwtModel> => {
    return await postData('/auth/register', registerModel);
    
};
export const googleLogin = async () => {
    const response = await getData('/auth/google-login');
    console.log(response.data);
    return response.data;
};

export const getUserInfo = () => {
    const token =localStorage.getItem('token');//'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'// 
  //  const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'// 
    if (token) {
        try {
            const decodedToken: any = jwtDecode(token);
            return {
                username: decodedToken.sub,
            };
        } catch (error) {
            console.error('Invalid token', error);           
            return null;
        }
    }
    return null;
};

export const signOut = () => {
    localStorage.removeItem('token');
};