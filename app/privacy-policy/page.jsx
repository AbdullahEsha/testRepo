import TopBar from "@/components/TopBar";
import Link from "next/link";

const Privacy = () => {
  return (
    <>
      <TopBar />
      <div className="my-20">
        <h2 className="heading-4">Privacy Policy for Anzara Lifestyle Ltd.</h2>
        <div className="container text-gray-700">
          <div className="mb-6">
            <p className="mb-2">
              At Nazaara, accessible from https://www.nazaaralifestyle.com, one
              of our main priorities is the privacy of our visitors. This
              Privacy Policy document contains types of information that is
              collected and recorded by Nazaara and how we use it.
            </p>
            <p className="mb-2">
              If you have additional questions or require more information about
              our Privacy Policy, do not hesitate to contact us.
            </p>
            <p className="mb-2">
              This Privacy Policy applies only to our online activities and is
              valid for visitors to our website with regards to the information
              that they shared and/or collect in Nazaara. This policy is not
              applicable to any information collected offline or via channels
              other than this website.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-xl font-normal mb-2">Consent</p>
            <p>
              By using our website, you hereby consent to our Privacy Policy and
              agree to its terms.
            </p>
            {/* <ul>
              <li className="list-disc list-inside">
                Company (referred to as either the Company, We, Us or Our in
                this Disclaimer) refers to Anzara Lifestyle Ltd., Block C, 1st
                Floor, House 111 Road 8, Dhaka 1213.
              </li>
              <li className="list-disc list-inside">
                Service refers to the Website.
              </li>
              <li className="list-disc list-inside">
                You means the individual accessing the Service, or the company,
                or other legal entity on behalf of which such individual is
                accessing or using the Service, as applicable.
              </li>
              <li className="list-disc list-inside">
                Website refers to Nazaara, accessible from
                https://www.nazaaralifestyle.com
              </li>
            </ul> */}
          </div>
          <div className="mb-6">
            <p className="text-xl font-normal mb-2">Information we collect</p>
            <p className="mb-2">
              The personal information that you are asked to provide, and the
              reasons why you are asked to provide it, will be made clear to you
              at the point we ask you to provide your personal information.
            </p>
            <p className="mb-2">
              If you contact us directly, we may receive additional information
              about you such as your name, email address, phone number, the
              contents of the message and/or attachments you may send us, and
              any other information you may choose to provide.
            </p>
            <p>
              When you register for an Account, we may ask for your contact
              information, including items such as name, company name, address,
              email address, and telephone number.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-xl font-normal mb-2">
              How we use your information
            </p>
            <p className="mb-2">
              We use the information we collect in various ways, including to:
            </p>
            <ul>
              <li className="list-disc list-inside">
                Provide, operate, and maintain our website
              </li>
              <li className="list-disc list-inside">
                Improve, personalize, and expand our website
              </li>
              <li className="list-disc list-inside">
                Understand and analyze how you use our website
              </li>
              <li className="list-disc list-inside">
                Develop new products, services, features, and functionality
              </li>
              <li className="list-disc list-inside">
                Communicate with you, either directly or through one of our
                partners, including for customer service, to provide you with
                updates and other information relating to the website, and for
                marketing and promotional purposes
              </li>
              <li className="list-disc list-inside">Send you emails</li>
              <li className="list-disc list-inside">Find and prevent fraud</li>
            </ul>
          </div>
          <div className="mb-6">
            <p className="text-xl font-normal mb-2">
              Errors and Omissions Disclaimer
            </p>
            <p className="mb-2">
              The information given by the Service is for general guidance on
              matters of interest only. Even if the Company takes every
              precaution to insure that the content of the Service is both
              current and accurate, errors can occur. Plus, given the changing
              nature of laws, rules and regulations, there may be delays,
              omissions or inaccuracies in the information contained on the
              Service.
            </p>
            <p>
              The Company is not responsible for any errors or omissions, or for
              the results obtained from the use of this information.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-xl font-normal mb-2">Log Files</p>
            <p>
              {`
              Nazaara follows a standard procedure of using log files. These
              files log visitors when they visit websites. All hosting companies
              do this and a part of hosting services' analytics. The information
              collected by log files include internet protocol (IP) addresses,
              browser type, Internet Service Provider (ISP), date and time
              stamp, referring/exit pages, and possibly the number of clicks.
              These are not linked to any information that is personally
              identifiable. The purpose of the information is for analyzing
              trends, administering the site, tracking users' movement on the
              website, and gathering demographic information.`}
            </p>
          </div>
          <div className="mb-6">
            <p className="text-xl font-normal mb-2">Cookies and Web Beacons</p>
            <p className="mb-2">
              {`Like any other website, Nazaara uses "cookies". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.`}
            </p>
          </div>
          <div className="mb-6">
            <p className="text-xl font-normal mb-2">
              Advertising Partners Privacy Policies
            </p>
            <p className="mb-2">
              You may consult this list to find the Privacy Policy for each of
              the advertising partners of Nazaara.
            </p>
            <p className="mb-2">
              {` Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Nazaara, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.`}
            </p>
            <p>
              Note that Nazaara has no access to or control over these cookies
              that are used by third-party advertisers.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-xl font-normal mb-2">
              Third Party Privacy Policies
            </p>
            <p className="mb-2">
              {`Nazaara's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.`}
            </p>
            <p>
              {` You can choose to disable cookies through your individual browser
              options. To know more detailed information about cookie management
              with specific web browsers, it can be found at the browsers'
              respective websites.`}
            </p>
          </div>
          <div className="mb-6">
            <p className="text-xl font-normal mb-2">
              CCPA Privacy Rights (Do Not Sell My Personal Information)
            </p>
            <p className="mb-2">
              Under the CCPA, among other rights, California consumers have the
              right to:
            </p>
            <p className="mb-2">
              {`Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.`}
            </p>
            <p className="mb-2">
              Request that a business delete any personal data about the
              consumer that a business has collected.
            </p>
            <p className="mb-2">
              {` Request that a business that sells a consumer's personal data, not sell the consumer's personal data.`}
            </p>
            <p>
              If you make a request, we have one month to respond to you. If you
              would like to exercise any of these rights, please contact us.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-xl font-normal mb-2">
              GDPR Data Protection Rights
            </p>
            <p className="mb-2">
              We would like to make sure you are fully aware of all of your data
              protection rights. Every user is entitled to the following:
            </p>
            <p className="mb-2">
              {`
                The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.`}
            </p>
            <p className="mb-2">
              The right to rectification – You have the right to request that we
              correct any information you believe is inaccurate. You also have
              the right to request that we complete the information you believe
              is incomplete.
            </p>
            <p className="mb-2">
              The right to erasure – You have the right to request that we erase
              your personal data, under certain conditions.
            </p>
            <p className="mb-2">
              The right to restrict processing – You have the right to request
              that we restrict the processing of your personal data, under
              certain conditions.
            </p>
            <p className="mb-2">
              The right to object to processing – You have the right to object
              to our processing of your personal data, under certain conditions.
            </p>
            <p className="mb-2">
              The right to data portability – You have the right to request that
              we transfer the data that we have collected to another
              organization, or directly to you, under certain conditions.
            </p>
            <p>
              If you make a request, we have one month to respond to you. If you
              would like to exercise any of these rights, please contact us.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-xl font-normal mb-2">
              {`Children's Information`}
            </p>
            <p className="mb-2">
              Another part of our priority is adding protection for children
              while using the internet. We encourage parents and guardians to
              observe, participate in, and/or monitor and guide their online
              activity.
            </p>
            <p className="mb-2">
              Nazaara does not knowingly collect any Personal Identifiable
              Information from children under the age of 13. If you think that
              your child provided this kind of information on our website, we
              strongly encourage you to contact us immediately and we will do
              our best efforts to promptly remove such information from our
              records.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-xl font-normal mb-2">
              Changes to This Privacy Policy
            </p>
            <p>
              We may update our Privacy Policy from time to time. Thus, we
              advise you to review this page periodically for any changes. We
              will notify you of any changes by posting the new Privacy Policy
              on this page. These changes are effective immediately, after they
              are posted on this page.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-xl font-normal mb-2">Contact Us</p>
            <p>
              If you have any questions or suggestions about our Privacy Policy,
              do not hesitate to contact us.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;
