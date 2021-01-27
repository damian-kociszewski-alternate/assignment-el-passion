import './OperatingSystemButtons.scss';

const OperatingSystemButtons = () => {
    return (
        <div className="operating-system-buttons">
            <button className="operating-system-button close" />
            <button className="operating-system-button minimize" />
            <button className="operating-system-button zoom" />
        </div>
    );
};

export { OperatingSystemButtons };
