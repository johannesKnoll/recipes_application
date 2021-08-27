package com.example.accessingmongodbdatarest.Services;

import com.example.accessingmongodbdatarest.DTO.ProductDTO;
import com.example.accessingmongodbdatarest.Entities.Company;
import com.example.accessingmongodbdatarest.Entities.Product;
import com.example.accessingmongodbdatarest.Repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Blob;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;
@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    //create operation
    public Product create(Company company, String name, String description,
                          double price, String type,
                          boolean shipable, String picture, double valuation) {
        Product product = new Product(name,description, price, shipable,picture,valuation);
        product.setCompany(company);
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
        product.setPrice(price);
        product.setShipable(shipable);
        product.setPicture(picture);
        product.setValuation(valuation);
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
