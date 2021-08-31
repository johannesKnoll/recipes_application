package com.example.accessingmongodbdatarest.Entities;


import javax.persistence.*;
import javax.transaction.Transactional;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotBlank
    @Size(max = 20)
    private String username;

    @NotBlank
    @Size(max = 20)
    @Email
    private String email;

    @NotBlank
    //@Size(min = 8, max = 20)
    private String password;

    @OneToMany
    private List<Product> recipes;

    @NotBlank
    @Size(max = 20)
    private String name;

    @NotBlank
    @Size(max = 20)
    private String lastName;

    @OneToMany
    private Set<Product> favoriteList = new HashSet<>();

    public User(String username, String email, String password, String name, String lastName) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.name = name;
        this.lastName = lastName;
    }
    /*public User(String username, String email, String password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }*/

    /*public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }*/


    public User() {
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public List<Product> getProducts() {
        return this.recipes;
    }

    public void setProducts(List<Product> products) {
        this.recipes = products;
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

    /*public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }*/


    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    /*public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }*/

    /*public String getTelefon() {
        return telefon;
    }

    public void setTelefon(String telefon) {
        this.telefon = telefon;
    }*/

    public Set<Product> getFavoriteList() {
        return favoriteList;
    }

    public void setFavoriteList(Set<Product> favoriteList) {
        this.favoriteList = favoriteList;
    }

    public void addToFavorite(Product addedProductFavorite){
        favoriteList.add(addedProductFavorite);
    }

}
