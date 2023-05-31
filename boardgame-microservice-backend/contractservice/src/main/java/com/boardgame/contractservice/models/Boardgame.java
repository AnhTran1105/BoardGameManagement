package com.boardgame.contractservice.models;

import java.util.UUID;

import com.fasterxml.jackson.databind.JsonNode;

import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Embeddable
@NoArgsConstructor
@AllArgsConstructor
public class Boardgame {
    private UUID boardgameId;

    private String title;
    private String description;

    private int playerNumberMin;
    private int playerNumberMax;

    private double durationMin;
    private double durationMax;

    private int ageLimit;
    private String publisher;
    private double price;

    public Boardgame parseBoardgameFromJson(JsonNode jsonNode) {
        UUID boardgameId = UUID.fromString(jsonNode.get("id").toString().replaceAll("^\"|\"$", ""));

        String title = jsonNode.get("title").toString().replaceAll("^\"|\"$", "");
        String description = jsonNode.get("description").toString().replaceAll("^\"|\"$", "");

        int playerNumberMin = Integer.parseInt(jsonNode.get("playerNumberMin").toString().replaceAll("^\"|\"$", ""));
        int playerNumberMax = Integer.parseInt(jsonNode.get("playerNumberMax").toString().replaceAll("^\"|\"$", ""));

        double durationMin = Double.parseDouble(jsonNode.get("durationMin").toString().replaceAll("^\"|\"$", ""));
        double durationMax = Double.parseDouble(jsonNode.get("durationMax").toString().replaceAll("^\"|\"$", ""));

        int ageLimit = Integer.parseInt(jsonNode.get("ageLimit").toString().replaceAll("^\"|\"$", ""));
        String publisher = jsonNode.get("publisher").toString().replaceAll("^\"|\"$", "");
        double price = Double.parseDouble(jsonNode.get("price").toString().replaceAll("^\"|\"$", ""));


        return new Boardgame(boardgameId, title, description, playerNumberMin, playerNumberMax, durationMin, durationMax, ageLimit, publisher, price);
    }
}
