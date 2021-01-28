import './DateDivider.scss';

const DateDivider = ({ date }) => (
    <div className="date-divider">
        <span className="date-divider-text">{date}</span>
    </div>
);

export { DateDivider };
