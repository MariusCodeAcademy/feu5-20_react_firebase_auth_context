import { createContext, useContext, useState } from 'react';

const AuthContext = createContext({
  user: {},
  isLoading: false,
  login() {},
  logout() {},
  register() {},
});

// pervadinti AuthContext
AuthContext.displayName = 'Autentifikacija';

function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const authCtx = {
    user,
    isLoading,
  };
  return (
    <AuthContext.Provider value={authCtx}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;

export function useAuthCtx() {
  return useContext(AuthContext);
}
