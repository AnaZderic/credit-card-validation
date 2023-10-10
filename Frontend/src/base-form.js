import {useState} from "react";

const baseForm = () => {

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

    const handleSubmit = setShow => e => {
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

        fetch("/api/validate-form", requestOptions)
        .then(response => response.json())
        .then(data => {
            data.success
            ? setShow({ toggle: true, success: true, errorsModel: false })
            : setShow({ toggle: true, success: false, errorsModel: data.errors });
        })

    }

    return {handleChange, handleSubmit, values};
}

export default baseForm;