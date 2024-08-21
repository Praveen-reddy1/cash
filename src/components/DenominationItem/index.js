// Write your code here

import CashWithdrawal from '../CashWithdrawal'

import './index.css'

const DenominationItem = props => {
  const {denominationDetails, updateBalance} = props
  const {value} = denominationDetails

  const onClickBalance = () => {
    updateBalance(value)
  }

  return (
    <li className="item-container">
      <button type="button" className="button" onClick={onClickBalance}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
