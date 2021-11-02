import '../styles/sidebar.css'

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <div className="logo-container">
                <h3>LOGO PLACEHOLDER</h3>
            </div>
            <div className="buttons-container">
                <button>Home</button>
                <button>My Tasks</button>
                <button>Inbox</button>
                <button>Reporting</button>
                <button>Portfolios</button>
                <button>Goals</button>
            </div>
            <div className="favorites-container">
                <h4>Favorites</h4>
                {/* Favorite State Goes Here */}
                <button>Show more</button>
            </div>
            <div className="saved-searches-container">
                <h4>Saved Searches</h4>
                <button>Tasks I've created</button>
                <button>Tasks I've assigned to others</button>
                <button>Recently completed tasks</button>
                <button>Messages I've sent</button>
                <button>Messeages I've received</button>
            </div>
            <div className="design-container">
                <h4>Design</h4>
            </div>
            <div className="invite-container">
                <button>Invite Teammates</button>
            </div>
            <div className="getting-started-container">
                <button>Help & Getting Started</button>
            </div>
        </div>
    )
}

export default Sidebar
