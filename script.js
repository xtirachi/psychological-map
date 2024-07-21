document.getElementById('questionnaire').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const scores = {
        linguistic: 0,
        logicalMathematical: 0,
        bodilyKinesthetic: 0,
        naturalist: 0,
        spatial: 0,
    };
    
    // Example of scoring logic
    scores.linguistic += parseInt(formData.get('q1'));
    scores.logicalMathematical += parseInt(formData.get('q2'));
    // Continue for all questions
    
    const resultText = `
        Linguistic Intelligence: ${scores.linguistic}
        Logical-Mathematical Intelligence: ${scores.logicalMathematical}
        Bodily-Kinesthetic Intelligence: ${scores.bodilyKinesthetic}
        Naturalist Intelligence: ${scores.naturalist}
        Spatial Intelligence: ${scores.spatial}
    `;

    const docDefinition = {
        content: [
            { text: 'Gardner\'s Multiple Intelligences Results', style: 'header' },
            resultText
        ],
        styles: {
            header: { fontSize: 18, bold: true }
        }
    };

    pdfMake.createPdf(docDefinition).getDataUrl((dataUrl) => {
        const iframe = document.createElement('iframe');
        iframe.src = dataUrl;
        iframe.className = 'w-full h-96';
        document.getElementById('pdf-viewer').appendChild(iframe);
        document.getElementById('result').classList.remove('hidden');
    });
});
