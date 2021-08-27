package com.example.accessingmongodbdatarest.Controller;

import com.example.accessingmongodbdatarest.Entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {
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

}
