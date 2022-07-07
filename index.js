const init = [
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
];

const Row = ({ e, updateTask }) => (
    <tr style={{ color: e.status ? "green" : "red" }}>
        <td onClick={() => updateTask(e.id)}>{e.title}</td>
        <td><i class="fa fa-trash" ></i></td>
    </tr>
)

const { useState } = React;
const App = ({init}) => {
    const [data, setData] = useState(init);
    let lastId = 5;
    const [task, setTask] = useState("")

    const addTask = (e) => {
        e.preventDefault();
        lastId++;
        setData([...data, {
            id: lastId,
            title: task,
            status: false
        }])
        localStorage.data = JSON.stringify(data);
        localStorage.lastId = lastId;
        setTask("")
    }
    const updateTask = (id) => {
        setData(data.map((e) => (e.id == id ? { ...e, status: true } : e)));
        console.log(id, data);
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
                        data.map((e, i) => <Row key={i} e={e} updateTask={updateTask} />)
                    }
                </tbody>
            </table>
        </div>
    )
}

ReactDOM.render(<App init={init} />, document.querySelector('#root'));