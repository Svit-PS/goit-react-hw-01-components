import PropTypes from 'prop-types';
import  css  from './TransactionHistory.module.css';

export const Transaction = ({type,amount,currency}) => {
    return (
    <tr className={css.lineTable}>
      <td className={css.cellTable}>{type}</td>
      <td className={css.cellTable}>{amount}</td>
      <td className={css.cellTable}>{currency}</td>
    </tr>
    ) 
}

Transaction.prototype = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency:PropTypes.string.isRequired, 
}