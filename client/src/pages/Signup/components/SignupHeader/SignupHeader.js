import React from 'react';
import { Header } from 'semantic-ui-react';

const styles = {
    signupHeader: {
        display: "flex",
        flex: "column",
        textAlign: "center",
        justifyContent: "center",
        fontFamily: "Times New Roman",
        fontSize: "2em",
        fontWeight: "bold",
        marginTop: "0.25em",
        color: "black"
    }
}
const SignupHeader = () => (
    <Header style={styles.signupHeader}>
        <div>
            Create an account with us!
        </div>
    </Header>
)
export default SignupHeader;
