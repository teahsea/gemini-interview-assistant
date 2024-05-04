import { readFileSync } from 'fs';
import { GoogleGenerativeAI } from "@google/generative-ai";

class Gemini {
    constructor() {
        this.genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY);
    }

    // Function to read file and convert it to generative part
    static fileToGenerativePart(path, mimeType) {
        const data = readFileSync(path);
        return {
            inlineData: {
                data: Buffer.from(data).toString("base64"),
                mimeType
            },
        };
    }

    // Function to analyze resume using Google Generative AI
    async analyzeResume(imageFilePath, mimeType) {
        try {
            const model = this.genAI.getGenerativeModel({ model: "gemini-pro-vision" });

            const prompt = `Given the attached resume image, 
            please generate interview questions tailored to assess the candidate's 
            qualifications, skills, and experience. Additionally, provide a preparation roadmap 
            outlining key areas for the candidate to focus on before the interview, including 
            echnical topics, behavioral competencies, and industry-specific knowledge. 
            Consider the candidate's education, work experience, skills, and any other relevant information provided in the resume. 
            Please provide detailed responses with points, tips, and example answers to assist the candidate 
            in preparing effectively for the interview.`;
            
            const image = Gemini.fileToGenerativePart(imageFilePath, mimeType);

            const result = await model.generateContent([prompt, image]);
            const response = result.response;
            const text = response.text();

            return text;
        } catch (error) {
            console.error("Error analyzing resume:", error);
            throw error;
        }
    }
}

export default Gemini;
