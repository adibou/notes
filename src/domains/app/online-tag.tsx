import * as React from 'react';

export default function() {

    const [online, setOnline] = React.useState(false);
    
    React.useEffect(function() {
        window.addEventListener("load", () => {
            setOnline(navigator.onLine);
          
            window.addEventListener("online", () => {
              setOnline(true);
            });
          
            window.addEventListener("offline", () => {
              setOnline(false);
            });
          });
    }, []);

    return <>
        {online ? "online": "offline"}
    </>
}