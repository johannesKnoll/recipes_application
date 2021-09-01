package com.example.accessingmongodbdatarest.Services;

import com.example.accessingmongodbdatarest.DTO.UserDTO;
import com.example.accessingmongodbdatarest.Entities.User;
import com.example.accessingmongodbdatarest.Entities.User;
import com.example.accessingmongodbdatarest.Repositories.UserRepository;
import com.example.accessingmongodbdatarest.Security.services.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    private User getAuthorizedUser() {
        UserDetailsImpl userDetails = (UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String username = userDetails.getUsername();
        return userRepository.findByUsername(username);
    }

    public User create(String username, String email, String password, String name, String lastname){
        return userRepository.save(new User(username, email, password, name, lastname));
    }

    public List<User> getAll(){
        Iterator<User> source = userRepository.findAll().iterator();
        List<User> target = new ArrayList<>();
        source.forEachRemaining(target::add);

        return target;
    }

    public UserDTO getLoggedInUser(){
        User user = getAuthorizedUser();
        UserDTO userDTO = new UserDTO(user);

        return userDTO;
    }

    /*public User getUserByProductId(long productId){
        return userRepository.findUserByProducts(productId);
    }

    public Long getUserByUserId(long userId){
        return userRepository.findByUser_Id(userId).getId();
    }

    public UserDTO getUserById(long id){
        UserDTO user = new UserDTO(userRepository.findById(id));

        return user;
    }

    public UserDTO getUserDTOByProductId(long productId){
        UserDTO user = new UserDTO(userRepository.findUserByProducts(productId));

        return user;
    }

    public User getByName(String name){
        return userRepository.findByName(name);
    }*/
}
