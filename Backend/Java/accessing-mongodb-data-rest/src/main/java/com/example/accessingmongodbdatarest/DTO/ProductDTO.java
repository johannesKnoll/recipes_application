
package com.example.accessingmongodbdatarest.DTO;

import com.example.accessingmongodbdatarest.Entities.Product;
import com.fasterxml.jackson.annotation.JsonTypeInfo;

import java.sql.Blob;

public class ProductDTO {

    private Long id;

    private Long companyId;

    private String name;
    private String description;
    private double calories;
    private String type;                //Sach- oder Dienstleistung
    private boolean shipable;

    //Versandsfähig oder nicht
    private String picture;
    private double valuation;

    public ProductDTO(Product product){
        this.id = product.getId();
        //this.companyId = product.getCompany().getId();
        this.name = product.getName();
        this.description = product.getDescription();
        this.calories = product.getCalories();

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
        return companyId;
    }

    public void setCompanyId(Long companyId) {
        this.companyId = companyId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getCalories() {
        return calories;
    }

    public void setCalories(double calories) {
        this.calories = calories;
    }

    public String getType() {
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
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public double getValuation() {
        return valuation;
    }

    public void setValuation(double valuation) {
        this.valuation = valuation;
    }
}
