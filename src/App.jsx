import './App.css'
import Counter from './countery'
import Team from './Team'
import User from './user'
import Friends from './Friends'

function App() {
    function handleClick() {
        alert('Button clicked')

    }
    const handleClick2 = () => {
        alert('Button clicked 2')
    }
    const addToFive = (num) => {
        alert(num + 5)
    }
    return (
        <>

            <h3>React core concept 2</h3>

            <Friends></Friends>

            <User></User>

            <Counter></Counter>
            <Team></Team>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={handleClick2}>Click Me 2</button>
            <button onClick={() => { alert('Button clicked 3') }}>Click Me 3</button>
            <button onClick={() => addToFive(34)}>Click Me 4</button >


        </>
    )
}

export default App
