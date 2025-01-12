import React, { useState } from "react";
import Header from "../extras/Header";
import ScrollableContent from "../extras/ScrollableContent";
import Section from "../extras/Section";
import Checkbox from "../extras/Checkbox";
import ConsentButton from "../extras/ConsentButton";

export default function TermsAndConditions({ next }) {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (checked) => {
        setIsChecked(checked);
    };

    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gray-100 py-4 px-4">
            {/* Main Content */}
            <div className="max-w-5xl w-full bg-white shadow-md rounded-lg overflow-hidden">
                {/* UCL Logo Banner */}
                <img
                    src="/images/uclBannerRed.jpg"
                    alt="UCL Banner"
                    className="w-full object-cover"
                />

                {/* Content Section */}
                <div className="p-6">
                    <Header
                        title="A study about decision-making in a multiplayer context"
                    />
                    <ScrollableContent>
                        <Section title="Information about this study"> <br />
                            Thank you for considering taking part in this research. Please read the following information carefully.
                            <ul className="list-disc list-inside mt-2">
                                <li>The approximate duration of this study is around <strong>30 minutes</strong>.</li>
                                <li>You will be paid <strong>£4</strong> for completing the experiment.</li>
                                <li>
                                    In addition to payment for your time, <strong>you could gain a bonus payment based on your performance</strong>.
                                    Please read the instructions carefully to find out how to gain the bonus.
                                </li>
                                <li>Participation in this study is <strong>entirely anonymous</strong>. Data is collected and stored in accordance with the Data Protection Act 2018.</li>
                                <li>
                                    You are free to end the study at any time. However, please note that <strong>we are only able to pay you if you complete the whole study.</strong>
                                </li>
                            </ul>
                        </Section>

                        <Section title="Eligibility">
                            <ul className="list-disc list-inside">
                                <li>You are eligible to take part if you are <strong>at least 18 years of age</strong>.</li>
                                <li>The study must be completed on a <strong>desktop or laptop</strong>. If you are currently using a mobile device or tablet, please switch to a laptop or desktop computer before starting this study.</li>
                            </ul>
                        </Section>

                        <Section title="What is this study about?">
                            This study is about a multiplayer game where you will be paired with another anonymous participant. <strong> Once the
                                study has begun, please do not refresh the page or leave the study; otherwise, your data will be lost, and we will be unable to pay you.</strong>
                        </Section>

                        <Section title="Participant’s Statement">
                            By ticking the box below, I consent to the following: <br />
                            <ul className="list-disc list-inside mt-2">
                                <li><strong>I have read and understood the Information Sheet. I have had an opportunity to consider the information and what will be expected of me.</strong></li>
                                <li>
                                    I consent to the processing of my personal data for the purposes explained to me in the Information Sheet. I understand that my information will be handled in
                                </li>
                                <li>
                                    I understand that I am free to withdraw from this study at any time without giving a reason, and this will not affect my future medical care or legal rights.
                                </li>
                                <li>
                                    I understand the potential benefits and risks of participating, the support available to me should I become distressed during the research, and whom to contact if I wish to lodge a complaint.
                                </li>
                                <li>I confirm that I meet the inclusion criteria.</li>
                                <li>
                                    I understand that my anonymised personal data can be shared with others for future research, shared in public databases, and in scientific reports.
                                </li>
                                <li>
                                    I understand that the data acquired is for research purposes and agree to it being kept and analysed even if and after I withdraw from the study.
                                </li>
                                <li>I am aware of who I can contact should I have any questions or if any issues arise.</li>
                                <li>I voluntarily agree to take part in this study.</li>
                            </ul>
                        </Section>
                    </ScrollableContent>
                    <Checkbox isChecked={isChecked} onChange={handleCheckboxChange} />
                    <ConsentButton
                        isChecked={isChecked}
                        onClick={() => {
                            if (next) next(); // Navigate to the next step
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
