import Profile from "../../Components/Profile";
import LogoutButton from "../../Components/LogoutButton";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function AddNew() {
  const { isLoading, isAuthenticated, logout } = useAuth0();

  if (!isLoading && !isAuthenticated) {
    logout({ returnTo: window.location.origin });
  }

  return isAuthenticated ? (
    <>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/update">Update</Link>
      </nav>
      <main>
        <h2>Welcome to the add new page!</h2>
      </main>
      <Profile />
      <LogoutButton />
    </>
  ) : (
    <div>
      <h1>Loading...</h1>
    </div>
  );
}