import { MenuItem, TextField } from "@material-ui/core";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Categories from "../Component/Categories";
import "./Home.css";


const Home = ({ name, setName, fetchQuestions }) => {
    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [error, setError] = useState(false);
    const navigation = useNavigate()



    const handleSubmit = () => {
        if (!category || !difficulty || !name) {
            setError(true);
            return;
        } else {
            setError(false);
            fetchQuestions(category, difficulty);
            navigation("/quiz");
        }
    };

    return (
        <div className="content">
            <div className="settings">
                <span style={{ fontSize: 30 }}>Chose Your Option</span>
                <div className="settings__select">
                    {error && toast.error("Please Fill all the feilds")}
                    <TextField
                        style={{ marginBottom: 25 }}
                        label="Enter Your Name"
                        variant="outlined"
                        onBlur={(e) => setName(e.target.value)}
                    />
                    <TextField
                        select
                        label="Select Category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        variant="outlined"
                        style={{ marginBottom: 30 }}
                    >
                        {Categories.map((cat) => (
                            <MenuItem key={cat.category} value={cat.value}>
                                {cat.category}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        select
                        label="Select Difficulty"
                        value={difficulty}
                        onChange={(e) => setDifficulty(e.target.value)}
                        variant="outlined"
                        style={{ marginBottom: 30 }}
                    >
                        <MenuItem key="Easy" value="easy">
                            Easy
                        </MenuItem>
                        <MenuItem key="Medium" value="medium">
                            Medium
                        </MenuItem>
                        <MenuItem key="Hard" value="hard">
                            Hard
                        </MenuItem>
                    </TextField>
                    <button className="btn btn-info"
                        variant="contained"
                        size="large"
                        onClick={handleSubmit}
                    >
                        Start Quiz
                    </button>
                </div>
            </div>
            <img src="https://i.ibb.co/567cV2H/fabulous-quiz-1.png" className="banner" alt="quiz app" />
        </div>
    );
};

export default Home;