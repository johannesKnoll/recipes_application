import axios from 'axios';
import { User } from './Entities/User';

const instance = axios.create({
    baseURL: "http://localhost:8080",
});

const Api = instance;

export const login = (username: string, password: string, remember: boolean): Promise<User | undefined> => 
    Api.post("/api/auth/signin", {
        username,
        password
    }).then(res => {
        //if (res.data.token) {
            // login successful, save session token
            localStorage.setItem("user", JSON.stringify(res.data));
            Api.defaults.headers.common['Authorization'] = `Bearer ${res.data.accessToken}`;
            const user = {
                id: res.data.id,
                roles: res.data.roles,
                token: res.data.token,
                username: res.data.username
            } as User;
            // console.log(Api.defaults);
            return user;
        //}
            return undefined;
        }, fail => undefined)
        .catch(err => undefined);