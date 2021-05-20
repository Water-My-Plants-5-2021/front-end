import { useState } from "react";

const initialValues = {
    username: "",
    phoneNumber: "",
    password: ""
}

export const useForm = e => {
    const [data, setData] = useState(initialValues)

    const onInputChange = event => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    };

    return [data, onInputChange]
};
