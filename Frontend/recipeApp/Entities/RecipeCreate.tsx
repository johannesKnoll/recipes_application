export interface RecipeCreate{
    name: string,
    description: Array<string>,
    calories: number,
    protein: number,
    fat: number,
    carbohydrate: number,
    time: number,
    hasMeat: boolean,
    picture: string,
    ingredients: Array<string>,
    isPublic: boolean,
    isVegan: boolean,
    isVegetarian: boolean
}