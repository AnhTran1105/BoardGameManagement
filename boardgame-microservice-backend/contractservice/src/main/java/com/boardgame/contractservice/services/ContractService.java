package com.boardgame.contractservice.services;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.LinkedHashMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boardgame.contractservice.kafkaconfig.OnMessageSendThenReceive;
import com.boardgame.contractservice.models.Contract;
import com.boardgame.contractservice.models.Lessee;
import com.boardgame.contractservice.models.Lessor;
import com.boardgame.contractservice.repositories.ContractRepository;
import com.boardgame.contractservice.requests.CreateContractRequest;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ContractService {
    @Autowired
    private final ContractRepository contractRepository;

    @Autowired
    private final OnMessageSendThenReceive onMessageSendThenReceive;

    public Object create(CreateContractRequest request, String authorization)
            throws InterruptedException, JsonMappingException, JsonProcessingException {

        Object lessorData = onMessageSendThenReceive.getLessorData(authorization);
        Object lesseeData = onMessageSendThenReceive.getLesseeData(request.getLesseeId());

        ObjectMapper objectMapper = new ObjectMapper();
        JsonNode jsonNodeLessor = objectMapper.readTree(lessorData.toString());
        JsonNode jsonNodeLessee = objectMapper.readTree(lesseeData.toString());

        Lessor lessor = new Lessor().parseLessorFromJson(jsonNodeLessor);
        Lessee lessee = new Lessee().parseLesseeFromJson(jsonNodeLessee);

        Contract contract = Contract.builder()
                .lessor(lessor)
                .lessee(lessee)
                .boardgames(request.getBoardgames())
                .startAt(request.getStartAt())
                .endAt(request.getEndAt())
                .createAt(Timestamp.valueOf(LocalDateTime.now()))
                .updateAt(null)
                .build();

        contractRepository.save(contract);

        LinkedHashMap<String, Object> response = new LinkedHashMap<>();
        response.put("contract", contract);
        response.put("message", "Created successfully.");
        response.put("timestamp", Timestamp.valueOf(LocalDateTime.now()));

        return response;
    }
}
