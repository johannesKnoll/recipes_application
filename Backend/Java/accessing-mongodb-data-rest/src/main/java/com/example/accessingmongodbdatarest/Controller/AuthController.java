package com.example.accessingmongodbdatarest.Controller;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import javax.validation.Valid;

import com.example.accessingmongodbdatarest.Entities.ERole;
import com.example.accessingmongodbdatarest.Entities.Role;
import com.example.accessingmongodbdatarest.Entities.User;
import com.example.accessingmongodbdatarest.Payload.Request.LoginRequest;
import com.example.accessingmongodbdatarest.Payload.Request.SignupRequest;
import com.example.accessingmongodbdatarest.Payload.Response.JwtResponse;
import com.example.accessingmongodbdatarest.Payload.Response.MessageResponse;
import com.example.accessingmongodbdatarest.Repositories.RoleRepository;
import com.example.accessingmongodbdatarest.Repositories.UserRepository;
import com.example.accessingmongodbdatarest.Security.jwt.JwtUtils;
import com.example.accessingmongodbdatarest.Security.services.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtUtils jwtUtils;

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(item -> item.getAuthority())
                .collect(Collectors.toList());

        return ResponseEntity.ok(new JwtResponse(jwt,
                userDetails.getId(),
                userDetails.getUsername(),
                userDetails.getEmail(),
                roles));
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
        if (userRepository.existsByUsername(signUpRequest.getUsername())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Nutzername bereits verwendet!", 1));
        }

        if (userRepository.existsByEmail(signUpRequest.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: E-Mail bereits verwendet!", 2));
        }

        if(signUpRequest.getPassword().length() < 8){
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Passwort muss mindestens 8 Zeichen lang sein", 4));
        }

        // Create new user's account
        User user = new User(signUpRequest.getUsername(),
                signUpRequest.getEmail(),
                encoder.encode(signUpRequest.getPassword()));

        Set<String> strRoles = new HashSet<>();
        Set<Role> roles = new HashSet<>();

        /*
        if (strRoles == null) {
            //Role userRole = roleRepository.findByName(Role.USER)
            //        .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
            roles.add(roleRepository.findByRoleName(Role.USER));
        } else {
            strRoles.forEach(role -> {
                switch (role) {
                    case "admin":
                        //Role adminRole = roleRepository.findByName(Role.ADMIN)
                        //        .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(roleRepository.findByRoleName(Role.ADMIN));

                        break;
                    case "mod":
                        //Role modRole = roleRepository.findByName(Role.MODERATOR)
                        //        .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(roleRepository.findByRoleName(Role.MODERATOR));

                        break;
                    default:
                        //Role userRole = roleRepository.findByName(Role.USER)
                        //        .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(roleRepository.findByRoleName(Role.USER));
                }
            });
        }*/

        roles.add(roleRepository.findByRoleName(Role.ADMIN));
        user.setRoles(roles);
        userRepository.save(user);

        return ResponseEntity.ok(new MessageResponse("User registered successfully!", 3));
    }
}
