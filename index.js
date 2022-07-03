const Component = () => <h1>hello saif</h1>
const App = () => {
    const [data, setData] = React.useState([
        {
            id:"1",
            title:"task name",
            status:true
        },
        {
            id:"2",
            title:"task nam2",
            status:true
        },
        {
            id:"3",
            title:"task nam3",
            status:true
        },
        {
            id:"4",
            title:"task nam4",
            status:true
        },
    ]);
    return (
        <div class="container">
            <form id="form">
                <input type="text" placeholder="Task" name="task" id="task" />

                <button id="btn" type="submit">addTask</button>
            </form>

            <table id="app">
                <tbody>
                    {
                        data.map((e,i)=><tr key={i}>
                        <td>{e.title}</td>
                        <td><i class="fa fa-trash"></i></td>
                    </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));