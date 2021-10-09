package com.example.accessingmongodbdatarest.Controller;

import com.example.accessingmongodbdatarest.DTO.ProductDTO;
import com.example.accessingmongodbdatarest.Entities.Product;
import com.example.accessingmongodbdatarest.Entities.User;
import com.example.accessingmongodbdatarest.Payload.Request.NewRecipeRequest;
import com.example.accessingmongodbdatarest.Payload.Request.RatingRequest;
import com.example.accessingmongodbdatarest.Repositories.ProductRepository;
import com.example.accessingmongodbdatarest.Repositories.UserRepository;
import com.example.accessingmongodbdatarest.Security.services.UserDetailsImpl;
import com.example.accessingmongodbdatarest.Services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.*;
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


    private User getAuthorizedUser() {
        UserDetailsImpl userDetails = (UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String username = userDetails.getUsername();

        return userRepository.findByUsername(username);
    }

    //@PreAuthorize("hasRole('ROLE_ADMIN')")
    @PostMapping(value = "/createProduct", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Product> create(@RequestBody NewRecipeRequest product, @AuthenticationPrincipal UserDetailsImpl userDetailsImpl) {
        User user = userRepository.findById(userDetailsImpl.getId()).orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Keinen User gefunden"));
        Product product1 = new Product(user, product.isPublic(),  product.getName(), product.getDescription(),product.getCalories(),  product.getProtein(),
                product.getFat(), product.getCarbohydrate(),  product.getTime(), product.isVegan(),  product.isVegetarian(), product.isHasMeat(),
                product.getIngredients(), product.getPicture() );
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

    @PostMapping(value = "/rateProduct/{productId}", consumes = MediaType.APPLICATION_JSON_VALUE)
    public String addRating(@PathVariable("productId") long productId , @RequestBody RatingRequest ratingRequest){
        Product productRate = productRepository.findById(productId);
        productRate.addToRate(ratingRequest.getRating());
        double rateing = 0;
        ArrayList<Integer> actualProductRate = productRate.getRatelist();
        double j =0;
        for (Integer i :actualProductRate) {
            j = j + i;
        }
        rateing = j/ actualProductRate.size();
        System.out.println(rateing);
        //productRate.setRatelist(ratingRequest);
        productRate.setAverageRate(rateing);
        productRepository.save(productRate);

        return "Thank you for your rating :)";
    }



    @RequestMapping("/getProduct/{productId}")
    public Product getProduct(@AuthenticationPrincipal UserDetailsImpl userDetailsImpl, @PathVariable("productId") long id) {
       // productRepository.save(productService.getProductById(id));
        User user = userRepository.findById(userDetailsImpl.getId()).orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Keinen User gefunden"));
        return productService.getProductById(user, id);
    }

    /*@RequestMapping("/getProductById/{productId}")
    public List<ProductDTO> getProductById(@PathVariable("productId") long id) {

        return productService.getProducts(id).stream().map(ProductDTO::new).collect(Collectors.toList());
    }*/


    @RequestMapping("/getAllProduct")
    public List<ProductDTO> getAll(){
        return productService.getAll().stream().map(ProductDTO::new).collect(Collectors.toList());
    }

    @GetMapping("/getAllPublicRecipes")
    public List<Product> getAllPublicRecipes(){
        List<Product> allPublicProducts = productService.getAllPublicRecipes();
        return allPublicProducts;
    }

    @GetMapping("/getVegetarianRecipes")
    public List<ProductDTO> getVegetarianRecipes(){
        List<ProductDTO> allVegetarianRecipes = productService.getVegetarianRecipes().stream().map(ProductDTO::new).collect(Collectors.toList());
        return allVegetarianRecipes;
    }

    @GetMapping("/getVeganRecipes")
    public List<ProductDTO> getVeganRecipes(){
        List<ProductDTO> allVeganRecipes = productService.getVeganRecipes().stream().map(ProductDTO::new).collect(Collectors.toList());
        return allVeganRecipes;
    }

    @GetMapping("/getMeatRecipes")
    public List<ProductDTO> getMeatRecipes(){
        List<ProductDTO> allMeatRecipes = productService.getMeatRecipes().stream().map(ProductDTO::new).collect(Collectors.toList());
        return allMeatRecipes;
    }


    /*@GetMapping("/getAllByCompanyId/{companyId}")
    public List<ProductDTO> getAllByCompanyId(@PathVariable("companyId") long id){
        return productService.getAllByUserId(id).stream().map(ProductDTO::new).collect(Collectors.toList());
    }*/

    @RequestMapping("/update")
    public String update(@RequestParam String name, @RequestParam ArrayList<String> description,
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

    @GetMapping("/getDailyRecipe")
    public List<ProductDTO> getDailyRecipe() {
        return productService.getDailyRecipe().stream().map(ProductDTO::new).collect(Collectors.toList());
    }


    @GetMapping("/getRecentlyViewed")
    public List<ProductDTO> getRecebtlyViewed(@AuthenticationPrincipal UserDetailsImpl userDetailsImpl) {
       // return productService.getRecentlyViewed().stream().map(ProductDTO::new).collect(Collectors.toList());
        User user = userRepository.findById(userDetailsImpl.getId()).orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Keinen User gefunden"));
        return user.getRecentylyViewed().stream().map(ProductDTO::new).collect(Collectors.toList());
    }
}
