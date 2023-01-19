import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddExpense = ({expense, setExpense}) => {

    const [exp, setExp] = useState('')
    const [amount, setAmount] = useState('')

    const submit = () => {
        if (!(exp && amount)) {
            return toast.error('Enter expense/amount', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }
        setExpense([...expense,{'expense' : exp, 'amount' : amount}])
        setExp('')
        setAmount('')
        toast.success('Added Successfully', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    }

  return (
    <div>
        <div className="container inpt">
            <div className="inputs">
                <input value={exp} type='text' name="Expense Name" placeholder="Enter expense name " onChange={e => setExp(e.target.value)}/>
                <input value={amount} type='number' name="Expense Amount" placeholder="Enter expense amount" onChange={e => setAmount(e.target.value)} />
            </div>
            <div className="button">
                <button type='button' onClick={submit}>Add</button>
            </div>
        </div>
        <ToastContainer />
    </div>
    
  )
}

export default AddExpense
