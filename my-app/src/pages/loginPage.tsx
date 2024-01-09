import { supabase } from '../supabase/supabase';
import { Auth } from '@supabase/auth-ui-react';
import { useNavigate } from 'react-router-dom';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useEffect } from 'react';

export default function Login() {
    const navigate = useNavigate();

    useEffect(() => {
        supabase.auth.onAuthStateChange(async (event) => {
            console.log(event);
            if (event === 'SIGNED_IN') {
                navigate('/success');
            } else {
                navigate('/');
            }
        });
    }, [navigate]);

    return (
        <Auth
            supabaseClient={supabase}
            theme="dark"
            appearance={{ theme: ThemeSupa }}
            providers={[]}
            showLinks={false}
        />
    );
}
