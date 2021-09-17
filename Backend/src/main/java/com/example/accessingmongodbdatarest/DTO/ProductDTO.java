
package com.example.accessingmongodbdatarest.DTO;

import com.example.accessingmongodbdatarest.Entities.Product;
import com.fasterxml.jackson.annotation.JsonTypeInfo;

import java.sql.Blob;
import java.util.List;

public class ProductDTO {

    private Long id;

    private Long userId;

    private String name;
    private List<String> description;
    private double calories;
    //private String type;                //Sach- oder Dienstleistung
    //private boolean shipable;
    private double protein;
    private double fat;
    private double carbohydrate;
    private int time;
    private boolean isVegan;
    private boolean isVegetarian;
    private boolean hasMeat;

    //Versandsfähig oder nicht
    private String picture;
    //private double valuation;

    public ProductDTO(Product product){
        this.id = product.getId();
        this.userId = product.getUser().getId();
        //this.companyId = product.getCompany().getId();
        this.name = product.getName();
        this.description = product.getDescription();
        this.calories = product.getCalories();
        this.protein = product.getProtein();
        this.fat = product.getFat();
        this.carbohydrate = product.getCarbohydrate();
        this.time = product.getTime();
        this.isVegan = product.isVegan();
        this.isVegetarian = product.isVegetarian();
        this.hasMeat = product.isHasMeat();

/*  this.shipable = product.isShipable();*//*

        this.picture = product.getPicture();
      */
/*  this.valuation = product.getValuation();*/

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getCompanyId() {
        return userId;
    }

    public void setCompanyId(Long userId) {
        this.userId = userId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<String> getDescription() {
        return description;
    }

    public void setDescription(List<String> description) {
        this.description = description;
    }

    public double getCalories() {
        return calories;
    }

    public void setCalories(double calories) {
        this.calories = calories;
    }

    /*public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public boolean isShipable() {
        return shipable;
    }

    public void setShipable(boolean shipable) {
        this.shipable = shipable;
    }*/

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
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

    /*public double getValuation() {
        return valuation;
    }

    public void setValuation(double valuation) {
        this.valuation = valuation;
    }*/
}
