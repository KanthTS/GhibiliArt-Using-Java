package com.ghibili.ai.ghibiliai.models;

public class TextPrompt {
    private String text;

    public TextPrompt() {}

    public TextPrompt(String text) {
        this.text = text;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}
