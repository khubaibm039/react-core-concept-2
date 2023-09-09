import { useState } from "react"

export default function Team() {
    const [team, setTeam] = useState(11)
    const addPlayer = () => {
        const newPlayer = team + 1
        setTeam(newPlayer)
    }
    const removePlayer = () => {
        const newPlayer = team - 1
        setTeam(newPlayer)
    }

    return (
        <div style={{ border: "2px solid purple", padding: '12px', margin: '12px 0', borderRadius: "15px" }}>
            <h3>Players : {team}</h3>
            <button onClick={addPlayer}>ADD</button>
            <button onClick={removePlayer}>REDUCE</button>

        </div>
    )
}