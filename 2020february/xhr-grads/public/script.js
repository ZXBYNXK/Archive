//Html Script

//Xhr requester

const sendHttpRequest = (method, url, data) => {
  const promise = new Promise((resolve, reject) => {
    const Xhr = new XMLHttpRequest();

    Xhr.open(method, url);

    Xhr.responseType = "json";

    if (data) {
      Xhr.setRequestHeader("Content-type", "application/json");
    }

    Xhr.onload = () => {
      if (Xhr.status >= 400) {
        reject();
      } else {
        resolve(Xhr.response);
      }
    };

    Xhr.onerror = () => {
      reject("Something went wrong");
    };

    Xhr.send(JSON.stringify(data));
  });
  return promise;
};

let reachLimit = 0;

function getAllGraduates() {
  event.preventDefault();
        /*
        Source (W3Schools): https://www.w3schools.com/tags/tag_table.asp 
        An HTML table has two kinds of cells:
        Header cells - contains header information (created with the <th> element)
        Standard cells - contains data (created with the <td> element)
        <table> Represents the table element.
        <tr> elements represent a table row.
        The text in <th> elements are bold and centered by default.
        The text in <td> elements are regular and left-aligned by default.
        */

       let parentElement = document.getElementById("table_element");
       //Table Element from the html page with an id of "table_element"
       // Reference -> <table id="table_element"></table> (Path: ./index.html)
       // All elements below will append to the above table element (parentElement).     
  if(reachLimit === 0){
  
    sendHttpRequest("GET", "http://localhost:3000/api/graduates", true).then( response => {
      let tableRowHeading = document.createElement("tr");
      // <tr> is a table row element.
      // The table row element is telling the table element (parentElement) that there is going to be a row wherever appended to.
      // No text gets added to this element it is expecting either a td or th tag.
      // This <tr> element will be at the top and have <th> (Heading Table Cell) elements appended as child elements to it.
      // Using th to display the text as bold and center
      // This row will be appended first to the <table> element (parentElement)

      // These are the <th> tags that are going to be appended to 'tableRowHeading' <tr> element.
      let headingTableCellGraduateName = document.createElement("th");
      let headingTableCellEmail = document.createElement("th");
      let headingTableMongoId = document.createElement("th");

      headingTableCellGraduateName.innerText = "Name";
      headingTableCellEmail.innerText = "Email";
      headingTableMongoId.innerText = "Mongoose Object ID";

      //Appending child <th> elements to 'tableRowHeading'  (Muwst be in order)
      tableRowHeading.appendChild(headingTableCellGraduateName);
      tableRowHeading.appendChild(headingTableCellEmail);
      tableRowHeading.appendChild(headingTableMongoId);

      // 'tableRowHeading' Element is now ready to append to the <table> element (parentElement)
      parentElement.appendChild(tableRowHeading); // <- TABLE ROW HEADING IS NOW OFFICIALLY ADDED TO TABLE.

      // Now iterate and add rows dynamically based on the data you get.

      const listGraduates = response.map(element => {
        //Every row here comes after the row created above. Think of the firstone as being set in stone.
        // And the rest of the rows below will be dynammically created & filled with info from the 'element' object
        // In each iteration of the map method.

        //Here is a fresh row every iteration.
        let freshTableRow = document.createElement("tr");

        //Here I will create standard table cells each representing the sections given from 'tableRowHeading'
        let freshStandardTableCellGraduateName = document.createElement("td");
        let freshStandardTableCellGradauteEmail = document.createElement("td");
        let freshStandardTableCellMongoId = document.createElement("td");

        freshStandardTableCellGraduateName.innerText = `${element.firstname} ${element.lastname}`;
        freshStandardTableCellGradauteEmail.innerText = element.email;
        freshStandardTableCellMongoId.innerText = element._id;

        // Now that all the standard table cells are created append them to 'freshTableRow'
        freshTableRow.appendChild(freshStandardTableCellGraduateName);
        freshTableRow.appendChild(freshStandardTableCellGradauteEmail);
        freshTableRow.appendChild(freshStandardTableCellMongoId);
        //Now that 'freshTableRow' has everything it needs it can now be appedned to the <table> element.
        parentElement.appendChild(freshTableRow); // <- THIS IS WHERE THE NEW ROW IS ADDED TO THE TABLE IN EACH ITERATION.
      });
    });
  }else {
    let style = parentElement.style
    if(style.display != 'none'){
      style.display = 'none'
    } else {
      style.display = ''
    }
  }
  reachLimit += 1;
}

function createNewGraduate() {
  event.preventDefault();
  const graduate = {
    firstname: document.getElementById("firstname").value,
    lastname: document.getElementById("lastname").value,
    email: document.getElementById("email").value
  };

  const Xhr = new XMLHttpRequest();
  console.log(graduate);
  Xhr.open("POST", "http://localhost:3000/api/graduates");
  Xhr.setRequestHeader("Content-type", "application/json");
  Xhr.send(JSON.stringify(graduate));
  alert("Sent Post Request")
  setTimeout(()=> {
    location.reload()
  }, 100)
}
