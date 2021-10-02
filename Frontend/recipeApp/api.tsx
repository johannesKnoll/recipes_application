import axios from 'axios';
import { User } from './Entities/User';
import { Recipe } from './Entities/Recipe';
import { RecipeCreate } from './Entities/RecipeCreate';

const instance = axios.create({
    baseURL: "http://localhost:8080",
});

const Api = instance;

export const login = (username: string, password: string): Promise<User | undefined> =>
    Api.post("/api/auth/signin", {
        username,
        password
    }).then(res => {
        console.log("Response of Login: ", res);
        //if (res.data.token) {
        // login successful, save session token
        localStorage.setItem("user", JSON.stringify(res.data));
        const user = {
            id: res.data.id,
            roles: res.data.roles,
            token: res.data.accessToken,
            username: res.data.username
        } as User;
        Api.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
         console.log("In Login", user);
        return user;
        //}
        return undefined;
    }, fail => undefined)
        .catch(err => undefined);


export const getAllRecipes = (): Promise<Array<Recipe>> => 
    Api.get("/product/getAllProduct")
        .then(res => {
            console.log("Recipes", res.data);
            return res.data;
        })

export const getDailyRecipe = (): Promise<Recipe> =>
    Api.get("/product/getDailyRecipe")
        .then(res => {
            return res.data
        })

export const createRecipe = (recipe: RecipeCreate): Promise<RecipeCreate | undefined> =>
    Api.post("/product/createProduct", recipe)
        .then(res => {
            return res.data
        })
