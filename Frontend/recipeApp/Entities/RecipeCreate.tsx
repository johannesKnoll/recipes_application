export interface RecipeCreate{
    name: string,
    description: Array<string>,
    calories: number,
    protein: number,
    fat: number,
    carbohydrate: number,
    time: number,
    hasMeat: boolean,
    picture?: string,
    public: boolean,
    vegan: boolean,
    vegetarian: boolean,
    // ingredients: Array<string>,
    
    
    
}


   
    