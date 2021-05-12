import React from "react";
// import axios from "axios";

function Totals() {


    // async function onSubmit(data) {
    //     console.log(data);
    //     try {
    //         const result = await axios.post('http://localhost:3000/login', data)
    //         // console.log(result.data.accessToken);
    //         login(result.data.accessToken)
    //     } catch (e) {
    //         console.error(e)
    //     }
    // }


    return (
        <>
            <div>HELLO TOTALS!!! als deze pagina helemaal af is dan is je Front-End klaar!!</div>

        </>
    )
}

export default Totals


// import React, {useState, useEffect} from "react";
// import axios from "axios";
//
// function PokemonList({name, currentPage}) {
//     const [onePokemon, setOnePokemon] = useState({})
//     const [abilities, setAbilities] = useState([]);
//     const [moves, setMoves] = useState([]);
//
//     async function singlePokemon() {
//         try {
//             const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
//             // console.log(data)
//             setOnePokemon(data);
//             setAbilities(data.abilities.length)
//             setMoves(data.moves.length)
//
//         } catch (e) {
//             console.error(e)
//         }
//     }
//
//     useEffect(() => {
//         singlePokemon()
//     });
//
//     return (
//
//         <div className="container">
//             <h3>{onePokemon.name}</h3>
//             {onePokemon.sprites && <img src={onePokemon.sprites.front_default} alt={onePokemon.name}/>}
//             <ul>
//                 <li>Weight: {onePokemon.weight} lbs.</li>
//                 <li>Has {abilities} abilities.</li>
//                 <li>Has {moves} moves.</li>
//             </ul>
//         </div>
//     )
// }
//
// export default PokemonList


