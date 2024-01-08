import { useState } from 'react';

const Questions = ({title, content}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleAccordion = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={`tab-title ${isExpanded ? 'active' : ''}`} role="tab" aria-expanded={isExpanded} aria-selected={isExpanded}>
            <span className="toggle-icon toggle-icon-right" aria-hidden="false">
                <span className="toggle-icon-closed">
                    <i className="fas fa-caret-right"></i>
                </span>
                <span className="toggle-icon-opened">
                    <i className="toggle-icon-opened fas fa-caret-up"></i>
                </span>
            </span>
            <p className="m-0 toggle-title" onClick={toggleAccordion}>
                {title}
            </p>
            <div className={`tab-content ${isExpanded ? 'active' : ''}`} id="tab-content">
                <p>{content}</p>
            </div>
        </div>
    )
}

export default Questions;
