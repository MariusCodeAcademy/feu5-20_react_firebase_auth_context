import PropTypes from 'prop-types';
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext({
  user: {},
  isLoading: false,
  login() {},
  logout() {},
  register() {},
});

// custom component to wrap app with for all authContext logic
// to be separated from app component.
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const isLoggedIn = !!user;

  function login(userObj) {
    setUser(userObj);
  }
  function logout() {
    setUser(null);
  }

  const authCtx = {
    user,
    isLoading,
    setIsLoading,
    isLoggedIn,
    login,
    logout,
  };
  return (
    <AuthContext.Provider value={authCtx}>{children}</AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array.isRequired,
    PropTypes.element.isRequired,
  ]),
};

export default AuthProvider;

// custom hook to use context in one import instead of two
export function useAuthCtx() {
  return useContext(AuthContext);
}
