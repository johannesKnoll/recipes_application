package com.example.accessingmongodbdatarest.Payload.Request;

import java.util.ArrayList;

public class NewRecipeRequest {
    private String name;
    private ArrayList<String> description;
    private double calories;
    private double protein;
    private double fat;
    private double carbohydrate;
    private int time;
    private boolean hasMeat;
    private String picture;
    private ArrayList<String> ingredients;
    private boolean isPublic;
    private boolean isVegan;
    private boolean isVegetarian;

    public NewRecipeRequest(String name, ArrayList<String> description, double calories, double protein, double fat, double carbohydrate, int time, boolean hasMeat, String picture, ArrayList<String> ingredients, boolean isPublic, boolean isVegan, boolean isVegetarian) {
        this.name = name;
        this.description = description;
        this.calories = calories;
        this.protein = protein;
        this.fat = fat;
        this.carbohydrate = carbohydrate;
        this.time = time;
        this.hasMeat = hasMeat;
        this.picture = picture;
        this.ingredients = ingredients;
        this.isPublic = isPublic;
        this.isVegan = isVegan;
        this.isVegetarian = isVegetarian;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public ArrayList<String> getDescription() {
        return description;
    }

    public void setDescription(ArrayList<String> description) {
        this.description = description;
    }

    public double getCalories() {
        return calories;
    }

    public void setCalories(double calories) {
        this.calories = calories;
    }

    public double getProtein() {
        return protein;
    }

    public void setProtein(double protein) {
        this.protein = protein;
    }

    public double getFat() {
        return fat;
    }

    public void setFat(double fat) {
        this.fat = fat;
    }

    public double getCarbohydrate() {
        return carbohydrate;
    }

    public void setCarbohydrate(double carbohydrate) {
        this.carbohydrate = carbohydrate;
    }

    public int getTime() {
        return time;
    }

    public void setTime(int time) {
        this.time = time;
    }

    public boolean isHasMeat() {
        return hasMeat;
    }

    public void setHasMeat(boolean hasMeat) {
        this.hasMeat = hasMeat;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public ArrayList<String> getIngredients() {
        return ingredients;
    }

    public void setIngredients(ArrayList<String> ingredients) {
        this.ingredients = ingredients;
    }

    public boolean isPublic() {
        return isPublic;
    }

    public void setPublic(boolean aPublic) {
        isPublic = aPublic;
    }

    public boolean isVegan() {
        return isVegan;
    }

    public void setVegan(boolean vegan) {
        isVegan = vegan;
    }

    public boolean isVegetarian() {
        return isVegetarian;
    }

    public void setVegetarian(boolean vegetarian) {
        isVegetarian = vegetarian;
    }
}
