package com.boardgame.contractservice.models;

import java.sql.Timestamp;
import java.util.UUID;

import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "contracts")
public class Contract {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Embedded
    private Lessor lessor;

    @Embedded
    private Lessee lessee;

    private UUID[] boardgames;

    private Timestamp startAt;
    private Timestamp endAt;

    private Timestamp createAt;
    private Timestamp updateAt;
}
