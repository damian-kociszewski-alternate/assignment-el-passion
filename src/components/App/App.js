import Desktop from '../Desktop';
import GithubIssuesApp from '../GithubIssuesApp';
import Window from '../Window';

import './App.scss';

const App = () => (
    <Desktop>
        <Window>
            <GithubIssuesApp />
        </Window>
    </Desktop>
);

export { App };
