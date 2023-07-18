package com.boardgame.userservice.controllers;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import com.boardgame.userservice.requests.UpdateUserRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.support.DefaultMessageSourceResolvable;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import com.boardgame.userservice.requests.CreateUserRequest;
import com.boardgame.userservice.services.UserService;

import jakarta.validation.Valid;
import jakarta.validation.ValidationException;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserController {
    @Autowired
    private final UserService userService;

    @PostMapping("/create")
    public ResponseEntity<Object> create(
            @Valid @RequestBody CreateUserRequest request,
            BindingResult bindingResult) {

        checkForValidation(bindingResult);

        return ResponseEntity.ok(userService.create(request));
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Object> find(@PathVariable("id") UUID id) {
        return ResponseEntity.ok(userService.find(id));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Object> delete(@PathVariable("id") UUID id) {
        return ResponseEntity.ok(userService.delete(id));
    }

    @GetMapping("/get-all")
    public ResponseEntity<Object> getAll() {
        return ResponseEntity.ok(userService.getAll());
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Object> update(
            @PathVariable("id") UUID id,
            @Valid @RequestBody UpdateUserRequest request,
            BindingResult bindingResult) {

        checkForValidation(bindingResult);

        return ResponseEntity.ok(userService.update(id, request));
    }


    private void checkForValidation(BindingResult bindingResult) {

        if (bindingResult.hasErrors()) {
            List<String> errorDetails = bindingResult.getAllErrors().stream()
                    .map(DefaultMessageSourceResolvable::getDefaultMessage)
                    .collect(Collectors.toList());

            String errorDetailsString = String.join("; ", errorDetails);

            throw new ValidationException("Invalid data: " + errorDetailsString);
        }
    }
}
