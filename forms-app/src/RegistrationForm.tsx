import useForm from './useForm';

const RegistrationForm = () => {
    const { values, handleChange, handleSubmit} = useForm({ name: '', email: ''});
    const submitForm = () => {
        alert('Form submitted' + JSON.stringify(values));
    }
    return (
        <form onSubmit={handleSubmit(submitForm)}>
            <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                placeholder="Name"
                autoComplete="off"
            />
            <input
                type="email"
                name="email"
                onChange={handleChange}
                value={values.email}
                placeholder="Email"
                autoComplete="off"
            />
            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;
