import React from 'react';
import { Header } from 'semantic-ui-react';
import "./styles.css";

export default function Header({ children }) {
    return (
        <div>
            <Header fluid as="h1">
                {children}
            </Header>
        </div>
    );
}
