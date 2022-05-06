import axios from 'axios';
import { getErrorMessage } from '../helper/helper';
import { LOGIN, LOGIN_FAILED, LOGIN_SUCCESS } from './redux-enum';

export const login = (email: string, password: string) => async (dispatch: any) => {
    const params = new URLSearchParams();

    params.append('username', email.trim());
    params.append('password', password);
    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    };
    try {
        dispatch({ type: LOGIN });
        const response = await axios.post(`${process.env.REACT_APP_BACKEND}`, params, config);

        dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    } catch (error: any) {
        dispatch({ type: LOGIN_FAILED, payload: getErrorMessage(error) });
    }
};
