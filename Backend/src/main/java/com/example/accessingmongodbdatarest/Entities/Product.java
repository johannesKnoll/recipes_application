package com.example.accessingmongodbdatarest.Entities;



import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.web.bind.annotation.PathVariable;

import javax.persistence.*;
import java.util.*;
import java.util.ArrayList;

@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JsonIgnore
    private User user;

    private boolean isPublic;

    private String name;
    private ArrayList<String> description;
    private double calories;
    private double protein;
    private double fat;
    private double carbohydrate;
    private int time;
    private boolean isVegan;
    private boolean isVegetarian;
    private boolean hasMeat;
    private ArrayList<Integer> ratelist;
    private ArrayList<String> ingredients; // Contains ingredient and amount, e.g. "200g Kartoffeln"

    private double averageRate;

   /* private boolean shipable;           //Versandsfähig oder nicht*/
    @Lob
    private String picture;

    public Product(User user, boolean isPublic, String name, ArrayList<String> description, double calories, double protein,
                   double fat, double carbohydrate, int time, boolean isVegan, boolean isVegetarian, boolean hasMeat,
                   ArrayList<String> ingredients, String picture) {
        this.user = user;
        this.isPublic = isPublic;
        this.name = name;
        this.description = description;
        this.calories = calories;
        this.protein = protein;
        this.fat = fat;
        this.carbohydrate = carbohydrate;
        this.time = time;
        this.isVegan = isVegan;
        this.isVegetarian = isVegetarian;
        this.hasMeat = hasMeat;
        this.picture = picture;
        this.ratelist = new ArrayList<>();
        this.ingredients = ingredients;
        //ratelist
        averageRate = 0.0;
    }

    public Product() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public boolean isPublic() {
        return isPublic;
    }

    public void setPublic(boolean aPublic) {
        isPublic = aPublic;
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

    public ArrayList<Integer> getRatelist() {
        return ratelist;
    }

    public void setRatelist(ArrayList<Integer> rateslist) {
        this.ratelist = rateslist;
    }

    public double getAverageRate() {
        return averageRate;
    }

    public void addToRate(int actualRate){
        ratelist.add(actualRate);
    }

    public void setAverageRate(double averageRate) {

        this.averageRate = averageRate;
    }
}
