package DesignPrincipleandPatterns.FactoryMethodPattern;

public class FactoryPatternMain {
    public static void main(String[] args) {
        DocumentFactory pdfFac=new PdfDocumentFactory();
        Document pdfDoc=pdfFac.createDocument();
        pdfDoc.open();

        DocumentFactory wordFac=new WordDocumentFactory();
        Document wordDoc=wordFac.createDocument();
        wordDoc.open();

        DocumentFactory excelFac=new ExcelDocumentFactory();
        Document excelDoc=excelFac.createDocument();
        excelDoc.open();
    }
}
