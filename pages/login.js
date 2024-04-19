import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../lib/firebase';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                router.push('/dashboard');
            }
        });

        return () => unsubscribe();
    }, [router]);

    const handleLogin = async (event) => {
        event.preventDefault();
        setError('');

        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.push('/dashboard');
        } catch (error) {
            setError(error.message);
        }
    };

    const navigateToSignUp = () => {
        router.push('/signup');
    };

    return (
        <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto', color: 'var(--color-latte)' }}>
            <h1 style={{ textAlign: 'center'}}>Login</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ padding: '10px', borderRadius: '5px' }}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ padding: '10px', borderRadius: '5px' }}
                />
                <button type="submit" style={{background: 'var(--color-macchiato)', color: 'var(--color-latte', padding: '10px', borderRadius: '5px', border: 'none' }}>Login</button>
            </form>
            <p style={{ textAlign: 'center', marginTop: '20px' }}>Don&apos;t have an account?{''}
                <button onClick={navigateToSignUp} style={{ background: 'transparent', border: 'none', color: 'var(--color-frappe', cursor: 'pointer' }}>Sign Up</button>
            </p>
        </div>
    );
}