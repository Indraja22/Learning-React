import './ExpenseItem.css';

function ExpenseItem() {
    return (
        <div className='expense-item'>
            <div>20-March-2020</div>
            <div>
                <h2 className='expense-item__description'>Car Insurance</h2>
                <div className='expense-item__price'>$294.8</div>
            </div>
        </div>
    )
}

export default ExpenseItem;