package com.ghibili.ai.ghibiliai.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

import feign.form.FormData;

import java.util.Map;

@FeignClient(name = "stabilityAiClient", url = "https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0")
public interface StabilityAiClient {

    @PostMapping("/text-to-image")
    Map<String, Object> generateImageFromText(
            @RequestHeader("Authorization") String authorization,
            @RequestBody Map<String, Object> payload
    );
    @PostMapping(value = "/image-to-image", consumes = "multipart/form-data")
    Map<String, Object> generateImageFromImage(
            @RequestHeader("Authorization") String authorization,
            @RequestPart("init_image") MultipartFile initImage,
            @RequestPart("text_prompts[0][text]") String prompt,
            @RequestPart("cfg_scale") int cfgScale,
            @RequestPart("samples") int samples,
            @RequestPart("steps") int steps
    );
	
}
