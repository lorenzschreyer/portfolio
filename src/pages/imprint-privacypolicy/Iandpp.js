import { Heading } from 'components/Heading';
import { Meta } from 'components/Meta';
import { Section } from 'components/Section';
import { Transition } from 'components/Transition';
import { Fragment } from 'react';
import styles from './Iandpp.module.css';
import { classes } from "../../utils/style";
import { Link } from 'components/Link';

import { useTranslation } from "react-i18next";

export const Iandpp = () => {
  const { t } = useTranslation();

  return (
    <section
      className={styles.section}
      data-light={true}
      data-full-height={true}
    >
      <Meta title={t("iandpp_meta_title")}/>
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
                  {t('imprint_title')}
                </Heading>

                {/*<Heading*/}
                {/*  className={classes(styles.title)}*/}
                {/*  data-visible={true}*/}
                {/*  level={3}*/}
                {/*  weight="bold"*/}
                {/*>*/}
                {/*  {t('imprint_paragraph')}*/}
                {/*</Heading>*/}
                Lorenz Schreyer<br/>
                Hauptstraße 57<br/>
                85309 Puch

                <Heading
                  className={classes(styles.title)}
                  data-visible={true}
                  level={3}
                  weight="bold"
                >
                  {t('imprint_contact')}
                </Heading>
                Tel: +49 176 34285299<br/>
                E-Mail: dev@lorenzschreyer.de

                <Heading
                  className={classes(styles.title)}
                  data-visible={true}
                  level={3}
                  weight="bold"
                >
                  {t('imprint_taxid')}
                </Heading>
                {t('imprint_registration_desc')} <br/>
                DE366775338

                <Heading
                  className={classes(styles.title)}
                  data-visible={true}
                  level={3}
                  weight="bold"
                >
                  {t('imprint_registration')}
                </Heading>
                {t('imprint_registration_desc')}

                <Heading
                  className={classes(styles.title)}
                  data-visible={true}
                  level={3}
                  weight="bold"
                >
                  {t('imprint_responsible')}
                </Heading>
                Lorenz Schreyer<br/>
                Hauptstraße 57<br/>
                85309 Puch

                <Heading
                  className={classes(styles.title)}
                  data-visible={true}
                  level={3}
                  weight="bold"
                >
                  {t('imprint_stress')}
                </Heading>
                {t('imprint_stress_desc')}
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
                  {t('privacy_title')}
                </Heading>
                <Heading
                  className={classes(styles.title)}
                  data-visible={true}
                  level={3}
                  weight="bold"
                >
                  {t('privacy_glance')}

                </Heading>
                <Heading
                  className={classes(styles.title)}
                  data-visible={true}
                  level={4}
                  weight="bold"
                >
                  {t('privacy_general')}
                </Heading>
                {t('privacy_general_desc')}

                <Heading
                  className={classes(styles.title)}
                  data-visible={true}
                  level={4}
                  weight="bold"
                >
                  {t('privacy_datacollect')}

                </Heading>
                <Heading
                  className={classes(styles.title)}
                  data-visible={true}
                  level={5}
                  weight="bold"
                >
                  {t('privacy_responsible')}

                </Heading>
                {t('privacy_responsible_desc')}

                <Heading
                  className={classes(styles.title)}
                  data-visible={true}
                  level={5}
                  weight="bold"
                >
                  {t('privacy_howcollect')}

                </Heading>
                {t('privacy_howcollect_desc1')}<br/><br/>
                {t('privacy_howcollect_desc2')}

                <Heading
                  className={classes(styles.title)}
                  data-visible={true}
                  level={5}
                  weight="bold"
                >
                  {t('privacy_for_what')}

                </Heading>
                {t('privacy_for_what_desc')}

                <Heading
                  className={classes(styles.title)}
                  data-visible={true}
                  level={5}
                  weight="bold"
                >
                  {t('privacy_yourrights')}

                </Heading>
                {t('privacy_yourrights_desc')}

                <Heading
                  className={classes(styles.title)}
                  data-visible={true}
                  level={3}
                  weight="bold"
                >
                  {t('privacy_hosting')}

                </Heading>
                {t('privacy_hosting_desc1')}<br/><br/>
                {t('privacy_hosting_desc2')}<br/><br/>
                {t('privacy_hosting_desc3')}

                <Heading
                  className={classes(styles.title)}
                  data-visible={true}
                  level={3}
                  weight="bold"
                >
                  {t('privacy_mandatory')}

                </Heading>
                <Heading
                  className={classes(styles.title)}
                  data-visible={true}
                  level={4}
                  weight="bold"
                >
                  {t('privacy_dataprotection')}

                </Heading>
                {t('privacy_dataprotection_desc1')}<br/><br/>
                {t('privacy_dataprotection_desc2')}<br/><br/>
                {t('privacy_dataprotection_desc3')}

                <Heading
                  className={classes(styles.title)}
                  data-visible={true}
                  level={4}
                  weight="bold"
                >
                  {t('privacy_responsible_note')}

                </Heading>
                {t('privacy_responsible_note_desc1')}<br/><br/>
                Lorenz Gabriel Schreyer<br/><br/>
                Hauptstraße 57<br/>
                85309 Puch<br/><br/>
                Phone: +49 17634285299<br/>
                E-mail: dev@lorenzschreyer.de<br/><br/>
                {t('privacy_responsible_note_desc2')}
                The responsible party is the natural or legal person who, alone or jointly with others, decides on
                the purposes and means of the processing of personal data (e.g. names, e-mail addresses, etc.).
                decides.

                <Heading
                  className={classes(styles.title)}
                  data-visible={true}
                  level={4}
                  weight="bold"
                >
                  {t('privacy_storage')}

                </Heading>
                {t('privacy_storage_desc')}

                <Heading
                  className={classes(styles.title)}
                  data-visible={true}
                  level={4}
                  weight="bold"
                >
                  {t('privacy_legal_info')}

                </Heading>
                {t('privacy_legal_info_desc')}

                <Heading
                  className={classes(styles.title)}
                  data-visible={true}
                  level={4}
                  weight="bold"
                >
                  {t('privacy_personal_data')}
                </Heading>
                {t('privacy_personal_data_desc')}

                <Heading
                  className={classes(styles.title)}
                  data-visible={true}
                  level={4}
                  weight="bold"
                >
                  {t('privacy_revocation')}
                </Heading>
                {t('privacy_revocation_desc')}

                <Heading
                  className={classes(styles.title)}
                  data-visible={true}
                  level={4}
                  weight="bold"
                >
                  {t('privacy_right_object')}
                  Right to object to the collection of data in special cases and to direct advertising (Art. 21 DSGVO)
                </Heading>
                {t('privacy_right_object_desc')}

                <Heading
                  className={classes(styles.title)}
                  data-visible={true}
                  level={4}
                  weight="bold"
                >
                  {t('privacy_right_appeal')}
                </Heading>
                {t('privacy_right_appeal_desc')}

                <Heading
                  className={classes(styles.title)}
                  data-visible={true}
                  level={4}
                  weight="bold"
                >
                  {t('privacy_right_portability')}

                </Heading>
                {t('privacy_right_portability_desc')}

                <Heading
                  className={classes(styles.title)}
                  data-visible={true}
                  level={4}
                  weight="bold"
                >
                  {t('privacy_incorrdel')}

                </Heading>
                {t('privacy_incorrdel_desc')}

                <Heading
                  className={classes(styles.title)}
                  data-visible={true}
                  level={4}
                  weight="bold"
                >
                  {t('privacy_restriction')}
                </Heading>
                {t('privacy_restriction_desc1')}<br/><br/>
                <ul>
                  <li>
                    {t('privacy_restriction_desc_li1')}
                  </li>
                  <li>
                    {t('privacy_restriction_desc_li2')}
                  </li>
                  <li>
                    {t('privacy_restriction_desc_li3')}
                  </li>
                  <li>
                    {t('privacy_restriction_desc_li4')}
                  </li>
                </ul><br/>
                {t('privacy_restriction_desc2')}

                <Heading
                  className={classes(styles.title)}
                  data-visible={true}
                  level={4}
                  weight="bold"
                >
                  {t('privacy_encryption')}

                </Heading>
                {t('privacy_encryption_desc1')}<br/><br/>
                {t('privacy_encryption_desc2')}

                <Heading
                  className={classes(styles.title)}
                  data-visible={true}
                  level={4}
                  weight="bold"
                >
                  {t('privacy_object_advertising')}

                </Heading>
                {t('privacy_object_advertising_desc')}

                <Heading
                  className={classes(styles.title)}
                  data-visible={true}
                  level={3}
                  weight="bold"
                >
                  {t('privacy_data_collection')}

                </Heading>
                <Heading
                  className={classes(styles.title)}
                  data-visible={true}
                  level={4}
                  weight="bold"
                >
                  {t('privacy_log')}

                </Heading>
                {t('privacy_log_desc1')}
                <ul>
                  <li>
                    {t('privacy_log_desc_li1')}
                  </li>
                  <li>
                    {t('privacy_log_desc_li2')}
                  </li>
                  <li>
                    {t('privacy_log_desc_li3')}
                  </li>
                  <li>
                    {t('privacy_log_desc_li4')}
                  </li>
                  <li>
                    {t('privacy_log_desc_li5')}
                  </li>
                  <li>
                    {t('privacy_log_desc_li6')}
                  </li>
                </ul><br/>
                {t('privacy_log_desc2')}<br/><br/>
                {t('privacy_log_desc3')}

                <Heading
                  className={classes(styles.title)}
                  data-visible={true}
                  level={4}
                  weight="bold"
                >
                  {t('privacy_inquiry')}

                </Heading>
                {t('privacy_inquiry_desc1')}<br/><br/>
                {t('privacy_inquiry_desc2')}<br/><br/>
                {t('privacy_inquiry_desc3')}

              {/*  <Heading*/}
              {/*    className={classes(styles.title)}*/}
              {/*    data-visible={true}*/}
              {/*    level={4}*/}
              {/*    weight="bold"*/}
              {/*  >*/}
              {/*    Inquiry by whatsapp*/}
              {/*  </Heading>*/}
              {/*  We also offer you the option to submit your inquiries via the chat service WhatsApp and to receive corresponding feedback on your request via WhatsApp. The operator of this service is WhatsApp Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Ireland (&quote;WhatsApp&quote;), a subsidiary of Facebook. Through your communication with us via WhatsApp, both we and WhatsApp receive your phone number and the information that you have contacted our customer hotline.<br/><br/>*/}
              {/*  The aforementioned data is also forwarded by WhatsApp to Facebook&apos;s servers in the USA and processed by WhatsApp and Facebook in accordance with the WhatsApp Privacy Policy, which also includes processing for their own purposes, such as improving the WhatsApp service. We would like to point out that WhatsApp also accesses the address book of the device used and the contact data stored therein. For more information about the purpose and scope of data collection and the further processing of this data by WhatsApp and Facebook, as well as related rights and setting options to protect your privacy, please refer to the WhatsApp privacy policy at: https://www.whatsapp.com/legal/#privacy-policy.<br/><br/>*/}
              {/*  We process your telephone number, your name and other data provided by you and the content of your request or message in order to process your request and answer any queries you may have.<br/><br/>*/}
              {/*  The basis for this processing and the transmission to WhatsApp in this context is Art. 6 para. 1 p. 1 b) DSGVO, insofar as your request concerns an existing contractual relationship with us or serves to initiate such a contractual relationship. Otherwise, this data processing is based on Art. 6 para. 1 p. 1 f) DSGVO, whereby our legitimate interest is the careful processing of your respective request and the solution of any technical problems. We take your interests into account by the fact that communication via WhatsApp only exists as an additional option. Of course, you can also contact us by other means, for example by phone call, email or via our contact form on the website, as described earlier in this section. In addition, for the contact option via WhatsApp, we use a separate device where possible, in which only the contact data of the inquirers who communicate with us via WhatsApp are stored, whereby WhatsApp only receives data from inquirers who willingly use the service.<br/><br/>*/}
              {/*  Insofar as your aforementioned data is also transmitted to servers of WhatsApp or Facebook in the USA and processed there, WhatsApp, Facebook and we take additional measures for an adequate level of protection in the USA pursuant to Art. 44 et seq. DSGVO. This is done, for example, by agreeing to the standard data protection clauses of the EU Commission pursuant to Art. 46 (2) (c) DSGVO, which may also provide for additional safeguards such as encryption of the data depending on the level of protection required.*/}

              {/*  <Heading*/}
              {/*    className={classes(styles.title)}*/}
              {/*    data-visible={true}*/}
              {/*    level={3}*/}
              {/*    weight="bold"*/}
              {/*  >*/}
              {/*    5. plugins and tools*/}
              {/*  </Heading>*/}
              {/*  <Heading*/}
              {/*    className={classes(styles.title)}*/}
              {/*    data-visible={true}*/}
              {/*    level={4}*/}
              {/*    weight="bold"*/}
              {/*  >*/}
              {/*    Google Fonts*/}
              {/*  </Heading>*/}
              {/*  This site uses for the uniform display of fonts so-called Google Fonts, which are provided by Google.*/}
              {/*  provided by Google. When you call up a page, your browser loads the required fonts into your browser cache,*/}
              {/*  in order to display texts and fonts correctly.<br/><br/>*/}
              {/*  For this purpose, the browser you are using must connect to Google&apos;s servers.*/}
              {/*  servers. This enables Google to know that your IP address has been used to access this website.*/}
              {/*  was called up. The use of Google Fonts is based on Art. 6 para. 1 lit. f DSGVO. The*/}
              {/*  website operator has a legitimate interest in the uniform presentation of the typeface on its website.*/}
              {/*  website. Insofar as a corresponding consent has been requested, the processing is carried out exclusively*/}
              {/*  on the basis of Art. 6 para. 1 lit. a DSGVO and § 25 para. 1 TTDSG, insofar as the consent allows the storage of*/}
              {/*  of cookies or access to information in the user&apos;s terminal device (e.g. device fingerprinting) in the*/}
              {/*  within the meaning of the TTDSG. The consent can be revoked at any time.<br/><br/>*/}
              {/*  If your browser does not support Google Fonts, a standard font will be used by your computer.*/}
              {/*  You can find more information about Google Fonts at*/}
              {/*  <a href="https://developers.google.com/fonts/faq">https://developers.google.com/fonts/faq</a> and in Google&apos;s privacy policy:*/}
              {/*  <a href="https://policies.google.com/privacy?hl=de">https://policies.google.com/privacy?hl=de</a>.*/}
              </div>
              <br/><br/>
              Quelle: <Link primary={true} href="https://www.e-recht24.de">eRecht24</Link>
            </Section>
          </Fragment>
        )}
      </Transition>
    </section>
  );
};
