import { useEffect } from 'react';
import { useRouter } from 'next/router';

const withAuth = (WrappedComponent, role) => {
  const AuthenticatedComponent = (props) => {
    const router = useRouter();

    useEffect(() => {
      const accessToken = localStorage.getItem('access_token');

      if (!accessToken) {
        redirectToLogin();
      } else {
        // Check token validity with the server using fetch
        fetch('http://127.0.0.1:8000/api/token/verify/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token: accessToken }),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error('Token verification failed');
            }
            // Token is valid, render the wrapped component
          })
          .catch(() => {
            redirectToLogin();
          });
      }
    }, []);

    const redirectToLogin = () => {
      const loginRoute = role === 'employer' ? '/employer/login' : '/seeker/login';
      router.push(loginRoute);
    };

    return <WrappedComponent {...props} />;
  };

  return AuthenticatedComponent;
};

export default withAuth;
