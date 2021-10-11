import { ImageSourcePropType } from "react-native";

export interface Recipe{
    id: number,
    userId: number,
    public: boolean,
    name: string,
    description: Array<string>,
    calories: number,
    protein: number,
    fat: number,
    carbohydrate: number,
    time: number,
    hasMeat: boolean,
    picture ?: ImageSourcePropType ,
    ingredients: Array<string>,
    compynayId: number,
    vegan: boolean,
    vegetarian: boolean,
    averageRate: number
}