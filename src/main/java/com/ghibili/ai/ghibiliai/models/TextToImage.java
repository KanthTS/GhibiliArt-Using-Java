package com.ghibili.ai.ghibiliai.models;

import java.util.List;

public class TextToImage {
    private List<TextPrompt> text_prompts;
    private Integer cfg_scale;
    private Integer height;
    private Integer width;
    private Integer samples;
    private Integer steps;
    private Long seed;

    public TextToImage() {}
    

    public List<TextPrompt> getText_prompts() {
        return text_prompts;
    }

    public void setText_prompts(List<TextPrompt> text_prompts) {
        this.text_prompts = text_prompts;
    }

    public Integer getCfg_scale() {
        return cfg_scale;
    }

    public void setCfg_scale(Integer cfg_scale) {
        this.cfg_scale = cfg_scale;
    }

    public Integer getHeight() {
        return height;
    }

    public void setHeight(Integer height) {
        this.height = height;
    }

    public Integer getWidth() {
        return width;
    }

    public void setWidth(Integer width) {
        this.width = width;
    }

    public Integer getSamples() {
        return samples;
    }

    public void setSamples(Integer samples) {
        this.samples = samples;
    }

    public Integer getSteps() {
        return steps;
    }

    public void setSteps(Integer steps) {
        this.steps = steps;
    }

    public Long getSeed() {
        return seed;
    }

    public void setSeed(Long seed) {
        this.seed = seed;
    }
}
