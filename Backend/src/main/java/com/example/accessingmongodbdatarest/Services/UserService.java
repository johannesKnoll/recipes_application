package com.example.accessingmongodbdatarest.Services;

import com.example.accessingmongodbdatarest.DTO.UserDTO;
import com.example.accessingmongodbdatarest.Entities.Product;
import com.example.accessingmongodbdatarest.Entities.User;
import com.example.accessingmongodbdatarest.Entities.User;
import com.example.accessingmongodbdatarest.Payload.Request.UpdatePasswordRequest;
import com.example.accessingmongodbdatarest.Payload.Response.MessageResponse;
import com.example.accessingmongodbdatarest.Repositories.UserRepository;
import com.example.accessingmongodbdatarest.Security.services.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@Service
public class UserService {

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository userRepository;

    private User getAuthorizedUser() {
        UserDetailsImpl userDetails = (UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String username = userDetails.getUsername();
        return userRepository.findByUsername(username);
    }

    public User create(String username, String email, String password, String name, String lastname) {
        return userRepository.save(new User(username, email, password, name, lastname));
    }

    public List<User> getAll() {
        Iterator<User> source = userRepository.findAll().iterator();
        List<User> target = new ArrayList<>();
        source.forEachRemaining(target::add);

        return target;
    }

    public UserDTO getLoggedInUser() {
        User user = getAuthorizedUser();
        UserDTO userDTO = new UserDTO(user);

        return userDTO;
    }

    //Update operation
    public User updateEmail(String username, String email) {
        UserDetailsImpl userDetails = (UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        username = userDetails.getUsername();
        email = userDetails.getEmail();
        User user = userRepository.findByUsername(username);
        //       userRepository.findByUsername(username);
        user.setEmail(email);
        System.out.println(email);
        //userRepository.save(email);
        return userRepository.save(user);
    }

    public ResponseEntity<?> updatePassword(UpdatePasswordRequest updatePasswordRequest) {
        UserDetailsImpl userDetails = (UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User user = userRepository.findByUsername(userDetails.getUsername());
        UpdatePasswordRequest newPassword = new UpdatePasswordRequest(updatePasswordRequest.getPassword(), updatePasswordRequest.getRepeatPassword());
        if (newPassword.getPassword().equals(newPassword.getRepeatPassword()) ){
            String resetPasswword = passwordEncoder.encode(newPassword.getRepeatPassword());
            user.setPassword(resetPasswword);
            userRepository.save(user);
            return ResponseEntity.ok().body(new MessageResponse("Das Passwort wurde erfolgreich aktualisiert :)",5));
        }else if(newPassword.getPassword() != newPassword.getRepeatPassword()) {
            return ResponseEntity.ok().body(new MessageResponse("Geben Sie bitte die gleichen Passwörter ein", 6));
        }
        else{
            return ResponseEntity.badRequest().body(new MessageResponse("Irgendwas lief schief :D", 7));
        }
    }
}
