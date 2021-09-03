package com.example.accessingmongodbdatarest.Repositories;


import com.example.accessingmongodbdatarest.Entities.Product;
import org.springframework.data.repository.CrudRepository;

import java.util.ArrayList;
import java.util.List;

public interface ProductRepository extends CrudRepository<Product, String > {
    public Product findProductByName(String name);

    public List<Product> findProductById(long id);

    public Product findById(long id);

    public List<Product> findAllByUser_Id(long userId);

    //public ArrayList<Product> findAllDailyRecipe();

}
