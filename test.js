let data = [];
    if (localStorage.data && localStorage.data != "[]") {
      data = JSON.parse(localStorage.data);
    }

    let lastId = 0;
    if (localStorage.lastId) {
      lastId = parseInt(localStorage.lastId);
    }
    // Defining async function
    function getTask() {
      show(data);
    }
    function addTask(e) {
      e.preventDefault();
      task = document.querySelector("#task").value;
      lastId++;
      data = [...data,{
        id: lastId,
        title: task,
      }];
      getTask();
      localStorage.data = JSON.stringify(data);
      localStorage.lastId = lastId;
      document.querySelector("#task").value = "";
    }

    function updateTask(id) {
      data = data.map((e) => (e.id == id ? { ...e, status: true } : e));
      localStorage.data = JSON.stringify(data);
      getTask();
    }

    function deleteTask(id) {
      data = data.filter((e) => e.id != id);
      localStorage.data = JSON.stringify(data);
      getTask();
    }

    // Calling that async function
    getTask();

    // Function to define innerHTML for HTML table
    function show(task) {
      let tab = ``;

      // Loop to access all rows
      for (let r of task) {
        let color = "";
        let clkevt = "";
        if (r.status == true) {
          color = "green";
        } else {
          color = "red";
          clkevt = `onclick="updateTask('${r.id}')"`;
        }
        tab += `<tr style="color: ${color}">
      	<td  ${clkevt}>${r.title} </td>
      
      	<td  onclick="deleteTask('${r.id}')"><i class="fa fa-trash"></i></td>
      </tr>`;
      }

      // Setting innerHTML as tab variable
      document.getElementById("app").innerHTML = tab;

      var addBtn = document.querySelector("form");
      addBtn.addEventListener("submit", addTask);
    }