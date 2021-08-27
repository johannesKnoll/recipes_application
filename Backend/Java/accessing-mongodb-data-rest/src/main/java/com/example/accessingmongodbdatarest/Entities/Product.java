package com.example.accessingmongodbdatarest.Entities;



import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.sql.Blob;

@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JsonIgnore
    private Company company;

    private String name;
    private String description;
    private double price;

    private boolean shipable;           //Versandsfähig oder nicht
    @Lob
    private String picture;
    private double valuation;

    public Product(String name, String description, double price,  boolean shipable, String picture, double valuation) {
        //this.company = company;
        this.name = name;
        this.description = description;
        this.price = price;

        this.shipable = shipable;
        this.picture = picture;
        this.valuation = valuation;
    }

    public Product() {
    }

    public Company getCompany() {
        return company;
    }

    public void setCompany(Company company) {
        this.company = company;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
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
