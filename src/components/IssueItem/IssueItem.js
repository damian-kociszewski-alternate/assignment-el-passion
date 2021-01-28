import Star from '../Star';
import './IssueItem.scss';

const IssueItem = ({ title, starred }) => (
    <div className="issue-item">
        <span>{title}</span>
        
        <button className="issue-item-star-button">
            <Star selected={starred} />
        </button>
    </div>
);

export { IssueItem };
