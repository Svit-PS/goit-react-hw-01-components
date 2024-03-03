import { Element } from './Element.jsx'
import { Container, List } from './Statistics.styled.js'
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
    return (
        <Container>
            {title && (<h2>{title}</h2>)}
            <List >
                {stats.map(({ id, label, percentage }) =>
                (<Element 
                        key= {id}
                        label={label}
                        percentage={percentage}
                    />
                ))
                }
  </List>
</Container>
    )
}

Statistics.prototype = {
    title : PropTypes.string,
    stats : PropTypes.arrayOf(PropTypes.array).isRequired,
}