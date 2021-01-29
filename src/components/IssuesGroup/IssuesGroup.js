import DateDivider from '../DateDivider';
import IssueItem from '../IssueItem';

import './IssuesGroup.scss';

const IssuesGroup = ({ date, issues }) => (
    <div className="issues-group">
        <DateDivider date={date} />
        
        {
            issues.map(({ id, title, starred }) => <IssueItem key={id} title={title} starred={starred} />)
        }
    </div>
);

export { IssuesGroup };
