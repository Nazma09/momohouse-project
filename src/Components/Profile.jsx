import { useAuth0 } from "@auth0/auth0-react";

function Profile() {
    const { user, isAuthenticated, logout } = useAuth0();

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            {isAuthenticated ? (
                <div className="bg-white shadow-lg rounded-2xl p-6 w-96 text-center">
                    <img 
                        src={user?.picture} 
                        alt="User Profile" 
                        className="w-28 h-28 mx-auto rounded-full border-4 border-blue-500 shadow-sm"
                    />
                    <h1 className="text-2xl font-semibold text-gray-800 mt-4">
                        Welcome, {user?.name}!
                    </h1>
                    <p className="text-gray-600 mt-2">📧 {user?.email}</p>
                    
                    <button
                        onClick={() => logout({ returnTo: window.location.origin })}
                        className="mt-5 px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition"
                    >
                        Logout
                    </button>
                </div>
            ) : (
                <div className="text-xl font-semibold text-gray-600">
                    Loading...
                </div>
            )}
        </div>
    );
}

export default Profile;
