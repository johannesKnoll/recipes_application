package com.example.accessingmongodbdatarest.Services;

import com.example.accessingmongodbdatarest.Entities.Product;
import com.example.accessingmongodbdatarest.Entities.User;
import com.example.accessingmongodbdatarest.Repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Blob;
import java.util.*;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    //create operation
    public Product create(Optional<User> user, String name, String description, double calories, double protein,
                          double fat, double carbohydrate, int time, boolean isVegan, boolean isVegetarian, boolean hasMeat,
                          String picture) {
        Product product = new Product(user,name, description, calories, protein,
         fat,  carbohydrate,time,  isVegan,  isVegetarian,  hasMeat,
        picture);
        product.setUser(user);
        return productRepository.save(product);
    }

    //Retieve operation
    public List<Product> getAll(){
        Iterator<Product> source = productRepository.findAll().iterator();
        List<Product> target = new ArrayList<>();
        source.forEachRemaining(target::add);
        return target;
    }

    public List<Product> getAllByUserId(long id){
        Iterator<Product> source = productRepository.findAllByCompany_Id(id).iterator();
        List<Product> target = new ArrayList<>();
        source.forEachRemaining(target::add);
        return target;
    }

    public Product getProductByName(String name){
        return productRepository.findProductByName(name);
    }

    public List<Product> getProductById(long id){
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
}
