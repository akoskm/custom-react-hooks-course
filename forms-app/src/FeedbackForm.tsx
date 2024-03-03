import useForm from './useForm';

const FeedbackForm = () => {
    const { values, handleChange, handleSubmit } = useForm({ feedback: ''});

    const submitForm = () => {
        alert('Form submitted' + JSON.stringify(values));
    }

    return (
        <form onSubmit={handleSubmit(submitForm)}>
            <textarea
            value={values.feedback}
            onChange={handleChange}
                name="feedback"
                placeholder="Your feedback"
            />
            <button type="submit">Submit Feedback</button>
        </form>
    );
};

export default FeedbackForm;
