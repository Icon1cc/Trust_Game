import React, { useState } from "react";
import Header from "../extras/Header";
import ScrollableContent from "../extras/ScrollableContent";
import Section from "../extras/Section";
import Checkbox from "../extras/Checkbox";
import ConsentButton from "../extras/ConsentButton";

export default function InfoSheet({ next }) {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (checked) => {
        setIsChecked(checked);
    };

    return (
        <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-100 py-8 px-4">
            <div className="max-w-5xl w-full bg-white shadow-md rounded-lg p-6">
                <Header
                    title="Participant Information Sheet"
                    subtitle="Please carefully read the information below. Once you have reviewed the information, you can provide your consent to proceed."
                />
                <ScrollableContent>
                    <h2 className="text-xl font-semibold text-center mt-4 mb-2">
                        Participant information for the online study:
                    </h2>
                    <h3 className="text-lg font-bold text-center mb-4">
                        Decision Making in Social Interaction
                    </h3>
                    <Section title="Dear participant">
                        You are being invited to take part in an online research study. Before you decide to take part, it is important for you to understand why the research is being done, and what taking part will involve. Please take the time to read the following information carefully, and discuss it with others if you wish. Please ask the study staff any questions that are important to you. The study is funded by public money (from the German Research Foundation).
                    </Section>
                    <Section title="Purpose of the study">
                        This study is part of a larger project on better understanding the determinants of effective social
                        interaction. In some mental illnesses, interpersonal relationships are strained by instability, frequent
                        misunderstandings and conflict. In research, these difficulties in interpersonal relationships have so far
                        been mainly descriptive. However, to better understand and treat the relevant mechanisms, it is useful
                        to directly observe and study the behaviour that occurs in different social situations. In this study, we
                        therefore want to investigate how people behave in different social situations and what sorts of
                        interventions promote more effective interactions, and who they work for.
                    </Section>
                    <Section title="Personal benefit from participating">
                        The results from this study can contribute to learn more about social interaction. In the future, this
                        knowledge may help us guide people struggling in the social domain towards psychological treatments
                        that are more likely to work for them. Therefore, your participation could help future patients with this
                        disorder. You will not gain a personal benefit from participating in this study.
                    </Section>
                    <Section title="Duration and procedure of the study">
                        If you decide to take part, we will first ask you to fill out an online consent form, confirming you have
                        been made aware of your rights as a research participant. <br /><br />
                        You will then be asked to play some online games, that will help us better understand how different
                        people learn and make decisions. For example, one game might involve deciding which different
                        computer characters to trust to share your rewards with. We will then ask you to provide some
                        background information about yourself (e.g., your age and gender). We will not ask you to provide any
                        identifying information, such as your name or phone number. <br /><br />
                        Finally, we will ask you to fill out some questionnaires that ask about your feelings and mood,
                        personality (how you tend to think and act in different situations), or thinking styles (how you tend to
                        think about the world). <br /><br />
                        Overall, these different tasks should take about 40 minutes, spread out over 3 time points. You can
                        take a break at different points during the tasks and complete the questionnaires at a pace that suits
                        you.
                    </Section>
                    <Section title="Unintended effects/risks">
                        In the online survey, you will be asked to make simple decisions about money distributions. We do not
                        expect this study to cause you any psychological distress. If you suffer from significant distress after
                        completing the online survey, please contact one of the staff or the study management immediately
                        (Jun.-Prof. Dr. C. Korn 06221/56 4363, Klinik für Allgemeine Psychiatrie, Voßstr. 4, 69115 Heidelberg).
                        The examination can be cancelled at your request at any time without giving reasons.
                    </Section>
                    <Section title="Data protection">
                        <p>
                            The provisions of data protection law are complied with. During the online survey, your decisions and individual demographic information will be collected from you and stored electronically. This data is automatically pseudonymised by Prolific.co so that you can be compensated for your time.
                            <br /><br />
                        </p>
                        <p>
                            <strong>Pseudonymisation</strong> is the processing of personal data in such a way that the personal data can no longer be attributed to a specific data subject without the addition of additional information ("key"). This additional information is stored separately by Prolific.co and is subject to technical and organisational measures which ensure that the personal data cannot be assigned to an identified or identifiable natural person.
                            <br /><br />
                        </p>
                        <p>
                            Prolific.co has access to the pseudonymisation code but has no access to the data. We only receive the pseudonymised data that you give us, and this may therefore only be passed on to universities/clinics/companies in pseudonymised form, possibly also to countries where data protection requirements are lower than in the European Union.
                            <br /><br />
                        </p>
                        <p>
                            Third parties will not be given access to original documents. The study management will take all reasonable steps to ensure the protection of your data in accordance with European Union data protection standards. The data is secured against unauthorised access. Decryption of the data is not possible from our side. If you withdraw from the study, we can delete your data if you so wish. As soon as it is possible according to the research or statistical purpose, the personal data will be anonymised.
                            <br /><br />
                        </p>
                        <p>
                            <strong>Anonymisation</strong> is the alteration of personal data in such a way that individual details about personal and factual circumstances can no longer be attributed to a specific or identifiable natural person, or can only be attributed to a specific or identifiable natural person with a disproportionate amount of time, cost, and labour. It is not possible to draw conclusions about individuals. The data is published in anonymised form when the results are published so that other researchers can use this data to check the results and to analyse further questions. Since this data is anonymised, no one, including yourself, can draw inferences from the data to your person.
                            <br /><br />
                        </p>
                        <p>
                            The data may also be used for other/future questions if necessary. You have the right to limit the use of the data in the consent form. You have the right to request information from the person responsible (see below) about the personal data stored about you. You can also request the correction of inaccurate data as well as the deletion of the data or restriction of its processing.
                            <br /><br />
                        </p>
                        <h3 className="mt-4 font-bold">Responsible Person</h3>
                        <p>
                            Jun.-Prof. Dr. phil. C. Korn<br />
                            Sektion Soziale Neurowissenschaften, Klinik für Allgemeine Psychiatrie<br />
                            Voßstr. 4, 69115 Heidelberg<br />
                            Tel. 06221/56 4363<br />
                            E-Mail: <a href="mailto:christoph.korn@med.uni-heidelberg.de">christoph.korn@med.uni-heidelberg.de</a>
                        </p>
                        <h3 className="mt-4 font-bold">Data Protection Officer</h3>
                        <p>
                            Datenschutzbeauftragter des Universitätsklinikums Heidelberg<br />
                            Im Neuenheimer Feld 672, 69120 Heidelberg<br />
                            Tel.: 06221/56 7036<br />
                            E-Mail: <a href="mailto:Datenschutz@med.uni-heidelberg.de">Datenschutz@med.uni-heidelberg.de</a>
                        </p>
                        <h3 className="mt-4 font-bold">Supervisory Authority</h3>
                        <p>
                            Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg<br />
                            Postfach 10 29 32, 70025 Stuttgart<br />
                            Königstraße 10a, 70173 Stuttgart<br />
                            Tel.: 0711/61 55410<br />
                            Fax: 0711/61 554115<br />
                            E-Mail: <a href="mailto:poststelle@lfdi.bwl.de">poststelle@lfdi.bwl.de</a><br />
                            Internet:{" "}
                            <a
                                href="http://www.baden-wuerttemberg.datenschutz.de"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                http://www.baden-wuerttemberg.datenschutz.de
                            </a>
                        </p>
                    </Section>
                    <Section title="Insurance">
                        The employees of Heidelberg University Hospital are insured against liability claims by study
                        participants. You must immediately report any damage that you believe is attributable to the study to
                        the study director.
                    </Section>
                    <Section title="Compensation">
                        You will receive a financial compensation of 8 euros per hour for participating in this experiment, plus
                        an additional bonus that depends on your performance in the task.
                    </Section>
                    <Section title="Voluntariness / Withdrawal">
                        Participation in the study is voluntary. If you wish to participate, we ask you to sign the enclosed consent
                        form. You can revoke this consent in writing or verbally at any time without giving reasons and without
                        incurring any disadvantages. If you wish to withdraw your consent, please contact the study
                        management or the staff treating you. In the event of a revocation, you can decide whether the data
                        collected from you for study purposes should be deleted / recordings made should be destroyed or may
                        continue to be used for the purposes of the study. Even if you initially agree to further use, you can still
                        change your mind later and request deletion of the data / recordings; to do this, please also contact the
                        study management or the staff treating you. Please note that data that have already been included in
                        scientific evaluations or data / recordings that have already been anonymised can no longer be deleted
                        at your request.
                    </Section>
                    <Section title="">
                        <p>
                            <strong>If you have any questions, you can always contact Herrn Jun.-Prof. Dr. phil. Christoph Korn
                                Tel. 06221/56 4363</strong>.
                        </p>
                        <p className="mt-4">
                            We would be grateful for your participation in this research project!
                        </p>
                        <p className="mt-6 font-bold">
                            Jun.-Prof. Dr. phil. C. Korn
                        </p>
                        <p>Head of study</p>
                    </Section>
                </ScrollableContent>
                <Checkbox isChecked={isChecked} onChange={handleCheckboxChange} />
                <ConsentButton
                    isChecked={isChecked}
                    onClick={() => {
                        if (next) next();
                    }}
                />
            </div>
        </div>
    );
}
