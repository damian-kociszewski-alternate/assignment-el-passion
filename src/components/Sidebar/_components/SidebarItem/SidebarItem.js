import clsx from 'clsx';

import './SidebarItem.scss';

const SidebarItem = ({ icon: Icon, text, totalItems, selected }) => {
    return (
        <div className={clsx('sidebar-item', { 'selected': selected })}>
            <div className="sidebar-item-part center-with-flex">
                <div className="sidebar-item-part-icon center-with-flex">
                    <Icon />
                </div>
                
                <span className="sidebar-item-part-text center-with-flex">
                    {text}
                </span>
            </div>
            
            <div className="sidebar-item-part sidebar-item-part-total-items center-with-flex">
                {totalItems}
            </div>
        </div>
    );
};

export { SidebarItem };
