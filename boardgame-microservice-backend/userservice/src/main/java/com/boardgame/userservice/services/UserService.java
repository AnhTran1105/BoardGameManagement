package com.boardgame.userservice.services;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.LinkedHashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boardgame.userservice.models.Name;
import com.boardgame.userservice.models.User;
import com.boardgame.userservice.repositories.UserRepository;
import com.boardgame.userservice.requests.CreateUserRequest;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {
    @Autowired
    private final UserRepository userRepository;

    public Object create(CreateUserRequest request) {
        User user = User.builder()
            .name(new Name(request.getName().getFirstName(), request.getName().getLastName()))
            .phoneNumber(request.getPhoneNumber())
            .gender(request.getGender())
            .birthday(request.getBirthday())
            .address(request.getAddress())
            .createAt(Timestamp.valueOf(LocalDateTime.now()))
            .updateAt(null)
            .build();
        
        userRepository.save(user);

        LinkedHashMap<String, Object> response = new LinkedHashMap<>();
        response.put("user", user);
        response.put("message", "Created successfully.");
        response.put("timestamp", Timestamp.valueOf(LocalDateTime.now()));

        return response;
    }
}
