import { useEffect, useState } from 'react';
import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { GoogleAuth, User } from '@codetrix-studio/capacitor-google-auth';

function App() {
  const [response, setResponse] = useState<User | null>(null);

  useEffect(() => {
    GoogleAuth.initialize({
      clientId: import.meta.env.GOOGLE_CLIENT_ID_IOS,
      scopes: ['profile', 'email'],
      grantOfflineAccess: true,
    });
  }, []);


  async function signInWithGoogle() {
    try {
      const response = await GoogleAuth.signIn();
      setResponse(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {response && (
        <h1>{response?.name}</h1>
      )}
      <div className="card">
        <button onClick={signInWithGoogle} disabled={!!response}>
          Google Sign In
        </button>
        {!!response &&
          (<button onClick={GoogleAuth.signOut}>
            Sign Out
          </button>)
        }
      </div>
    </>
  )
}

export default App
