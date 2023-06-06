import featureImgMobile from "../assets/images/illustration-sign-up-mobile.svg";
import featureImgDesktop from "../assets/images/illustration-sign-up-desktop.svg";
import Button from "../components/Button";
import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";

interface ConnectPageProps {
    emailAddress: string;
    setEmailAddress: Dispatch<SetStateAction<string>>;
    toggleResultsPage: () => void;
}

function ConnectPage({
    toggleResultsPage,
    emailAddress,
    setEmailAddress,
}: ConnectPageProps) {
    //

    return (
        <div
            className={clsx(
                "mx-auto",
                "sm:container sm:mb-6 sm:rounded-b-md sm:bg-white sm:shadow-primary",
                "lg:flex lg:max-w-[928px] lg:flex-row-reverse lg:items-center lg:gap-16 lg:rounded-lg lg:bg-white lg:p-6"
            )}
        >
            <picture role="presentation">
                <source srcSet={featureImgDesktop} media="(min-width: 60rem)" />
                <img
                    className="lg:rounded-none block w-full"
                    src={featureImgMobile}
                    alt=""
                    role="presentation"
                />
            </picture>
            <div className="px-6 pb-6 pt-10 lg:ml-10 lg:max-w-[376px] lg:p-0">
                <div className="space-y-6">
                    <h1 className="text-heading-sm text-navy lg:text-heading">
                        Stay updated!
                    </h1>
                    <p className="text-boxy text-navy">
                        Join 60,000+ product managers receiving monthly updates
                        on:
                    </p>
                    <ul className="space-y-2.5 text-body text-navy" role="list">
                        <li className="flex items-start gap-4">
                            <img
                                className="mt-[1px]"
                                src="/images/icon-list.svg"
                                alt=""
                                role="presentation"
                            />
                            <span>
                                Product discovery and building what matters
                            </span>
                        </li>
                        <li className="flex items-start gap-4">
                            <img
                                className="mt-[1px]"
                                src="/images/icon-list.svg"
                                alt=""
                                role="presentation"
                            />
                            <span>
                                Measuring to ensure updates are a success
                            </span>
                        </li>
                        <li className="flex items-start gap-4">
                            <img
                                className="mt-[1px]"
                                src="/images/icon-list.svg"
                                alt=""
                                role="presentation"
                            />
                            <span>And much more!</span>
                        </li>
                    </ul>
                </div>
                <form className="mt-10" onSubmit={toggleResultsPage}>
                    <div className="flex justify-between text-body-sm">
                        <label className="text-navy" htmlFor="email">
                            Email address
                        </label>
                        <p
                            className="hidden text-vermillion"
                            id="error-message"
                        >
                            Oops! Wrong format
                        </p>
                    </div>
                    <input
                        className={clsx(
                            "focus mt-2 w-full rounded-sm border border-grey px-6 py-4 text-body text-navy",
                            "placeholder:text-grey",
                            "focus-visible:border-navy"
                        )}
                        type="email"
                        name="email address"
                        id="email"
                        value={emailAddress}
                        required
                        placeholder="you@example.com"
                        onChange={(event) => {
                            setEmailAddress(event.target.value);
                        }}
                    />
                    {/* TODO: maybe fix the button hover so it's transitionable using a pseudo element and opacity */}
                    <Button type="submit">
                        Subscribe to monthly newsletter
                    </Button>
                </form>
            </div>
        </div>
    );
}
export default ConnectPage;
