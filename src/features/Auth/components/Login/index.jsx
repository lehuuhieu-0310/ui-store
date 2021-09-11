import LoginForm from '../LoginForm';

function Login() {
    const handleSubmit = (values) => console.log('login ', values);
    return (
        <div>
            <LoginForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Login;
