export interface Recipe{
    id: number,
    userId: number,
    name: string,
    description: Array<string>,
    calories: number,
    protein: number,
    fat: number,
    carbohydrate: number,
    time: number,
    hasMeat: boolean,
    picture?: string,
    ingredients: Array<string>,
    compynayId: number,
    vegan: boolean,
    vegetarian: boolean,
    averageRate: number
}