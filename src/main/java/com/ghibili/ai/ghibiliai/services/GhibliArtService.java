package com.ghibili.ai.ghibiliai.services;

import com.ghibili.ai.ghibiliai.client.StabilityAiClient;

import feign.form.FormData;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Map;

@Service
public class GhibliArtService {

    private final StabilityAiClient stabilityAiClient;

    @Value("${stability.api.key}")
    private String apiKey;

    public GhibliArtService(StabilityAiClient stabilityAiClient) {
        this.stabilityAiClient = stabilityAiClient;
    }

    public Map<String, Object> createGhibliArtFromText(String prompt) {

        Map<String, Object> payload = Map.of(
                "text_prompts", List.of(Map.of("text", prompt)),
                "cfg_scale", 7,
                "height", 1024,
                "width", 1024,
                "samples", 1,
                "steps", 30,
                "seed", 12345
        );

        String bearerToken = "Bearer " + apiKey;

        return stabilityAiClient.generateImageFromText(bearerToken, payload);
    }
    public Map<String, Object> createGhibliArtFromImage(MultipartFile initImage, String prompt) throws IOException {
        FormData imageData = new FormData("image/png", prompt, initImage.getBytes());

        return stabilityAiClient.generateImageFromImage(
                "Bearer " + apiKey,
              initImage,
                prompt,
                7,
                1,
                30
        );
    }
}
