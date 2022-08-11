import PropTypes from 'prop-types';

export const Statistics = ({ list, total, positivePercentage }) => { 
    return (
        <>
            <ul>
                {Object.keys(list).map(item => (
                    <li key={item}>{item}: {list[item]}</li>
                ))}
            </ul>
            <p>Total: {total}</p>
            <p>Positive feedback: {positivePercentage}%</p>
        </>
    );
}

Statistics.propTypes = {
    list: PropTypes.objectOf(PropTypes.number).isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}