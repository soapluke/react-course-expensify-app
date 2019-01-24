import React from 'react';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import moment from 'moment';

const ExpenseListItem = ({ id, description, amount, createdAt }) => {
    const formattedAmount = numeral(amount / 100).format('$0,0.00');

    return (
        <Link className="list-item" to={`/edit/${id}`}>
            <div>
                <h3 className="list-item__title">{description}</h3>
                <span className="list-item__sub-title">{moment(createdAt).format('MMMM Do, YYYY')}</span>
            </div>
            <h3 className="list-item__data">{formattedAmount}</h3>
        </Link>
    );
}

export default ExpenseListItem;