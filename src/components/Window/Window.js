import ContentArea from '../ContentArea';
import Sidebar from '../Sidebar';

import './Window.scss';

const Window = () => (
    <div className="window">
        <div className="window-inner">
            <Sidebar />
            <ContentArea />
        </div>
    </div>
);

export { Window };
