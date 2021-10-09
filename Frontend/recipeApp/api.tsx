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

export const signup = (username: string, email: string, password: string, name: string, lastName: string): Promise<User | undefined> =>
    Api.post("/api/auth/signup", {
        username,
        email,
        password,
        name,
        lastName
    }).then(res => {
            return res.data;
        }, fail => {
            console.log("fail", fail.response)
            return fail.response.data.message;
        })
        .catch(err => console.log("error", err));

export const logAPI = (): void => {
    console.log("API", Api.defaults.headers.common);
}


export const getAllRecipes = (): Promise<Array<Recipe>> =>
    Api.get("/product/getAllProduct")
        .then(res => {
            console.log("Recipes", res.data);
            console.log("Recipes", res.data);
            console.log(res.data)
            return res.data;
        })

export const getDailyRecipe = (): Promise<Array<Recipe>> =>
    Api.get("/product/getDailyRecipe")
        .then(res => {
            return res.data
        })

export const createRecipe = (recipe: RecipeCreate): Promise<RecipeCreate | undefined> => {
    return Api.post("/product/createProduct", recipe)
        .then(res => {
            return res.data as Recipe;

        }, fail => undefined)
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

export const addToFavoritee = (recipeId: number): Promise<string> =>
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
export const setEmail = (email: string): Promise<boolean> =>
    Api.post(`/users/updateEmail`, {
        email
    }).then(res => {
        return res.data;
    })
export const setPassword = (password: string, repeatPassword: string): Promise<boolean> =>
    Api.post(`/users/updatePassword`, {
        password, repeatPassword
    }).then(res => {
        return res.data;
    })
export const setUsername = (username: string): Promise<boolean> =>
    Api.post(`/users/updateUsername`, {
        username
    }).then(res => {
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

export const getRecipeById = (recipeId: number): Promise<Recipe> =>
    Api.get(`/product/getProduct/${recipeId}`)
        .then(res => {
            return res.data;
        })

export const getRecentlyViewed = (): Promise<Array<Recipe>> =>
    Api.get("/product/getRecentlyViewed")
        .then(res => {
            return res.data;
        })
