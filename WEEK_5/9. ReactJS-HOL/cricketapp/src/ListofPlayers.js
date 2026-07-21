import React from "react";

function ListofPlayers() {

    const players = [
        { name: "Virat", score: 95 },
        { name: "Rohit", score: 82 },
        { name: "Gill", score: 65 },
        { name: "Rahul", score: 55 },
        { name: "Hardik", score: 78 },
        { name: "Jadeja", score: 45 },
        { name: "Ashwin", score: 60 },
        { name: "Bumrah", score: 85 },
        { name: "Shami", score: 50 },
        { name: "Siraj", score: 72 },
        { name: "Kuldeep", score: 68 }
    ];

    const below70 = players.filter(player => player.score < 70);

    return (
        <div>
            <h2>List of Players</h2>

            <h3>All Players</h3>

            <ul>
                {players.map((player, index) => (
                    <li key={index}>
                        {player.name} - {player.score}
                    </li>
                ))}
            </ul>

            <h3>Players with Score Below 70</h3>

            <ul>
                {below70.map((player, index) => (
                    <li key={index}>
                        {player.name} - {player.score}
                    </li>
                ))}
            </ul>

        </div>
    );
}

export default ListofPlayers;