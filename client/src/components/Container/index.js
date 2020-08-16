import React from 'react'
import { Container} from 'semantic-ui-react'

export default function Container({ children }) {
    return (
        <div>
            <Container fluid>
                {children}
            </Container>
        </div>
    );
}
