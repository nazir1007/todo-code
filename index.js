const Component = () => <h1>hello saif</h1>
const { useState } = React;
const App = () => {
    const [data, setData] = useState([
        {
            id: "1",
            title: "task name",
            status: false
        },
        {
            id: "2",
            title: "task nam2",
            status: false
        },
        {
            id: "3",
            title: "task nam3",
            status: false
        },
        {
            id: "4",
            title: "task nam4",
            status: false
        },
    ]);
    let lastId = 5;
    const [task, setTask] = useState("")

    function addTask(e) {
        e.preventDefault();
        lastId++;
        setData([...data, {
            id: lastId,
            title: task,
            status:false
        }])
        localStorage.data = JSON.stringify(data);
        localStorage.lastId = lastId;
        setTask("")
    }
    function updateTask(id) {
        setData(data.map((e) => (e.id == id ? { ...e, status: true } : e)));
        console.log(id,data);
        localStorage.data = JSON.stringify(data);
    }
    return (
        <div class="container" onSubmit={addTask}>
            <form id="form">
                <input type="text" placeholder="Task" value={task} name="task" onChange={(e) => setTask(e.target.value)} id="task" />

                <button id="btn" type="submit">addTask</button>
            </form>

            <table id="app">
                <tbody>
                    {
                        data.map((e, i) => <tr key={i} style={{color: e.status ? "green":"red"}}>
                            <td onClick={() => updateTask(e.id)}>{e.title}</td>
                            <td><i class="fa fa-trash" ></i></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));