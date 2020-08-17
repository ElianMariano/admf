import React from 'react';

import Header from '../Header';
import Footer from '../Footer';

interface PageDefaultProps {
    children: React.ReactNode;
}

function PageDefault(props: PageDefaultProps){
    return (
        <>
            <Header/>
                { props.children }
            <Footer/>
        </>
    );
}

export default PageDefault;