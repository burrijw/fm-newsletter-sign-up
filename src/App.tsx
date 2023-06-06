import { useState } from "react";
import ConnectPage from "./pages/ConnectPage";
import ResultsPage from "./pages/ResultsPage";

function App() {
    const [emailAddress, setEmailAddress] = useState("");
    const [isResultsPageVisible, setIsResultsPageVisible] = useState(false);
    function toggleResultsPage() {
        if (isResultsPageVisible) {
            setEmailAddress("");
        }
        setIsResultsPageVisible((prev) => !prev);
    }
    return (
        <>
            {!isResultsPageVisible ? (
                <ConnectPage
                    toggleResultsPage={toggleResultsPage}
                    emailAddress={emailAddress}
                    setEmailAddress={setEmailAddress}
                />
            ) : (
                <ResultsPage
                    toggleResultsPage={toggleResultsPage}
                    emailAddress={emailAddress}
                />
            )}
        </>
    );
}

export default App;
