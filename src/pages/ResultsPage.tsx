import Button from "../components/Button";

interface ResultsPageProps {
    emailAddress: string;
    toggleResultsPage: () => void;
}

function ResultsPage({ toggleResultsPage, emailAddress }: ResultsPageProps) {
    return (
        <div className="bg-white px-6 text-navy shadow-primary sm:max-w-lg sm:rounded-lg sm:p-16">
            <img
                src="/images/icon-success.svg"
                alt=""
                className="mt-36 aspect-square w-16 sm:mt-0"
            />
            <h1 className="mt-10 text-heading-sm">Thanks for subscribing!</h1>
            <p className="mt-6 text-body">
                A confirmation email has been sent to{" "}
                <span className="font-bold">{emailAddress}</span>. Please open
                it and click the button inside to confirm your subscription.
            </p>
            <Button
                className="mt-10"
                type="button"
                handleClick={toggleResultsPage}
            >
                Dismiss message
            </Button>
        </div>
    );
}
export default ResultsPage;
