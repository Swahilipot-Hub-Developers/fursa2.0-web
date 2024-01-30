import { useState } from 'react';
import { FaDownLong } from 'react-icons/fa6';

const Questions = ({title, content}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleAccordion = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={`tab-title ${isExpanded ? 'active' : ''} shadow rounded col-12 col-md-6 mx-auto`} role="tab" aria-expanded={isExpanded} aria-selected={isExpanded}>
            <span className="toggle-icon toggle-icon-right" aria-hidden="false">
                <span className="toggle-icon-closed">
                    <FaDownLong/>
                </span>
            </span>
            <p className="m-0 text-white fw-bold toggle-title" onClick={toggleAccordion}>
                {title}
            </p>
            <div className={`tab-content ${isExpanded ? 'active' : ''}`} id="tab-content">
                <p>{content}</p>
            </div>
        </div>
    )
}

export default Questions;
