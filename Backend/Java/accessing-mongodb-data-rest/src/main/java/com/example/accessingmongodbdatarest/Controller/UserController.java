package com.example.accessingmongodbdatarest.Controller;

import com.example.accessingmongodbdatarest.DTO.UserDTO;
import com.example.accessingmongodbdatarest.Entities.Product;
import com.example.accessingmongodbdatarest.Entities.User;
import com.example.accessingmongodbdatarest.Repositories.ProductRepository;
import com.example.accessingmongodbdatarest.Repositories.UserRepository;
import com.example.accessingmongodbdatarest.Security.services.UserDetailsImpl;
import com.example.accessingmongodbdatarest.Services.ProductService;
import com.example.accessingmongodbdatarest.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private ProductService productService;
    /*
    @Autowired
    private UserService userService;


    @RequestMapping("/create")
    public String create(@RequestParam String username,@RequestParam String password, @RequestParam String email) {
        User user = userService.create(username, password, email);
        return user.toString();
    }

    @RequestMapping("/get")
    public User getPerson(@RequestParam String username) {
        return userService.getByFirstName(username);
    }
    @RequestMapping("/getAll")
    public List<User> getAll(){
        return userService.getAll();
    }
    @RequestMapping("/update")
    public String update(@RequestParam String username) {
        User user = userService.update(username);
        return user.toString();
    }
    @RequestMapping("/delete")
    public String delete(@RequestParam String username) {
        userService.delete(username);
        return "Deleted "+username;
    }
    @RequestMapping ("/deleteAll")
    public String deleteAll() {
        userService.deleteAll();
        return "Deleted all records";
    }*/
    private User getAuthorizedUser() {
       UserDetailsImpl userDetails = (UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
       String username = userDetails.getUsername();
       return userRepository.findByUsername(username);
    }

    @RequestMapping("/addToFavorite/{recipeId}")
    public String addToFavorite(@PathVariable("recipeId")long id){
        User user = getAuthorizedUser();
        Product productToAdd = productRepository.findById(id);
        user.addToFavorite(productToAdd);
        userRepository.save(user);

        return "Das Rezept wurde erfolgreich in die Favoriteliste hinzugefügt. Guten Apptitet;)";
    }

    @GetMapping("/getAllFavorites")
    public Set<Product> getAllFavoritesByUserId(){
        User user = getAuthorizedUser();
        return user.getFavoriteList();
    }

    @GetMapping("/getAllRecipes")
    public List<Product> getAllRecipes(){
        User user = getAuthorizedUser();
        long userId = user.getId();
        List<Product> allProducts = productService.getAllByUserId(userId);
        return allProducts;
    }

    @GetMapping("/getLoggedInUser")
    public UserDTO getLoggedInUser(){
        return userService.getLoggedInUser();
    }

}
