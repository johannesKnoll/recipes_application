package com.example.accessingmongodbdatarest.Services;

import ch.qos.logback.core.joran.spi.NoAutoStart;
import com.example.accessingmongodbdatarest.Entities.Product;
import com.example.accessingmongodbdatarest.Entities.User;
import com.example.accessingmongodbdatarest.Repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import java.sql.Blob;
import java.util.*;
import java.util.concurrent.TimeUnit;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;
    List<Product> recentlyViewd =  new ArrayList<>();
    //private String recentlyViewd ="";
    public ProductRepository call(){
        ProductRepository productRepository1 =productRepository;
        return productRepository1;
    }

    //create operation
    public Product create(User user, boolean isPublic, String name, String description, double calories, double protein,
                          double fat, double carbohydrate, int time, boolean isVegan, boolean isVegetarian, boolean hasMeat,
                          String picture) {
        Product product = new Product(user, isPublic, name, description, calories, protein,
                fat, carbohydrate, time, isVegan, isVegetarian, hasMeat,
                picture);
        product.setUser(user);
        return productRepository.save(product);
    }

    //Retieve operation

     List<Product> allRecipes;
    public List<Product> getAll() {
        Iterator<Product> source = productRepository.findAll().iterator();

        List<Product> target = new ArrayList<>();
        source.forEachRemaining(target::add);
        return target;
    }


    public List<Product> getAllPublicRecipes(){
        Iterator<Product> source = productRepository.findAll().iterator();

        List<Product> target = new ArrayList<>();
        source.forEachRemaining(target::add);

        List<Product> allProducts =  target;
        List<Product> allPublicProducts = new ArrayList<>();

        for (Product product : allProducts) {
            if(product.isPublic()){
                allPublicProducts.add(product);
            }
        }
        allRecipes = allPublicProducts;
        return allPublicProducts;
    }
//Vegetarian
    public List<Product> getVegetarianRecipes(){
        Iterator<Product> source = productRepository.findAll().iterator();

        List<Product> target = new ArrayList<>();
        source.forEachRemaining(target::add);

        List<Product> allProducts =  target;
        List<Product> allVegetarianProducts = new ArrayList<>();

        for (Product product : allProducts) {
            if(product.isVegetarian()){
                allVegetarianProducts.add(product);
            }
        }
       // allRecipes = allVegetarianProducts;
        return allVegetarianProducts;
    }

    //Vegan
    public List<Product> getVeganRecipes(){
        Iterator<Product> source = productRepository.findAll().iterator();

        List<Product> target = new ArrayList<>();
        source.forEachRemaining(target::add);

        List<Product> allProducts =  target;
        List<Product> allVeganProducts = new ArrayList<>();

        for (Product product : allProducts) {
            if(product.isVegan()){
                allVeganProducts.add(product);
            }
        }
        // allRecipes = allVegetarianProducts;
        return allVeganProducts;
    }

    public List<Product> getAllByUserId(long id) {
        Iterator<Product> source = productRepository.findAllByUser_Id(id).iterator();
        List<Product> target = new ArrayList<>();
        source.forEachRemaining(target::add);

        return target;
    }

    public Product getProductByName(String name) {
        return productRepository.findProductByName(name);
    }

    public List<Product> getProductById(long id) {
        recentlyViewd.add(productRepository.findById(id));
        getRecentlyViewed();
        return productRepository.findProductById(id);
    }

    //Update operation
    public Product update(String name, String description,
                          double price,
                          boolean shipable, String picture, double valuation) {
        Product product = productRepository.findProductByName(name);
        product.setName(name);
        product.setDescription(description);

        product.setPicture(picture);

        return productRepository.save(product);
    }

    //Delete operation
    public void deleteAll() {
        productRepository.deleteAll();
    }

    public void delete(Long name) {
        Product product = productRepository.findById(name);
        productRepository.delete(product);
    }
    //Get Daily Recipes


   public List<Product> getDailyRecipe() {
       Date date =new Date();
       int actualRecipeDependsOnDate;
       actualRecipeDependsOnDate = date.getDate();
       //System.out.println("Date:" +date.getDay());

       return productRepository.findProductById(actualRecipeDependsOnDate);

   }
   public List<Product> getRecentlyViewed(){
   /*     if(recentlyViewd.size() ==0){
            System.out.println("there is no viewed Receipe yet");

        }else */

          //return recentlyViewd.get(recentlyViewd.size() - 1);
    //   return productRepository.findProductById();
       return recentlyViewd;
   }


}