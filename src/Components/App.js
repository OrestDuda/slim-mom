import React, { Component } from 'react';
import Header from './Header/Header';
import CalculatorCalorieForm from '../Components/CalculatorCalorieForm';

function App() {
    return (
        <>
            <Header></Header>
            <section>
                <CalculatorCalorieForm />
            </section>
        </>
    );
}
export default App;
