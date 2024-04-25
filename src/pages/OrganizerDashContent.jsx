import React from 'react';

const OrganizerDashContent = ({ activeTab }) => {
    return (
        <div className="content">
            {activeTab === 'Overview' && (
                <div>
                    <h2>Overview Content</h2>
                    <p>This is the overview content.</p>
                </div>
            )}
            {activeTab === 'Activities' && (
                <div>
                    <h2>Activities Content</h2>
                    <p>This is the activities content.</p>
                </div>
            )}
        </div>
    );
}

export default OrganizerDashContent;
