
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faListCheck } from '@fortawesome/free-solid-svg-icons'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { faWallet } from '@fortawesome/free-solid-svg-icons'
import { faChartSimple } from '@fortawesome/free-solid-svg-icons'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';






export default function MainApp() {

    let list = document.querySelectorAll(' li ')
    function activeLink() {


        list.forEach(item => {

            item.classList.remove("hovered");
        })
        this.classList.add("hovered");

    }
    list.forEach(item => item.addEventListener("mouseover", activeLink));


    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleNavToggle = () => {
        setIsNavOpen(!isNavOpen);
    };



    return (




        <div className='navigation'>
            <div className={`nav_content ${isNavOpen ? 'active' : ''}`}>

                <h2>

                    <div className="burger" onClick={handleNavToggle}>
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                </h2>

                <ul>
                    <li>
                        <a href='/Dashboard' className='admin' id='admin_app'>
                            <span className='icon' ><FontAwesomeIcon icon={faHouse} /></span>
                            <span className='title'>Strona główna</span>
                        </a>
                    </li>


                    <li>
                        <a href='/Add_Client' className='new_client' id='new_client_app'>
                            <span className='icon'><FontAwesomeIcon icon={faUserPlus} /></span>
                            <span className='title'>Nowy klient</span>
                        </a>
                    </li>

                    <li>
                        <a href='/Add_Task' className='add_task' id='add_task_app'>
                            <span className='icon'><FontAwesomeIcon icon={faListCheck} /></span>
                            <span className='title'>Dodaj zadanie</span>
                        </a>
                    </li>

                    <li>
                        <a href='/Calendar' className='calendar' id='calendar_app'>
                            <span className='icon'><FontAwesomeIcon icon={faCalendarDays} /></span>
                            <span className='title'>Zaplanuj spotkanie</span>
                        </a>
                    </li>

                    <li>
                        <a href='/Budget' className='budget' id='budget_app'>
                            <span className='icon'><FontAwesomeIcon icon={faWallet} /></span>
                            <span className='title'>Budżet</span>
                        </a>
                    </li>

                    <li>
                        <a href='/Static' className='Static' id='static_app'>
                            <span className='icon'><FontAwesomeIcon icon={faChartSimple} /></span>
                            <span className='title'>Statystyki</span>
                        </a>
                    </li>


                    <li>
                        <a href='/' className='log_out' id='log_out_app'>
                            <span className='icon'><FontAwesomeIcon icon={faRightFromBracket} /></span>
                            <span className='title logOut'>Wyloguj</span>
                        </a>
                    </li>
                </ul>

            </div>





        </div >


    )
}