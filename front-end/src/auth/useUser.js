import React,{useState,useEffect} from 'react';
import { useToken } from './useToken';

export const useUser = () => {
    const [token] = useToken();

    const getPayloadFromToken = token => {
        const encodedPayload = token.split('.')[1];
        return JSON.parse(atob(encodedPayload));
    }

    const [user, setUser] = useState(() => {
        if (!token) return {};
        return getPayloadFromToken(token);
    }); 

    useEffect(() => {
        if (!token) {
            setUser({});
            console.log('rerender happened')
        } else {
            console.log('ELSE REREDENDER',user)
            setUser(getPayloadFromToken(token));

        }
    }, [token]);

    return user;
}