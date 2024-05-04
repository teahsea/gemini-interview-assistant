# Gemini Interview Assistant

Gemini Interview Assistant is a command-line tool designed to help interviewers generate interview questions and preparation roadmaps tailored to a candidate's resume using Google's Generative AI technology.

## Installation

To install Gemini Interview Assistant, follow these steps:

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/teahsea/gemini-interview-assistant.git
   ```

2. Navigate to the cloned repository:
    ```bash
    cd gemini-interview-assistant
    ```
3. Install dependencies using npm:
    ```bash
    npm install
    ```
4. Obtain your Google Gemini API key. If you don't have one, you can get it from [here](https://aistudio.google.com/app/apikey).
5. Add your Google Gemini API key to the `config.env` file under the variable **GOOGLE_GEMINI_API_KEY**.
6. Place your resume image in the root directory of the project.

## Usage

To run Gemini Interview Assistant, use the following command:

```bash
npm run start your_image_path
```

Replace your_image_path with the path to your resume image file. For example:

```bash
npm run start resume.png
```

This command will analyze the provided resume image and generate interview questions and preparation roadmaps tailored to the candidate's qualifications and experience.


