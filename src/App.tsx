import React, { FC, useId } from 'react';


const App: FC = () => {
    const id = useId();

    console.log(id);
    

    return (
        <React.StrictMode>
            <h1>Hello World!</h1>
        </React.StrictMode>
    );
}


export default App;
