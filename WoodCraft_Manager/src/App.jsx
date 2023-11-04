import './App.scss';
import './index.scss';


import Home from './component/pages/home';
import SignIn from './component/pages/SignIn';
import SignUp from './component/pages/SignUp';
import MainApp from './component/aplication/MainApp';
import Dashboard from './component/pages/Dashboard';
import Add_Task from './component/pages/Add_Task';
import Add_Client from './component/pages/Add-Client';
import Budget from './component/pages/Budget';
import Calendar from './component/pages/Calendar';
import Static from './component/pages/Static';
import Modal from './component/aplication/Modal';
import BudgetModal from './component/pages/BudgetModal';
import TaskCard from './component/aplication/TaskCard';
import TaskForm from './component/aplication/TaskForm';
import EditableTaskForm from './component/aplication/EditableTaskForm';
import DayComponent from './component/pages/DayComponent';


import { Route, Routes, } from 'react-router-dom'

export default function App() {
    return (


        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/SignIn' element={<SignIn />} />
            <Route path='/SignUp' element={<SignUp />} />
            <Route path='/MainApp' element={<MainApp />} />
            <Route path='/Dashboard' element={<Dashboard />} />
            <Route path='/Add_Task' element={<Add_Task />} />
            <Route path='/Add_Client' element={<Add_Client />} />
            <Route path='/Budget' element={<Budget />} />
            <Route path='/Calendar' element={<Calendar />} />
            <Route path='/Static' element={<Static />} />
            <Route path='/Modal' element={<Modal />} />
            <Route path='/BudgetModal' element={<BudgetModal />} />
            <Route path='/TaskCard' element={<TaskCard />} />
            <Route path='/TaskForm' element={<TaskForm />} />
            <Route path='/EditableTaskForm' element={<EditableTaskForm />} />
            <Route path='/DayComponent' element={<DayComponent />} />
        </Routes>

    )
};






