var nameInput = document.getElementById("siteName");
var urlInput = document.getElementById("siteUrl");
var tableBody = document.getElementById("tableContent");
var searchInput = document.getElementById("searchUrl");
var websitesContainer = [];
if(localStorage.getItem("bookMarks") !== null) {
    websitesContainer = JSON.parse(localStorage.getItem("bookMarks"));
    displayBookMark();
};

function addWebsite() {
    var bookMark  = {
        websiteName: nameInput.value,
        websiteUrl: urlInput.value
    }
    websitesContainer.push(bookMark);
    localStorage.setItem("bookMarks", JSON.stringify(websitesContainer));
    displayBookMark();
};

function displayBookMark() {
    var marks = "";
    for(i = 0; i < websitesContainer.length; i++) {
        marks += ` 
                     <tr>
                        <td>${i + 1}</td>
                        <td>${websitesContainer[i].websiteName}</td>
                        <td>
                            <a href="${websitesContainer[i].websiteUrl}" role="button">
                                <button class="btn btn-visit">
                                  <i class="fa-solid fa-eye"></i>
                                  Visit
                                </button>
                            </a>
                        </td>
                        <td>
                            <button onclick="deleteBookMark(${i})" class="btn btn-danger">
                              <i class="fa-solid fa-trash-can"></i>
                              Delete
                            </button>
                        </td>
                    </tr>`
    }
    tableBody.innerHTML = marks;

};
function deleteBookMark(deletedIndex) {
    websitesContainer.splice(deletedIndex, 1);
    localStorage.setItem("bookMarks", JSON.stringify(websitesContainer));
    displayBookMark();
};
function searchWebsite() {
    var term = searchInput.value;
    var marks = "";
    for(i = 0; i < websitesContainer.length; i++) {
        if(websitesContainer[i].websiteUrl.toLowerCase().includes(term.toLowerCase())) {
            marks += ` 
            <tr>
               <td>${i + 1}</td>
               <td>${websitesContainer[i].websiteName}</td>
               <td>
                   <a href="${websitesContainer[i].websiteUrl}" role="button">
                       <button class="btn btn-visit">
                         <i class="fa-solid fa-eye"></i>
                         Visit
                       </button>
                   </a>
               </td>
               <td>
                   <button onclick="deleteBookMark(${i})" class="btn btn-danger">
                     <i class="fa-solid fa-trash-can"></i>
                     Delete
                   </button>
               </td>
           </tr>`

        }
       
    }
    tableBody.innerHTML = marks;


};
