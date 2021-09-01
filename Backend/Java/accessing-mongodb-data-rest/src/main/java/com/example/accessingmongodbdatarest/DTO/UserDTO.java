package com.example.accessingmongodbdatarest.DTO;

import com.example.accessingmongodbdatarest.Entities.User;
import com.example.accessingmongodbdatarest.Security.services.UserDetailsImpl;

public class UserDTO {
    private long userId;
    private String username;
    private String name;
    private String lastname;

    public UserDTO(User user){
        this.userId = user.getId();
        this.username = user.getUsername();
        this.name = user.getName();
        this.lastname = user.getLastName();
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }
}
