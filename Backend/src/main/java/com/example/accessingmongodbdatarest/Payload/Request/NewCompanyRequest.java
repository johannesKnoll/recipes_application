package com.example.accessingmongodbdatarest.Payload.Request;

import com.example.accessingmongodbdatarest.Entities.User;
import org.hibernate.validator.constraints.NotBlank;

public class NewCompanyRequest {
    @NotBlank
    private User user;

    @NotBlank
    private String name;

    @NotBlank
    private String owner;

    @NotBlank
    private String email;

    @NotBlank
    private String telefon;

    public User getUser() {
        return user;
    }

    public void setUsername(User user) {
        this.user = user;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelefon() {
        return telefon;
    }

    public void setTelefon(String telefon) {
        this.telefon = telefon;
    }
}
