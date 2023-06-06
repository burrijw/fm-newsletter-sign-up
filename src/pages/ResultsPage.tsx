import Button from "../components/Button";

interface ResultsPageProps {
    emailAddress: string;
    toggleResultsPage: () => void;
}

function ResultsPage({ toggleResultsPage, emailAddress }: ResultsPageProps) {
    return (
        <>
            <p>{emailAddress}</p>
            <Button type="button" handleClick={toggleResultsPage}>
                Go Back
            </Button>
        </>
    );
}
export default ResultsPage;
