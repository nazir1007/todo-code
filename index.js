const init = [

];

const Row = ({ e, updateTask, deleteTask }) => (
    <tr style={{ color: e.status ? "green" : "red" }}>
        <td onClick={() => updateTask(e.id)}>{e.title}</td>
        <td onClick={() => deleteTask(e.id)}><i class="fa fa-trash" ></i></td>
    </tr>
)

const { useState, useEffect } = React;
const App = ({ init }) => {
    const [data, setData] = useState(init);
    const [lastId, setLastId] = useState(0)
    const [task, setTask] = useState("")
    useEffect(() => {
        if (localStorage.data && localStorage.data != "" && localStorage.data != []) {
            setData(JSON.parse(localStorage.data))
            setLastId(+localStorage.lastId)
        }
    }, [])
    const addTask = (e) => {
        e.preventDefault();
        setLastId(lastId+1)
        setData([...data, {
            id: lastId,
            title: task,
            status: false
        }])
        setTask("")
    }
    const updateTask = (id) => {
        setData(data.map((e) => (e.id == id ? { ...e, status: true } : e)));
    }

    const deleteTask = (id) => {
        setData(data.filter((e) => e.id != id));
    }

    useEffect(() => {
        localStorage.data = JSON.stringify(data);
        localStorage.lastId = lastId;
    }, [data])
    return (
        <div class="container" onSubmit={addTask}>
            <form id="form">
                <input type="text" placeholder="Task" value={task} name="task" onChange={(e) => setTask(e.target.value)} id="task" />

                <button id="btn" type="submit">addTask</button>
            </form>

            <table id="app">
                <tbody>
                    {
                        data.map((e, i) => <Row key={i} e={e} updateTask={updateTask} deleteTask={deleteTask} />)
                    }
                </tbody>
            </table>
        </div>
    )
}

ReactDOM.render(<App init={init} />, document.querySelector('#root'));