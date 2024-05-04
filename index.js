import Gemini from './gemini.js';
import mime  from 'mime';

async function run() {
    try {
        const { filePath, mimeType } = getFileData();
        const gemini = new Gemini();
        const response = await gemini.analyzeResume(filePath, mimeType);
        console.log(response);

    } catch (error) {
        console.log(error);
    }
}

function getFileData() {
    // Get command line arguments
    const [,, filePath] = process.argv;
    if (!filePath) {
        console.error('Usage: node handler.js <imageFilePath>');
        process.exit(1);
    }

    // Determine mimeType from file
    const mimeType = mime.getType(filePath);
    if (!mimeType || !mimeType.startsWith('image/')) {
        console.error('Unsupported file type. Please provide an image file.');
        process.exit(1);
    }

    return { filePath, mimeType };
}

run();