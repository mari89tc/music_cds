"use strict";
// Grabs the button and the output table
const createCD = document.querySelector("button");
const outPutTable = document.querySelector("#tableOutput");

createCD.addEventListener("click", function(e){
// Makes sure that the window does not reload when the button is clicked
    e.preventDefault()
// Creates a variable, by grabbing the id from the input field and the value from it
    const txtAuthorOutput = document.getElementById("txtAuthor").value;
    const txtTitleOutput = document.getElementById("txtTitle").value;
    const txtYearOutput = document.getElementById("txtYear").value;

// Creates the table output with innerHtml by grabbing the values from the input field
    outPutTable.innerHTML += `
        <tr>
            <td>${txtAuthorOutput}</td>
            <td>${txtTitleOutput}</td>
            <td>${txtYearOutput}</td>
            <td class="delete-btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16"><path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/></svg></td>
        </tr>
    `;
// Clear the input field after submission
    document.getElementById("txtAuthor").value = '';
    document.getElementById("txtTitle").value = '';
    document.getElementById("txtYear").value = '';
});

outPutTable.addEventListener("click", (e) => {
    if (e.target.closest("td").classList.contains("delete-btn")) {
        const row = e.target.closest("tr");
        if (row) {
            row.remove();
        }
    }
});