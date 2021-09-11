import RegisterForm from '../RegisterForm';

function Register() {
    const handleSubmit = (data) => {
        console.log('register ', data);
    };
    return (
        <>
            <RegisterForm onSubmit={handleSubmit} />
        </>
    );
}

export default Register;
