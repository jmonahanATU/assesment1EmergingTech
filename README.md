# README

## Overview

This project combines two main tools:

1. **Trigram-Based Text Generator**: A program and algorithm that take patterns from text as input and create new text as output.
2. **ELIZA Chatbot**: A virtual therapist based on a program introduced in 1966 containing only simple dialogues.

Both are attractive techniques to examine how information can be generated and derived by computers in the shape of language.

---

## What Can This Project Do?

### Part 1: Trigram-Based Text Generator

- **Load and Process Texts**: Reads text files and prepares them for analysis.
- **Learn Patterns**: Finds patterns in groups of three characters (called trigrams).
- **Generate Text**: Creates new text based on these patterns.
- **Check Validity**: Uses a set of real English words as a benchmark to assess the quality of the generated text.

### Part 2: ELIZA Chatbot

- **Talk to a Virtual Therapist**: Engage in a conversation with ELIZA, a chatbot that responds to your input.
- **Recognize Patterns**: ELIZA exploits patterns in your input to provide thoughtful answers.
- **Work in a Browser**: Easily use ELIZA with an intuitive user interface through any modern web browser.

---

## How to Get Started

### Requirements

#### For the Trigram Text Generator:
- Python 3.6 or newer.
- Input text files.
- An input file (`words.txt`) containing English words that could be correct.

#### For the ELIZA Chatbot:
- A web browser (like Chrome or Firefox).
- The provided HTML, CSS, and JavaScript files.

### Setup

#### Trigram Text Generator

1. **Prepare Files**:
   - Place text files in a folder called `texts`.
   - Ensure `words.txt` contains valid English words (one word per line).

2. **Run the Program**:
   - The program will predict text, extract patterns, and synthesize a 10,000-character text.

3. **See the Results**:
   - The generated text will be saved to `generated_text.txt`.
   - A JSON file (`trigrams.json`) will store the trigram model.
   - Validation statistics (e.g., percentage of valid English words) will be displayed in the console.

#### ELIZA Chatbot

1. **Set Up Files**:
   - Place `index.html`, `style.css`, and `eliza.js` in the same directory.

2. **Open in Browser**:
   - Open `index.html` in a web browser to start communicating with ELIZA.

3. **Chat**:
   - Enter your sentences in the input box and receive immediate replies.

---

## What Each Tool Does

### Trigram-Based Text Generator

- **Reads and Cleans Text**: Removes unnecessary characters and formats the text.
- **Builds Patterns**: Recognizes all three-character strings and their frequencies.
- **Creates New Text**: Generates new text that, at face value, resembles the original text.
- **Checks Accuracy**: Matches words in the generated text with a dictionary of real words to verify performance.

### ELIZA Chatbot

- **Understands What You Say**: ELIZA recognizes phrases and responds based on patterns.
- **Handles Different Topics**:
  - Feelings (e.g., "I feel stressed.")
  - Work or school (e.g., "I’m busy with school.")
  - Questions about ELIZA (e.g., "Who are you?")
- **User-Friendly Design**: Accessible in a web browser with a clean, intuitive interface.

---

## Example Outputs

### Trigram Generator

#### Validation Results:

Total words: 2000  

Valid English words: 1500  

Percentage of valid words: 75%  

#### Generated Text:

You: "I feel overwhelmed."  

ELIZA: "Why do you think you feel overwhelmed?"  

You: "I don’t have enough time for work."  

ELIZA: "What makes it difficult to manage your time?"  
