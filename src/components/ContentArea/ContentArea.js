import DateDivider from '../DateDivider';
import IssueItem from '../IssueItem';

import './ContentArea.scss';

const ContentArea = () => {
    return (
        <div className="content-area">
            <DateDivider date={'19-07-2016'} />
            <IssueItem title={'123'} starred={true} />
            <IssueItem title={'123'} starred={false} />
            
            <DateDivider date={'18-07-2016'} />
            <IssueItem title={'123'} starred={true} />
            
            <DateDivider date={'15-07-2016'} />
            <IssueItem title={'123'} starred={false} />
            
            <DateDivider date={'14-07-2016'} />
            <IssueItem title={'123'} starred={false} />
            
            <DateDivider date={'12-07-2016'} />
            <IssueItem title={'123'} starred={true} />
            
            <DateDivider date={'10-07-2016'} />
            <IssueItem title={'123'} starred={false} />
        </div>
    );
};

export { ContentArea };
