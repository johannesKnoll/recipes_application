package com.example.accessingmongodbdatarest.Controller;

import com.example.accessingmongodbdatarest.DTO.ProductDTO;
import com.example.accessingmongodbdatarest.Entities.Product;
import com.example.accessingmongodbdatarest.Entities.User;
import com.example.accessingmongodbdatarest.Repositories.ProductRepository;
import com.example.accessingmongodbdatarest.Repositories.UserRepository;
import com.example.accessingmongodbdatarest.Security.services.UserDetailsImpl;
import com.example.accessingmongodbdatarest.Services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.sql.Blob;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;


@RestController
@RequestMapping("/product")
public class ProductController {
    @Autowired
    private ProductService productService;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private UserRepository userRepository;

    /*@Autowired
    private CompanyRepository companyRepository;*/

    private User getAuthorizedUser() {
        UserDetailsImpl userDetails = (UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String username = userDetails.getUsername();

        return userRepository.findByUsername(username);
    }

    //@PreAuthorize("hasRole('ROLE_ADMIN')")
    @PostMapping(value = "/createProduct", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Product> create(@RequestBody Product product) {
        User user = getAuthorizedUser();
        Product product1 = new Product(user, product.isPublic(),  product.getName(), product.getDescription(),product.getCalories(),  product.getProtein(),
                product.getFat(), product.getCarbohydrate(),  product.getTime(), product.isVegan(),  product.isVegetarian(), product.isHasMeat(),
                product.getPicture() );
        userRepository.save(user);
        user.addToRecipes(product1);
        productRepository.save(product1);
        return ResponseEntity.ok(product1);

   /*     if(product1.isPublic()){9
            user.addToRecipes(product1);

            product1.setUser(user);
  //          productRepository.save(product1);

            return ResponseEntity.ok(product1);
        }else{
            user.addToRecipes(product1);


            return ResponseEntity.ok(product1);
        }*/


    }

    @RequestMapping("/getProduct")
    public Product getProduct(@RequestParam String name) {
        return productService.getProductByName(name);
    }

    @RequestMapping("/getProductById/{productId}")
    public List<ProductDTO> getProductById(@PathVariable("productId") long id) {
        return productService.getProductById(id).stream().map(ProductDTO::new).collect(Collectors.toList());
    }


    @RequestMapping("/getAllProduct")
    public List<ProductDTO> getAll(){
        return productService.getAll().stream().map(ProductDTO::new).collect(Collectors.toList());
    }

    @GetMapping("/getAllPublicRecipes")
    public Set<Product> getAllPublicRecipes(){
        List<Product> allProducts =  productService.getAll();
        Set<Product> allPublicProducts = new HashSet<Product>();

        for (Product product : allProducts) {
            if(product.isPublic()){
                allPublicProducts.add(product);
            }
        }
        return allPublicProducts;
    }

    @GetMapping("/getAllByCompanyId/{companyId}")
    public List<ProductDTO> getAllByCompanyId(@PathVariable("companyId") long id){
        return productService.getAllByUserId(id).stream().map(ProductDTO::new).collect(Collectors.toList());
    }

    @RequestMapping("/update")
    public String update(@RequestParam String name, @RequestParam String description,
                         @RequestParam double price,
                         @RequestParam boolean shipable, @RequestParam String picture, @RequestParam double valuation) {
        Product product = productService.update(name, description, price, shipable, picture, valuation);
        return product.toString();
    }
    @RequestMapping("/deleteProduct/{productId}")
    public String delete(@PathVariable("productId") Long id) {
        productService.delete(id);
        return "Product Deleted ";
    }
    @RequestMapping ("/deleteAllProduct")
    public String deleteAll() {
       productService.deleteAll();
        return "Deleted all records products";
    }

}
