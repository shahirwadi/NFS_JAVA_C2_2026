package com.example.assettracker.service;

import com.example.assettracker.dto.TicketResponse;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class TicketService {

    private final List<TicketResponse> tickets = List.of(
        new TicketResponse(
            "T001",
            "Cannot access email",
            "User cannot log in to the company email account.",
            "Email",
            "HIGH",
            "OPEN",
            "amir@example.com",
            LocalDate.of(2026, 7, 3)
        ),
        new TicketResponse(
            "T002",
            "Laptop is slow",
            "Laptop takes several minutes to start applications.",
            "Hardware",
            "MEDIUM",
            "IN_PROGRESS",
            "siti@example.com",
            LocalDate.of(2026, 7, 3)
        ),
        new TicketResponse(
            "T003",
            "VPN connection not working",
            "User cannot connect to the office network from home.",
            "Network",
            "HIGH",
            "OPEN",
            "john@example.com",
            LocalDate.of(2026, 7, 4)
        )
    );

    public List<TicketResponse> getAllTickets() {
        return tickets;
    }
}
