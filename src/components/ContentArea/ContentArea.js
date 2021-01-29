import { IssuesGroup } from '../IssuesGroup/IssuesGroup';

import './ContentArea.scss';

const ContentArea = () => {
    const issues = {
        '19-07-2020': [
            { id: '1', title: 'title 1', starred: true },
            { id: '2', title: 'title 2', starred: false },
            { id: '3', title: 'title 3', starred: false }
        ],
        '13-07-2020': [
            { id: '4', title: 'title 4', starred: true },
            { id: '5', title: 'title 5', starred: false }
        ],
        '12-07-2020': [
            { id: '6', title: 'title 6', starred: true },
            { id: '7', title: 'title 7', starred: true },
            { id: '8', title: 'title 8', starred: false }
        ],
        '11-07-2020': [
            { id: '9', title: 'title 9', starred: true },
            { id: '10', title: 'title 10', starred: false },
            { id: '11', title: 'title 11', starred: true }
        ],
        '10-07-2020': [
            { id: '12', title: 'title 12', starred: true }
        ]
    };
    
    return (
        <div className="content-area">
            {
                Object.keys(issues).map((issueKey) => (
                    <IssuesGroup key={issueKey} date={issueKey} issues={issues[issueKey]} />)
                )
            }
        </div>
    );
};

export { ContentArea };
