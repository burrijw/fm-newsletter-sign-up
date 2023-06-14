import { useState } from "react";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";
import ConnectPage from "./pages/ConnectPage";
import ResultsPage from "./pages/ResultsPage";

function App() {
    //
    const [emailAddress, setEmailAddress] = useState("");

    const [isResultsPageVisible, setIsResultsPageVisible] = useState(false);

    function toggleResultsPage() {
        if (isResultsPageVisible) {
            setEmailAddress("");
        }
        setIsResultsPageVisible((prev) => !prev);
        window.scrollTo(0, 0);
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
