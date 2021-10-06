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
            console.log("Recipes", res.data);
            console.log(res.data)
            return res.data;
        })

export const getDailyRecipe = (): Promise<Recipe> =>
    Api.get("/product/getDailyRecipe")
        .then(res => {
            return res.data
        })

export const createRecipe = (recipe: RecipeCreate): Promise<RecipeCreate | undefined> =>{
return  Api.post("/product/createProduct", recipe)
        .then(res => {
            return res.data as Recipe;
            
        },fail => undefined)
        .catch(err => undefined);
        }


export const getVeganRecipes = (): Promise<Array<Recipe>> =>
    Api.get("/product/getVeganRecipes")
        .then(res => {
            return res.data
        })


export const getVegetarianRecipes = (): Promise<Array<Recipe>> =>
    Api.get("/product/getVegetarianRecipes")
        .then(res => {
            return res.data
        })


export const getMeatRecipes = (): Promise<Array<Recipe>> =>
    Api.get("/product/getMeatRecipes")
        .then(res => {
            return res.data
        })

export const addToFavorite = (recipeId: number): Promise<string> => 
    Api.post(`/users/addToFavorite/${recipeId}`)
        .then(res => {
            return res.data;
        })

export const getFavoriteRecipes = (): Promise<Array<Recipe>> =>
    Api.get("/users/getAllFavorites")
        .then(res => {
            return res.data;
        })

export const checkIfFavoriteListContainsRecipe = (recipeId: number): Promise<boolean> =>
    Api.get(`/users/checkIfFavoriteListContainsRecipe/${recipeId}`)
        .then(res => {
            return res.data;
        })

export const getAllRecipesFromUser = (): Promise<Array<Recipe>> =>
    Api.get("/getAllRecipes")
        .then(res => {
            return res.data;
        })

export const rateRecipe = (recipeId: number, rating: number): Promise<string> =>
    Api.post(`/product/rateProduct/${recipeId}`, {
        rating
    })
        .then(res => {
            return res.data;
        })