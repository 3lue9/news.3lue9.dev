import React from 'react';
import './App.css';
import Card from './components/Card/Card'; // Ensure Card component is correctly imported

const App: React.FC = () => {
    return (
        <>


            {/* Main Content */}
            <div className="App">
                <h1 className="title">NAME (WIP)</h1>
                <h3 className="subtitle">The Free News Media</h3>

                <div style={{ display: 'flex', gap: '16px' }}>
                    {/* Card Components for News */}
                    <Card
                        title="News 1"
                        image="https://via.placeholder.com/300x200"
                        description="This is a description for the first sample card."
                    />
                    <Card
                        title="News 2"
                        image="https://via.placeholder.com/300x200"
                        description="This is a description for the second sample card."
                    />
                    <Card
                        title="News 3"
                        image="https://via.placeholder.com/300x200"
                        description="This is a description for the third sample card."
                    />
                </div>
            </div>
        </>
    );
};

export default App;
