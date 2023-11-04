import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
    return (

        <>
            <header>
                <nav className="logo">
                    <a href="/" className="site-title">WoodCraft Manager</a>
                </nav>
                <div className="links">
                    <ul>
                        <li><a href="/">Strona główna</a></li>
                        <li><a href="/features">Oferta</a></li>
                        <li><a href="/Pricing">Cennik</a></li>
                        <li><a href="/About">O nas</a></li>
                        <li><a href="/Contact">Kontakt</a></li>

                        <li><a href="/SignIn"><FontAwesomeIcon icon={faRightToBracket} fontSize='20px' color='#f9553a' /> Zaloguj się</a></li>
                        <li><a href="SignUp"><FontAwesomeIcon icon={faUserPlus} fontSize='19px' color='#f9553a' /> Zarejestruj się</a></li>

                    </ul>

                </div>
            </header>


            <div className="home">
                <div className="container ">
                    <h1>WoodCraft Manager</h1>
                    <p>Uporządkuj swoje projekty i stwórz<br />
                        idealne miejsce do pracy dzięki aplikacji WoodCraft Manager</p>
                    <div className="button_home">
                        <a href="#pricing" className="cta-button">Sprawdź ofertę </a>
                    </div>
                </div>
            </div>

            <div className="about">
                <div className="container">
                    <h2>O nas</h2>
                    <p>Nasza firma, <span>WoodCraft Manager</span>, specjalizuje się w tworzeniu innowacyjnej aplikacji dla
                        stolarzy,
                        która umożliwia skuteczne zarządzanie postępem prac stolarskich. Nasze narzędzie, dostępne jako aplikacja
                        mobilna
                        i internetowa, pomaga stolarzom w efektywnym planowaniu i monitorowaniu projektów stolarskich. Dzięki
                        zaawansowanemu kalendarzowi i wykresom, nasi użytkownicy mają pełny wgląd w postęp każdego projektu, w tym
                        terminy
                        realizacji, zadania ukończone i harmonogram prac. Dodatkowo, WoodCraft Manager umożliwia współpracę w ramach
                        zespołu stolarskiego poprzez dodawanie nowych użytkowników i przydzielanie zadań. Możliwość dodawania budżetu
                        do
                        projektów pozwala na kontrolę wydatków i efektywne zarządzanie zasobami finansowymi. Nasza strona internetowa,
                        zaprojektowana z myślą o stolarzach, oferuje intuicyjny interfejs i inspirujące motywy graficzne. Dołącz do
                        naszej
                        społeczności stolarzy i rozpocznij nową erę efektywnego zarządzania projektami stolarskimi dzięki WoodCraft
                        Manager!
                    </p>
                    <div className="about_picture"></div>
                </div>
            </div>

            <div className="features">
                <div className="container">
                    <h1>Właściwości</h1>
                    <div className="features_container">

                        <div className="feature_1">
                            <div className="features_icon_1"></div>
                            <h2> Wygodne planowanie projektów stolarskich</h2>
                            <p>WoodCraft Manager umożliwia stolarzom efektywne tworzenie zadań, kontrolowanie czasu poświęconego na każdy
                                projekt oraz śledzenie postępu prac za pomocą zaawansowanego kalendarza.</p>
                        </div>
                        <div className="feature_2">
                            <div className="features_icon_2"></div>
                            <h2>Przejrzyste prezentowanie postępu projektów</h2>
                            <p>Aplikacja dostarcza wykresy, które w intuicyjny sposób prezentują, jakie zadania zostały już wykonane, a
                                jakie
                                są jeszcze do zrobienia.</p>
                        </div>
                        <div className="feature_3">
                            <div className="features_icon_3"></div>
                            <h2>Efektywne zarządzanie zespołem</h2>
                            <p>WoodCraft Manager umożliwia kontrolę nad wykonaniem zadań przez członków zespołu i śledzenie postępu prac
                                każdego z nich, co ułatwia efektywną współpracę i koordynację działań w zespole stolarskim.</p>
                        </div>
                        <div className="feature_4">
                            <div className="features_icon_4"></div>
                            <h2>Kontrola nad budżetem</h2>
                            <p>Pozwala na efektywne zarządzanie wydatkami i gospodarowanie zasobami finansowymi w projekcie stolarskim.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="pricing">
                <div className="container">
                    <h1>Cennik</h1>
                    <div className="pricing_wrapper">

                        <div className="pricing-tier">
                            <h3>PODSTAWOWY</h3>
                            <p>Miesięcznie: $9.99</p>
                            <p>Rocznie: $99.99</p>
                            <ul>
                                <li>Featurt 1</li>
                                <li>Featurt 2</li>
                                <li>Featurt 3</li>
                                <li>Featurt 4</li>
                                <li>Featurt 5</li>
                            </ul>
                            <button><a href="#" className="pricing_button">Subskrybuj</a></button>
                        </div>
                        <div className="pricing-tier">
                            <h3>PRO</h3>
                            <p>Miesięcznie: $19.99</p>
                            <p>Rocznie: $199.99</p>
                            <ul>
                                <li>Featurt 1</li>
                                <li>Featurt 2</li>
                                <li>Featurt 3</li>
                                <li>Featurt 4</li>
                                <li>Featurt 5</li>
                            </ul>
                            <button><a href="#" className="pricing_button">Subskrybuj</a></button>
                        </div>
                        <div className="pricing-tier">
                            <h3>PREMIUM</h3>
                            <p>Miesięcznie: $29.99</p>
                            <p>Rocznie: $299.99</p>
                            <ul>
                                <li>Featurt 1</li>
                                <li>Featurt 2</li>
                                <li>Featurt 3</li>
                                <li>Featurt 4</li>
                                <li>Featurt 5</li>
                            </ul>
                            <button><a href="#" className="pricing_button">Subskrybuj</a></button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="contact">
                <div className="container">
                    <div className="form_card_info">
                        <h3>Skontaktuj się z nami!</h3>
                        <div className="arrow_right"></div>
                        <p>Masz pytania dotyczące naszej aplikacji dla stolarzy? Chętnie na nie odpowiemy! Skontaktuj się z nami, jeśli
                            potrzebujesz informacji na temat naszych usług lub działalności. Jesteśmy gotowi pomóc w zarządzaniu postępem
                            prac
                            stolarskich i dostarczyć Ci narzędzia, które ułatwią Twoją pracę. Czekamy na Twój kontakt!</p>
                    </div>

                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Podaj adres email</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Napisz do nas !</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button>Wyślij</Button>
                    </Form>

                </div>
            </div >

            <div className="footer">

                <div className="container">
                    <div className="footer_container">
                        <p>&copy; 2023 WoodCraft Manager</p>
                    </div>
                </div>
            </div>
        </>
    )
}