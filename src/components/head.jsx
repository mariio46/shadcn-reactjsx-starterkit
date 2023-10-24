import { useEffect } from 'react';

export function Head({ title = 'Home' }) {
    return useEffect(() => {
        document.title = `${title} / React Starterkit`;
    }, []);
}
