package com.example.accessingmongodbdatarest.Repositories;

import com.example.accessingmongodbdatarest.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<User, Long > {
    //public User findByUsername(String username);

    User findByUsername(String username);

    User findById(long id);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);


//List<User> findByLastName(@Param("name") String name);
 //  @GetMapping
//   public List<User> test(){
//        return List.of(
//              new User(1, "Johannes", "Knoll")
//      );
//  }

}
