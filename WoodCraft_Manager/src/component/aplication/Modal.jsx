import { useState } from "react";
import AddClient from "../pages/Add-Client"

export default function Modal({ closeModal, handleAction, operationType, formData }) {

    const [localFormData, setLocalFormData] = useState(formData || {
        name: "",
        lastName: "",
        email: "",
        phone: "",
        city: "",
        state: "Rozpoczęta"
    });


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLocalFormData({ ...localFormData, [name]: value });
    };

    const handleSave = () => {
        handleAction(localFormData, operationType);
        closeModal();
    }





    return (



        <div className="modal">
            <div className="modal-container" onClick={(e) => {
                if (e.target.className === "modal-container")
                    closeModal();
            }}>
                <form>
                    <div className="form-group">
                        <label htmlFor="Imię">Imię</label>
                        <input className="modalInput" type="text" name="name" id="name" value={localFormData.name} onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Nazwisko">Nazwisko</label>
                        <input className="modalInput" type="text" name="lastName" id="lastName" value={localFormData.lastName} onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Email">Adres email</label>
                        <input className="modalInput" type="email" name="email" id="email" value={localFormData.email} onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Phone">Numer telefonu</label>
                        <input className="modalInput" type="text" name="phone" id="phone" value={localFormData.phone} onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Miasto">Miasto</label>
                        <input className="modalInput" type="text" name="city" id="city" value={localFormData.city} onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Status">Status współpracy</label>
                        <select name="state" id="state" value={localFormData.state} onChange={handleInputChange} >
                            <option className="started" value="Started" onChange={handleInputChange}>Rozpoczęta</option>
                            <option className="finished" value="Zakończona" onChange={handleInputChange}>Zakończona</option>
                        </select>
                    </div>
                    <button type="submit" className="btn-modal" onClick={handleSave}>{operationType == 'add' ? 'Dodaj' : 'Zapisz'}</button>
                </form>
            </div>
        </div>


    )
}

<AddClient />


