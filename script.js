{\rtf1\ansi\ansicpg1252\cocoartf2639
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 function showLanguageOptions(destination) \{\
    document.getElementById('intro-page').style.display = 'none';\
    document.getElementById('language-page').style.display = 'block';\
    localStorage.setItem('destination', destination);\
\}\
\
function showCategoryOptions(language) \{\
    document.getElementById('language-page').style.display = 'none';\
    document.getElementById('category-page').style.display = 'block';\
    localStorage.setItem('language', language);\
\}\
\
function showUploadPage() \{\
    document.getElementById('category-page').style.display = 'none';\
    document.getElementById('upload-page').style.display = 'block';\
\}\
\
function returnToMainPage() \{\
    document.getElementById('upload-page').style.display = 'none';\
    document.getElementById('intro-page').style.display = 'block';\
\}\
\
document.getElementById('upload-form').addEventListener('submit', function(e) \{\
    e.preventDefault();\
    const name = e.target.elements.name.value;\
    const file = e.target.elements.document.files[0];\
\
    if (file && name) \{\
        uploadToGoogleSheets(name, file);\
    \} else \{\
        alert('Please enter your name and select a file.');\
    \}\
\});\
\
function uploadToGoogleSheets(name, file) \{\
    const formData = new FormData();\
    formData.append('name', name);\
    formData.append('fileName', file.name);\
\
    fetch('YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL', \{\
        method: 'POST',\
        mode: 'cors',\
        headers: \{\
            'Content-Type': 'application/json'\
        \},\
        body: JSON.stringify(\{\
            name: name,\
            fileName: file.name\
        \})\
    \})\
    .then(response => response.json())\
    .then(data => \{\
        if (data.status === 'success') \{\
            alert('Data successfully uploaded to Google Sheets.');\
            // Simulate adding name to ranking list\
            const rankingList = document.getElementById('ranking-list');\
            const listItem = document.createElement('li');\
            listItem.textContent = name;\
            rankingList.appendChild(listItem);\
        \} else \{\
            alert('Failed to upload data to Google Sheets.');\
        \}\
    \})\
    .catch(error => console.error('Error:', error));\
\}\
\
// Simulate pre-existing rankings\
const preExistingRankings = ['Alice', 'Bob', 'Charlie'];\
const rankingList = document.getElementById('ranking-list');\
preExistingRankings.forEach(name => \{\
    const listItem = document.createElement('li');\
    listItem.textContent = name;\
    rankingList.appendChild(listItem);\
\});\
}