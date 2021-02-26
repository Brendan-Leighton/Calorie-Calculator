// NPM IMPORTS
import { useState } from "react";
import { useForm } from 'react-hook-form';

// COMPONENTS
import TextField from './components/text-field/text-field';


function App() {

    // STATE
    const [totalCalories, setTotalCalories] = useState(0);
    const [fatCalories, setFatCalories] = useState(0);
    const [carbCalories, setCarbCalories] = useState(0);
    const [proteinCalories, setProteinCalories] = useState(0);

    // FORM LOGIC
    const { register, handleSubmit } = useForm();
    const onSubmit = async (macros) => {
        console.log(macros);
        await setFatCalories(+macros.fat * 9);
        await setCarbCalories(+macros.carbs * 4);
        await setProteinCalories(+macros.protein * 4);
        setTotalCalories(fatCalories + carbCalories + proteinCalories);
    }

    return (
        <>
            <header>
                <h1>Calorie Calculator</h1>
            </header>
            <form
                onSubmit={handleSubmit(onSubmit)}
            >
                <TextField
                    name="fat"
                    reference={register}
                />
                <TextField
                    name="carbs"
                    reference={register}
                />
                <TextField
                    name="protein"
                    reference={register}
                />
                <button type="submit"
                >Calculate</button>
            </form>
            <section>
                <h2>Total Calories: {totalCalories}</h2>
                <ul>
                    <h3>Calories from...</h3>
                    <li>Fat: {fatCalories}</li>
                    <li>Carbs: {carbCalories}</li>
                    <li>Protein: {proteinCalories}</li>
                </ul>
            </section>
        </>
    );
}

export default App;
