import supabase from "../services/supabase";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';





export default function SignIn() {
    const navigation = useNavigate();

    async function onSignIn(e) {
        e.preventDefault();

        const formElements = e.currentTarget.elements;
        console.log(formElements)
        let { data, error } = await supabase.auth.signInWithPassword({
            email: formElements[1].value,
            password: formElements[2].value,
        });

        if (!error) {
            console.log('user logged successfully');
            console.log(data);

            navigation('/Dashboard');
            return;
        }

        console.error('something went wrong', error);
    }



    return (
        <div className="signIn">
            <div className="container">
                <div className="signIn_content">
                    <Form onSubmit={onSignIn}>
                        <h2>Zaloguj się</h2>
                        <Form.Group className="mb-3" controlId="formUser">
                            <Form.Label>Użytkownik</Form.Label>
                            <Form.Control className="formUserInfo" required type="text" placeholder="Podaj użytkownika" />


                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Adres email</Form.Label>
                            <Form.Control type="email" placeholder="Wprowadź email" required />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Hasło</Form.Label>
                            <Form.Control required type="password" placeholder="Podaj hasło" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Zaloguj
                        </Button>
                    </Form>


                </div>

            </div>
        </div>
    )

}