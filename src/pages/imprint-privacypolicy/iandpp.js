import { Heading } from 'components/Heading';
import { Meta } from 'components/Meta';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import { Fragment } from 'react';
import styles from './iandpp.module.css';
import {classes, cssProps} from "../../utils/style";

export function iandpp() {
  return (
    <section
      className={styles.section}
      data-light={true}
      data-full-height={true}
    >
      <Meta title="Imprint & Privacy Policy"/>
      <Transition in>
        {visible => (
          <Fragment>
            <Section className={classes(styles.sectionInner, styles.page)} data-padding={"both"}>
              <div className={styles.text}>
                <Heading
                  className={classes(styles.title)}
                  data-visible={visible}
                  level={2}
                  weight="bold"
                >
                  Imprint
                </Heading>

                <Heading
                  className={classes(styles.title)}
                  data-visible={true}
                  level={3}
                  weight="bold"
                >
                  information according to § 5 TMG
                </Heading>
                Lorenz Gabriel Schreyer<br/>
                Hauptstraße 57<br/>
                85309 Puch

                <Heading
                  className={classes(styles.title)}
                  data-visible={true}
                  level={3}
                  weight="bold"
                >
                  Contact
                </Heading>
                Phone: +49 17634285299<br/>
                E-Mail: dev@lorenzschreyer.de

                <Heading
                  className={classes(styles.title)}
                  data-visible={true}
                  level={3}
                  weight="bold"
                >
                  Editorially responsible
                </Heading>
                Lorenz Gabriel Schreyer
              </div>
            </Section>
            <Section className={classes(styles.sectionInner, styles.page)} data-padding={"both"}>
              <div className={styles.text}>
                <Heading
                  className={classes(styles.title)}
                  data-visible={visible}
                  level={2}
                  weight="bold"
                >
                  Privacy policy
                </Heading>
                <Heading
                  className={classes(styles.title)}
                  data-visible={true}
                  level={3}
                  weight="bold"
                >
                  1. Data protection at a glance
                </Heading>
                <Heading
                  className={classes(styles.title)}
                  data-visible={true}
                  level={4}
                  weight="bold"
                >
                  General information
                </Heading>
                The following information provides a simple overview of what happens to your personal data when you visit this website.
                when you visit this website. Personal data is any data that can be used to personally identify you.
                personally identifiable. For detailed information on the subject of data protection
                our privacy policy listed below this text.

                <Heading
                  className={classes(styles.title)}
                  data-visible={true}
                  level={4}
                  weight="bold"
                >
                  Data collection on this website
                </Heading>
                <Heading
                  className={classes(styles.title)}
                  data-visible={true}
                  level={5}
                  weight="bold"
                >
                  Who is responsible for data collection on this website?
                </Heading>
                Data processing on this website is carried out by the website operator. His contact details
                can be found in the "Notice about the responsible party" section of this privacy policy.

                <Heading
                  className={classes(styles.title)}
                  data-visible={true}
                  level={5}
                  weight="bold"
                >
                  How do we collect your data?
                </Heading>
                On the one hand, your data is collected by you providing it to us. This can be, for example
                Data that you enter in a contact form.<br/><br/>
                Other data is collected automatically or after your consent when you visit the website through our IT systems.
                This is mainly technical data (e.g. Internet browser, operating system or time of the page
                of the page view). This data is collected automatically as soon as you enter this website.

                <Heading
                  className={classes(styles.title)}
                  data-visible={true}
                  level={5}
                  weight="bold"
                >
                  What do we use your data for?
                </Heading>
                Some of the data is collected to ensure error-free provision of the website. Other
                data may be used to analyze your user behavior.

                <Heading
                  className={classes(styles.title)}
                  data-visible={true}
                  level={5}
                  weight="bold"
                >
                  What rights do you have regarding your data?
                </Heading>
                You have the right at any time to receive information free of charge about the origin, recipients and purpose of your
                stored personal data. You also have the right to demand the correction or
                deletion of this data. If you have given your consent to data processing,
                you can revoke this consent at any time for the future. You also have the right, under
                certain circumstances, to request the restriction of the processing of your personal data.<br/><br/>
                Furthermore, you have the right to lodge a complaint with the competent supervisory authority.<br/><br/>
                For this purpose, as well as for further questions on the subject of data protection, you can contact us at any time.

                <Heading
                  className={classes(styles.title)}
                  data-visible={true}
                  level={3}
                  weight="bold"
                >
                  2. Hosting
                </Heading>
                We host the contents of our website internally on our own servers.
                The personal data collected on this website is stored on our internal servers.
                This may include, but is not limited to, IP addresses, contact requests, meta and communication data,
                contract data, contact details, names, website accesses and other data generated via a website.<br/><br/>
                Internal hosting is carried out for the purpose of contract fulfillment vis-à-vis our potential and
                existing customers (Art. 6 para. 1 lit. b DSGVO) and in the interest of a secure, fast and efficient
                provision of our online offer by internal resources. Insofar as a corresponding consent has been requested,
                the processing is carried out exclusively on the basis of Art. 6 para. 1 lit. a DSGVO and § 25 para.
                1 TTDSG, insofar as the consent includes the storage of cookies or access to information in the user's
                terminal device (e.g. device fingerprinting) as defined by the TTDSG. The consent can be revoked at any time.<br/><br/>
                Our internal resources will only process your data to the extent necessary to fulfill their service
                obligations and follow our instructions regarding this data.

                <Heading
                  className={classes(styles.title)}
                  data-visible={true}
                  level={3}
                  weight="bold"
                >
                  3. General notes and mandatory information
                </Heading>
                <Heading
                  className={classes(styles.title)}
                  data-visible={true}
                  level={4}
                  weight="bold"
                >
                  Data protection
                </Heading>
                The operators of these pages take the protection of your personal data very seriously. We treat your
                personal data confidentially and in accordance with the legal data protection regulations as well as this
                this privacy policy.<br/><br/>
                When you use this website, various personal data are collected.
                Personal data is data with which you can be personally identified. This
                Privacy Policy explains what data we collect and what we use it for. It also explains how
                and for what purpose this is done.<br/><br/>
                We would like to point out that data transmission on the Internet (e.g. when communicating by e-mail) can have
                can have security gaps. A complete protection of the data against access by third parties is not
                possible.

                <Heading
                  className={classes(styles.title)}
                  data-visible={true}
                  level={4}
                  weight="bold"
                >
                  Note on the responsible party
                </Heading>
                The responsible party for data processing on this website is:<br/><br/>
                Lorenz Gabriel Schreyer<br/><br/>
                Hauptstraße 57<br/>
                85309 Puch<br/><br/>
                Phone: +49 17634285299<br/>
                E-mail: dev@lorenzschreyer.de<br/><br/>
                The responsible party is the natural or legal person who, alone or jointly with others, decides on
                the purposes and means of the processing of personal data (e.g. names, e-mail addresses, etc.).
                decides.

                <Heading
                  className={classes(styles.title)}
                  data-visible={true}
                  level={4}
                  weight="bold"
                >
                  Storage period
                </Heading>
                Unless a more specific storage period has been specified within this data protection statement, your personal data will remain
                Your personal data will remain with us until the purpose for processing the data no longer applies. If you assert a
                legitimate request for deletion or revoke consent for data processing,
                your data will be deleted, unless we have other legally permissible reasons for storing your
                personal data (e.g. retention periods under tax law or commercial law); in the
                latter case, the deletion will take place after these reasons cease to apply.

                <Heading
                  className={classes(styles.title)}
                  data-visible={true}
                  level={4}
                  weight="bold"
                >
                  General information on the legal basis for data processing on this Website
                </Heading>
                Insofar as you have consented to data processing, we process your personal data on
                basis of Art. 6 para. 1 lit. a DSGVO or Art. 9 para. 2 lit. a DSGVO, provided that special categories of data
                are processed according to Art. 9 (1) DSGVO. In the event of express consent to the transfer of
                personal data to third countries, the data processing is also carried out on the basis of Art.
                49 para. 1 lit. a DSGVO. If you consent to the storage of cookies or to the access to information in
                your terminal device (e.g. via device fingerprinting), the data processing will also take place on the basis of
                on the basis of § 25 para. 1 TTDSG. The consent can be revoked at any time. If your data is required for
                fulfillment of the contract or for the performance of pre-contractual measures, we process your
                data on the basis of Art. 6 para. 1 lit. b DSGVO. Furthermore, we process your data insofar as these are
                are necessary for the fulfillment of a legal obligation on the basis of Art. 6 para. 1 lit. c DSGVO.
                Furthermore, the data processing may be based on our legitimate interest according to Art. 6 para. 1 lit. f
                DSGVO. Information on the relevant legal bases in each individual case is provided in the following
                paragraphs of this privacy policy.

                <Heading
                  className={classes(styles.title)}
                  data-visible={true}
                  level={4}
                  weight="bold"
                >
                  Note on data transfer to the USA and other third countries
                </Heading>
                We use, among other things, tools from companies based in the USA or other third
                third countries that are not secure under data protection law. If these tools are active, your
                personal data may be transferred to these third countries and processed there. We would like to point out
                that no level of data protection comparable to that in the EU can be guaranteed in these countries.
                For example, US companies are obligated to release personal data to security authorities without your
                without you as the data subject being able to take legal action against this. It can therefore not be
                authorities (e.g. intelligence services) to process, evaluate and use your data on US servers for surveillance purposes.
                monitoring purposes, evaluate it and store it permanently. We have no influence on these
                have any influence on these processing activities.

                <Heading
                  className={classes(styles.title)}
                  data-visible={true}
                  level={4}
                  weight="bold"
                >
                  Revocation of your consent to data processing
                </Heading>
                Many data processing operations are only possible with your express consent. You can revoke
                already given consent at any time. The legality of the data processing carried out until the revocation
                data processing remains unaffected by the revocation.

                <Heading
                  className={classes(styles.title)}
                  data-visible={true}
                  level={4}
                  weight="bold"
                >
                  Right to object to the collection of data in special cases and to direct advertising (Art. 21 DSGVO)
                </Heading>
                IF THE DATA PROCESSING IS BASED ON ART. 6 ABS. 1 LIT. E OR F DSGVO
                YOU HAVE THE RIGHT TO OBJECT TO THE PROCESSING OF YOUR PERSONAL DATA AT ANY TIME FOR REASONS
                SITUATION, TO OBJECT TO THE PROCESSING OF YOUR PERSONAL DATA; THIS ALSO APPLIES TO
                THIS ALSO APPLIES TO A PROFILING BASED ON THESE PROVISIONS.
                PROFILING. THE RESPECTIVE LEGAL BASIS ON WHICH PROCESSING IS BASED,
                PLEASE REFER TO THIS PRIVACY POLICY. IF YOU OBJECT,
                WE WILL NO LONGER PROCESS YOUR PERSONAL DATA UNLESS WE CAN DEMONSTRATE COMPELLING
                UNLESS WE CAN DEMONSTRATE COMPELLING LEGITIMATE GROUNDS FOR THE PROCESSING THAT
                WHICH OUTWEIGH YOUR INTERESTS, RIGHTS AND FREEDOMS, OR THE PROCESSING SERVES THE ASSERTION
                PROCESSING IS FOR THE PURPOSE OF ASSERTING, EXERCISING OR DEFENDING
                LEGAL CLAIMS (OBJECTION ACCORDING TO ART. 21 PARA. 1 DSGVO).
                IF YOUR PERSONAL DATA ARE PROCESSED FOR THE PURPOSE OF DIRECT MARKETING,
                YOU HAVE THE RIGHT TO OBJECT AT ANY TIME TO THE PROCESSING OF YOUR PERSONAL DATA FOR THE PURPOSE OF DIRECT MARKETING.
                PERSONAL DATA FOR THE PURPOSE OF SUCH ADVERTISING; THIS SHALL ALSO APPLY TO THE
                THIS ALSO APPLIES TO PROFILING, INSOFAR AS IT IS CONNECTED WITH SUCH DIRECT ADVERTISING.
                IN CONNECTION WITH SUCH DIRECT ADVERTISING. IF YOU OBJECT, YOUR PERSONAL DATA WILL SUBSEQUENTLY NO LONGER BE
                WILL SUBSEQUENTLY NO LONGER BE USED FOR THE PURPOSE OF DIRECT MARKETING (OBJECTION
                ACCORDING TO ART. 21 ABS. 2 DSGVO).

                <Heading
                  className={classes(styles.title)}
                  data-visible={true}
                  level={4}
                  weight="bold"
                >
                  Right of appeal to the competent supervisory authority
                </Heading>
                In the event of violations of the GDPR, data subjects have a right of appeal to a
                supervisory authority, in particular in the Member State of their habitual residence, their place of work
                or the place of the alleged infringement. The right of appeal exists without prejudice to other
                administrative or judicial remedies.

                <Heading
                  className={classes(styles.title)}
                  data-visible={true}
                  level={4}
                  weight="bold"
                >
                  Right to data portability
                </Heading>
                You have the right to transfer data that we process automatically on the basis of your consent or in performance of a contract to yourself or to a third party.
                automated, to yourself or to a third party in a common, machine-readable format.
                hand over. If you request the direct transfer of the data to another person responsible
                this will only be done insofar as it is technically feasible.

                <Heading
                  className={classes(styles.title)}
                  data-visible={true}
                  level={4}
                  weight="bold"
                >
                  Information, correction and deletion
                </Heading>
                Within the scope of the applicable legal provisions, you have the right at any time to free of charge
                information about your stored personal data, their origin and recipients and the
                purpose of the data processing and, if applicable, a right to correction or deletion of this data. For this and
                other questions on the subject of personal data, you can contact us at any time.

                <Heading
                  className={classes(styles.title)}
                  data-visible={true}
                  level={4}
                  weight="bold"
                >
                  Right to restriction of processing
                </Heading>
                You have the right to request the restriction of the processing of your personal data.
                For this purpose, you can contact us at any time. The right to restriction of processing exists in
                following cases:<br/><br/>
                <ul>
                  <li>
                    If you dispute the accuracy of your personal data stored by us, we need
                    usually need time to check this. For the duration of the review, you have the right to
                    Restrict the processing of your personal data.
                  </li>
                  <li>
                    If the processing of your personal data has happened/is happening unlawfully, you can
                    request the restriction of data processing instead of deletion.
                  </li>
                  <li>
                    If we no longer need your personal data, but you wish to use it for the exercise,
                    defense or assertion of legal claims, you have the right to request the restriction of processing of your data instead of the
                    Request the restriction of the processing of your personal data instead of the deletion.
                  </li>
                  <li>
                    If you have lodged an objection pursuant to Art. 21 (1) DSGVO, a balancing must be made between
                    your interests and ours will be carried out. As long as it has not yet been determined whose interests are
                    prevail, you have the right to demand the restriction of the processing of your personal data.
                  </li>
                </ul><br/>

                If you have restricted the processing of your personal data, this data - apart from its
                only with your consent or for the assertion, exercise or defense of legal claims or for the protection
                defense of legal claims or for the protection of the rights of another natural or
                legal person or for reasons of important public interest of the European Union or a
                of a member state.

                <Heading
                  className={classes(styles.title)}
                  data-visible={true}
                  level={4}
                  weight="bold"
                >
                  SSL or TLS encryption
                </Heading>
                For security reasons and to protect the transmission of confidential content, such as orders or requests sent to
                For example, orders or requests that you send to us as the site operator, SSL or TLS encryption. You can recognize an encrypted connection by the fact that the address line of the browser changes from
                "http://" to "https://" and by the lock symbol in your browser line.
                If SSL or TLS encryption is activated, the data you transmit to us cannot be read by third parties.
                be read by third parties.

                <Heading
                  className={classes(styles.title)}
                  data-visible={true}
                  level={4}
                  weight="bold"
                >
                  Objection to advertising e-mails
                </Heading>
                The use of contact data published within the framework of the imprint obligation for the transmission of
                not expressly requested advertising and information materials is hereby prohibited. The
                reserve the right to take legal action against unsolicited mailing or e-mailing of spam and other
                advertising information, such as spam e-mails.

                <Heading
                  className={classes(styles.title)}
                  data-visible={true}
                  level={3}
                  weight="bold"
                >
                  4. data collection on this website
                </Heading>
                <Heading
                  className={classes(styles.title)}
                  data-visible={true}
                  level={4}
                  weight="bold"
                >
                  Server log files
                </Heading>
                The provider of the pages automatically collects and stores information in so-called server log files,
                which your browser automatically transmits to us. These are:
                <ul>
                  <li>
                    browser type and browser version
                  </li>
                  <li>
                    Operating system used
                  </li>
                  <li>
                    referrer URL
                  </li>
                  <li>
                    Host name of the accessing computer
                  </li>
                  <li>
                    Time of the server request
                  </li>
                  <li>
                    IP address
                  </li>
                </ul><br/>
                This data is not merged with other data sources.<br/><br/>
                The collection of this data is based on Art. 6 para. 1 lit. f DSGVO. The website operator has
                a legitimate interest in the technically error-free presentation and optimization of his website -
                for this purpose, the server log files must be recorded.

                <Heading
                  className={classes(styles.title)}
                  data-visible={true}
                  level={4}
                  weight="bold"
                >
                  Inquiry by e-mail, telephone or fax
                </Heading>
                If you contact us by e-mail, telephone or fax, your inquiry, including all resulting
                personal data (name, inquiry) for the purpose of processing your request.
                and processed by us. We will not pass on this data without your consent.<br/><br/>
                The processing of this data is based on Art. 6 para. 1 lit. b DSGVO, provided that your request is related to
                the fulfillment of a contract or is necessary for the implementation of pre-contractual measures.
                is necessary. In all other cases, the processing is based on our legitimate interest in the
                effective processing of the requests addressed to us (Art. 6 para. 1 lit. f DSGVO) or on your
                consent (Art. 6 para. 1 lit. a DSGVO) if this has been requested; consent can be revoked at any time.<br/><br/>
                The data you send us via contact requests will remain with us until you request us to delete it, revoke your consent to the
                revoke your consent to storage, or the purpose for storing the data no longer applies (e.g. after the
                (e.g. after the processing of your request has been completed). Mandatory legal provisions -
                in particular legal retention periods - remain unaffected.

                <Heading
                  className={classes(styles.title)}
                  data-visible={true}
                  level={3}
                  weight="bold"
                >
                  5. plugins and tools
                </Heading>
                <Heading
                  className={classes(styles.title)}
                  data-visible={true}
                  level={4}
                  weight="bold"
                >
                  Google Fonts
                </Heading>
                This site uses for the uniform display of fonts so-called Google Fonts, which are provided by Google.
                provided by Google. When you call up a page, your browser loads the required fonts into your browser cache,
                in order to display texts and fonts correctly.<br/><br/>
                For this purpose, the browser you are using must connect to Google's servers.
                servers. This enables Google to know that your IP address has been used to access this website.
                was called up. The use of Google Fonts is based on Art. 6 para. 1 lit. f DSGVO. The
                website operator has a legitimate interest in the uniform presentation of the typeface on its website.
                website. Insofar as a corresponding consent has been requested, the processing is carried out exclusively
                on the basis of Art. 6 para. 1 lit. a DSGVO and § 25 para. 1 TTDSG, insofar as the consent allows the storage of
                of cookies or access to information in the user's terminal device (e.g. device fingerprinting) in the
                within the meaning of the TTDSG. The consent can be revoked at any time.<br/><br/>
                If your browser does not support Google Fonts, a standard font will be used by your computer.
                You can find more information about Google Fonts at
                <a href="https://developers.google.com/fonts/faq">https://developers.google.com/fonts/faq</a> and in Google's privacy policy:
                <a href="https://policies.google.com/privacy?hl=de">https://policies.google.com/privacy?hl=de</a>.
              </div>
            </Section>
          </Fragment>
        )}
      </Transition>
    </section>
  );
}
