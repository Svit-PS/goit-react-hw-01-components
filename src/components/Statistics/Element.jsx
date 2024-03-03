import PropTypes from 'prop-types';
import { Link } from './Statistics.styled';

export const Element = ({label,percentage}) => {
    return (
    <Link color = {getRandomHexColor()}>
      <span >{label}</span>
      <span >{percentage}%</span>
    </Link>
    )
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Element.prototype = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired  
}