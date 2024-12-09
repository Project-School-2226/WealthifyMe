import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

public class PDFExtractor {
    public static void main(String[] args) {
        File dir1 = new File("downloaded_pdfs"); // Input directory
        File dir2 = new File("downloaded_txts"); // Output directory

        // Create output directory if it doesn't exist
        if (!dir2.exists()) {
            dir2.mkdir();
        }

        // Get all files in dir1
        File[] files = dir1.listFiles();
        if (files != null) {
            for (File file : files) {
                if (file.isFile() && !file.getName().toLowerCase().contains("annotated")) {
                    try {
                        // Process the PDF
                        String extractedText = extractTextFromPDF(file);
                        
                        // Save the extracted text to a new file in dir2
                        File outputFile = new File(dir2, file.getName().replace(".pdf", "_extracted.txt"));
                        saveTextToFile(extractedText, outputFile);
                    } catch (IOException e) {
                        System.err.println("Error processing file: " + file.getName());
                        e.printStackTrace();
                    }
                }
            }
        }
    }

    // Extract text from PDF
    private static String extractTextFromPDF(File pdfFile) throws IOException {
        try (FileInputStream fileInputStream = new FileInputStream(pdfFile)) {
            PDDocument document = PDDocument.load(fileInputStream);  // Use FileInputStream to load the document
            PDFTextStripper stripper = new PDFTextStripper();
            String text = stripper.getText(document);
            document.close();
            return text;
        }
    }

    // Save the extracted text to a file
    private static void saveTextToFile(String text, File outputFile) throws IOException {
        java.nio.file.Files.write(outputFile.toPath(), text.getBytes());
    }
}
