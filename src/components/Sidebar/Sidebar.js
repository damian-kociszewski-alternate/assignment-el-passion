import { ReactComponent as IconClosedIssue } from '../../assets/icons/icon-closed-issue.svg';
import { ReactComponent as IconGithub } from '../../assets/icons/icon-github.svg';
import { ReactComponent as IconOpenIssue } from '../../assets/icons/icon-open-issue.svg';
import OperatingSystemButtons from '../OperatingSystemButtons';
import SidebarItem from './_components/SidebarItem';

import './Sidebar.scss';

const Sidebar = () => (
    <div className="sidebar">
        <OperatingSystemButtons />
        
        <SidebarItem icon={IconGithub} text={'All'} totalItems={12} selected={true} />
        <SidebarItem icon={IconOpenIssue} text={'Open'} totalItems={4} selected={false} />
        <SidebarItem icon={IconClosedIssue} text={'Closed'} totalItems={8} selected={false} />
    </div>
);

export { Sidebar };
