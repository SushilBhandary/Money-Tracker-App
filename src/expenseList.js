

const ExpenseList = ({expense, setExpense}) => {

    let sum = 0 

    return (
        
        <div>
            <div className="container ">
                <table>
                    <thead>
                        <tr>
                            <th>Expense</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {expense.map( (exp, index) => {
                            sum += parseInt( exp.amount)
                            return (
                                <tr key={index}>
                                    <td>{exp.expense}</td>
                                    <td>{exp.amount}</td>
                                </tr>
                            )
                        })}
                        
                        <tr className="total">
                            <td>Total</td>
                            <td>{sum}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ExpenseList