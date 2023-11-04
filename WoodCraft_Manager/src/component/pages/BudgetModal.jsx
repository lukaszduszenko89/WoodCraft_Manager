

export default function BudgetModal({ closeModal, addBudget }) {
    const [advancePayment, setAdvancePayment] = useState(0);
    const [finalAmount, setFinalAmount] = useState(0);
    const [isPaid, setIsPaid] = useState(false);

    const handleSave = () => {
        const newBudgetData = {
            advancePayment,
            finalAmount,
            isPaid,
        };
        addBudget(newBudgetData);
        closeModal();
    };

    return (
        <div className="modal">
            <div className="modal-container" onClick={(e) => e.target.className === "modal-container" && closeModal()}>
                <form>
                    <div className="form-group">
                        <label htmlFor="advancePayment">Advance Payment:</label>
                        <input
                            type="number"
                            value={advancePayment}
                            onChange={(e) => setAdvancePayment(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="finalAmount">Final Amount Owed:</label>
                        <input
                            type="number"
                            value={finalAmount}
                            onChange={(e) => setFinalAmount(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="isPaid">Has the Amount Been Paid?</label>
                        <input
                            type="checkbox"
                            checked={isPaid}
                            onChange={(e) => setIsPaid(e.target.checked)}
                        />
                    </div>
                    <button type="submit" className="btn-modal" onClick={handleSave}>
                        Save
                    </button>
                </form>
            </div>
        </div>
    );
}