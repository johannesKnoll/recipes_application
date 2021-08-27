package com.example.accessingmongodbdatarest.Repositories;

import com.example.accessingmongodbdatarest.DTO.ProductDTO;
import com.example.accessingmongodbdatarest.Entities.Product;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ProductRepository extends CrudRepository<Product, String > {
    public Product findProductByName(String name);

    public List<Product> findProductById(long id);

    public Product findById(long id);

    public List<Product> findAllByCompany_Id(long companyId);
}
