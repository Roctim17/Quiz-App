import { Button } from "@material-ui/core";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Result.css";

const Result = ({ name, score }) => {
    const location = useLocation();

    useEffect(() => {
        if (!name) {
            location("/");
        }
    }, [name, location]);

    return (
        <div className="result">
            <span className="title">Final Score : {score}</span>
            <Button
                variant="contained"
                color="secondary"
                size="large"
                style={{ alignSelf: "center", marginTop: 20 }}
                href="/"
            >
                Go to homepage
            </Button>
        </div>
    );
};

export default Result;