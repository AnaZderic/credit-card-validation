import {useState} from "react";

const BaseForm = () => {

    const [values, setValues] = useState({
        cardNumber: "",
        name: "",
        expirationDate: "",
        cvv: "",
    });

    const handleChange = e => { 
        const {name, value} = e.target; 
        setValues({
            ...values,
            [name]: value
        })
    };

    const handleSubmit = e => {
        e.preventDefault();
    
        const url = 'http://127.0.0.1:3000/';
        const data = {
            cardNumber: values.cardNumber,
            name: values.name,
            expirationDate: values.expirationDate,
            cvv: values.cvv
        };
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
    
        fetch(url, requestOptions)
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json(); 
        })
        .then(data => {
            console.log('POST request successful:', data);
        })
        .catch(error => {
            console.error('There was a problem with the POST request:', error);
        });
    }

    return {handleChange, handleSubmit, values}
}

export default BaseForm;