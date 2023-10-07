import {useState} from "react";

const BaseForm = () => {

    const [values, setValues] = useState({
        cardNumber: "",
        name: "",
        expirationDate: "",
        cvc: "",
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
    };
    return {handleChange, handleSubmit, values}
}

export default BaseForm;