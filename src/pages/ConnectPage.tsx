import featureImgMobile from "../assets/images/illustration-sign-up-mobile.svg";
import featureImgDesktop from "../assets/images/illustration-sign-up-desktop.svg";

function ConnectPage() {
    return (
        <>
            <picture>
                <source srcSet={featureImgDesktop} media="(min-width: 768px)" />
                <img
                    className="w-full"
                    src={featureImgMobile}
                    alt=""
                    role="presentation"
                />
            </picture>
            <div className="space-y-6 px-6 py-10">
                <h1 className="text-heading-sm text-navy sm:text-heading">
                    Stay updated!
                </h1>
                <p className="text-boxy text-navy">
                    Join 60,000+ product managers receiving monthly updates on:
                </p>
                <ul className="space-y-2.5 text-body text-navy" role="list">
                    <li className="flex items-start gap-4">
                        <img
                            className="mt-[1px]"
                            src="/images/icon-list.svg"
                            alt=""
                            role="presentation"
                        />
                        <span>Product discovery and building what matters</span>
                    </li>
                    <li className="flex items-start gap-4">
                        <img
                            className="mt-[1px]"
                            src="/images/icon-list.svg"
                            alt=""
                            role="presentation"
                        />
                        <span>Measuring to ensure updates are a success</span>
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
        </>
    );
}
export default ConnectPage;
