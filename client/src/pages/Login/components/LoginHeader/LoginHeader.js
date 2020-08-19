import React from 'react';
import { Header } from 'semantic-ui-react';
import "./styles.css";

const styles = {
    headerColor: {
        float: "left",
        color: "#f27405",
        fontFamily: "Times New Roman",
        fontSize: 45,
        fontWeight: "bold"
    },
    headerPosition: {
        position: "absolute",
        top: "calc(50% - 35px)",
        left: "calc(50% - 255px)",
        zIndex: 2
    },
    spanColor: {
        color: "black"
    }
    
    
}

const LoginHeader = () => (
    <Header style={styles.headerColor}>
        <div style={styles.headerPosition}>
            Job<span style={styles.spanColor}>Spot</span>
        </div>
    </Header>
)
export default LoginHeader;