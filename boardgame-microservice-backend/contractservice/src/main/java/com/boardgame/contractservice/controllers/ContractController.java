package com.boardgame.contractservice.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.support.DefaultMessageSourceResolvable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.boardgame.contractservice.requests.CreateContractRequest;
import com.boardgame.contractservice.services.ContractService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import lombok.RequiredArgsConstructor;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import jakarta.validation.ValidationException;

@RestController
@RequestMapping("/api/contract")
@RequiredArgsConstructor
public class ContractController {
    
    @Autowired
    private final ContractService contractService;

    @PostMapping("/create")
    public ResponseEntity<Object> create(
            @Valid @RequestBody CreateContractRequest request,
            BindingResult bindingResult,
            HttpServletRequest httpServletRequest) throws InterruptedException, JsonMappingException, JsonProcessingException {

        checkForValidation(bindingResult);

        String authorization = httpServletRequest.getHeader("Authorization");
        return ResponseEntity.ok(contractService.create(request, authorization));
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
