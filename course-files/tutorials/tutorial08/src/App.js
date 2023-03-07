import React from 'react';

class App extends React.Component {  

    constructor(props) {
        super(props);
        console.log('Constructor triggered', props);
    }

    render () {
        console.log('render');
        return (
            <div>

            <nav className="main-nav">
                <h1>Photo App</h1>
                {/* Navigation Links */}
            </nav>

            <aside>
                <header>
                    Profile
                    {/* Navigation Links */}
                </header>
                <div className="suggestions">
                    <p className="suggestion-text">Suggestions for you</p>
                    <div>
                        Suggestions
                        {/* Suggestions */}
                    </div>
                </div>
            </aside>

            <main className="content">
                <header className="stories">
                    Stories
                    {/* Stories */}
                </header>
                <div id="posts">
                    Posts
                    {/* Posts */}
                </div>
            </main>

            </div>
        );
    }
}

export default App;