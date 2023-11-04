import supabase from "../services/supabase";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function SignUp() {
    const navigation = useNavigate();

    async function onSignUp(e) {
        e.preventDefault();

        const formElements = e.currentTarget.elements;
        console.log(formElements)
        let { data, error } = await supabase.auth.signUp({
            user: formElements[0].value,
            email: formElements[1].value,
            password: formElements[2].value,
            repetpassword: formElements[3].value,
        });

        if (!error) {
            console.log('user registered successfully');
            console.log(data);

            navigation('/SignIn');
            return;
        }

        console.error('something went wrong', error);
    }



    return (
        <div className="signUp">
            <div className="container">
                <div className="signUp_content">
                    <Form onSubmit={onSignUp}>
                        <h2>Zarejestruj się</h2>
                        <Form.Group className="mb-3" controlId="formUser">
                            <Form.Label>Użytkownik</Form.Label>
                            <Form.Control required type="text" placeholder="Podaj użytkownika" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Adres email</Form.Label>
                            <Form.Control required type="email" placeholder="Wprowadź email" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Hasło</Form.Label>
                            <Form.Control required type="password" placeholder="Podaj hasło" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Powtórz hasło</Form.Label>
                            <Form.Control required type="password" placeholder="Powtórz hasło" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Zarejestruj
                        </Button>
                    </Form>


                </div>

            </div>
        </div>
    )

}