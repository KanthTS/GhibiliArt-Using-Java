package com.ghibili.ai.ghibiliai.controller;

import com.ghibili.ai.ghibiliai.services.GhibliArtService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:5173")
public class GenerationController {

    private final GhibliArtService ghibliArtService;

    public GenerationController(GhibliArtService ghibliArtService) {
        this.ghibliArtService = ghibliArtService;
    }

    @PostMapping("/generate-from-text")
    public ResponseEntity<Map<String, Object>> generateGhibliArtFromText(@RequestBody Map<String, String> request) {
        String prompt = request.get("prompt");
        Map<String, Object> response = ghibliArtService.createGhibliArtFromText(prompt);
        return ResponseEntity.ok(response);
    }
    @PostMapping("/image-to-image")
    public ResponseEntity<Map<String, Object>> generateImageFromImage(
            @RequestParam("init_image") MultipartFile initImage,
            @RequestParam("prompt") String prompt
    ) throws IOException {

        Map<String, Object> response = ghibliArtService.createGhibliArtFromImage(initImage, prompt);
        return ResponseEntity.ok(response);
    }
}
