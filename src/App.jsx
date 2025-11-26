import React from 'react';
import './App.css';

function App() {
    const [nameValue, setNameValue] = React.useState('');
    const [ageValue, setAgeValue] = React.useState(0);
    const [reviewMessage, setReviewMessage] = React.useState('');
    const [newsletterValue, toggleNewsletterValue] = React.useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(nameValue, ageValue, reviewMessage, newsletterValue);
    }




    return (
        <form onSubmit={handleSubmit}>
            <fieldset className="details-field">
                <legend>Gegevens</legend>
            <label htmlFor="details-name">
                Naam:
                <input
                    type="text"
                    id="details-name"
                    name="fullname"
                    value={nameValue}
                    placeholder="voor- en achternaam"
                    onChange={(e) => setNameValue(e.target.value)}
                />
            </label>
                <label htmlFor="details-age">
                    Leeftijd:
                    <input type="number"
                    id="details-age"
                    name="age"
                    value={ageValue}
                    placeholder="0"
                    onChange={(e) => setAgeValue(e.target.value)}/>
                </label>
            </fieldset>
            <fieldset className="review-field">
                <legend>Jouw review</legend>
                <label htmlFor="your-review">
                    Opmerkingen:
                    <textarea
                        id="your-review" 
                        name="review-message"
                        rows="4"
                        cols="40"
                        value={reviewMessage} 
                        placeholder="Wat vond je van het recept?" 
                        onChange={(e) => setReviewMessage(e.target.value)}
                    />
                </label>
                <label htmlFor="form-newsletter">
                    <input
                        type="checkbox"
                        id="form-newsletter"
                        name="checkbox-newsletter"
                        checked={newsletterValue}
                        onChange={() => toggleNewsletterValue(!newsletterValue)}
                    />
                    Ik schrijf me in voor de nieuwsbrief
                </label>
                <button type="submit">Versturen</button>

                
            </fieldset>
        </form>
    );
}

export default App;
