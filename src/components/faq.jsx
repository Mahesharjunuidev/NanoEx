import React from 'react';

export default function Faq({ faqData }) {
    const faqTitle = "FAQs";

    return (
        <div className='faq container'>
            <div className='row justify-content-center'>
                <div className='col-md-11'>
                    <h1 className='text-start text-md-center'>{faqTitle}</h1>
                    <div className="accordion" id="accordionExample">
                        {faqData?.map((faqitem, index) => {
                            const { faqTitle, faqDes, show } = faqitem; // Destructuring faqitem properties
                            const collapseId = `collapse${index}`;
                            const headingId = `heading${index}`;
                            const showClass = show ? 'show' : '';
                            const expanded = show ? 'true' : 'false';

                            return (
                                <div className="accordion-item" key={index}>
                                    <h2 className="accordion-header" id={headingId}>
                                        <button
                                            className={`accordion-button ${!show ? 'collapsed' : ''}`}
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target={`#${collapseId}`}
                                            aria-expanded={expanded}
                                            aria-controls={collapseId}
                                        >
                                            {faqTitle}
                                        </button>
                                    </h2>
                                    <div
                                        id={collapseId}
                                        className={`accordion-collapse collapse ${showClass}`}
                                        aria-labelledby={headingId}
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body">{faqDes}</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
