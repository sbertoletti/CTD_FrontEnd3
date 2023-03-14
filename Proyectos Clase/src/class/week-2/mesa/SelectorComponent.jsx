import React from 'react'
import pokemonData from "../../../assets/static/pokemons.json"
import OptionComponent from './OptionComponent';



const SelectorComponent = ({ type }) => {

    const data = JSON.stringify(pokemonData[type]);

    return (
        <div className="selector" style="border: 1px solid blue">
            <form>
                <input>
                    <label for="pokemon-type">Choose a Pokemon Type:</label>
                    <select name="pokemon-type" id="pokemon-type">
                        {
                        data.map(poke => {
                            <option>{...poke}</option>
                        })
                        }
                    </select>
                </input>
            </form>
        </div>
    )
}

export default SelectorComponent;
