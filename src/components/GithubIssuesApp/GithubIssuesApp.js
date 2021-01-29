import ContentArea from '../ContentArea';
import Sidebar from '../Sidebar';

import './GithubIssuesApp.scss';

const GithubIssuesApp = () => (
    <div className="github-issues-app">
        <Sidebar />
        <ContentArea />
    </div>
);

export { GithubIssuesApp };
