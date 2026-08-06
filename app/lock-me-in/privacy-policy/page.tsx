import "../../styles/damp.css";
import "../../styles/page.css";

export default function Privacy() {
  return (
    <div className="hobby-container">
      <h1 className="hobby-title">Privacy Policy for Lock Me In</h1>
      <br />
      <p className="project-description">
        <strong>Last updated: July 27, 2026</strong>
      </p>
      <br />

      <p className="project-description">
        This Privacy Policy describes how Lock Me In ("the Extension," "We,"
        "Us," "Our") handles information when you use the Extension.
      </p>
      <br />
      <p className="project-description">
        Lock Me In is a Chrome extension that redirects you away from websites
        you choose to block, based on settings you configure yourself.
      </p>
      <br />

      <h2 className="project-subheader1">Summary</h2>
      <br />
      <ul className="project-list">
        <li className="project-bullet">
          Lock Me In does <strong>not</strong> have a server, backend, or user
          account system.
        </li>
        <li className="project-bullet">
          Lock Me In does <strong>not</strong> collect, transmit, sell, or share
          any of your data with Us or any third party.
        </li>
        <li className="project-bullet">
          All data used by the Extension is stored{" "}
          <strong>locally on your device</strong> using Chrome's built-in{" "}
          <code>chrome.storage</code> API, and never leaves your browser.
        </li>
      </ul>

      <h2 className="project-subheader1">Data the Extension Stores Locally</h2>
      <br />
      <p className="project-description">
        The Extension stores the following information locally, on your device
        only:
      </p>
      <br />
      <ul className="project-list">
        <li className="project-bullet">
          <strong>Light/dark mode preference</strong> — remembers your chosen
          appearance setting
        </li>
        <li className="project-bullet">
          <strong>List of sites you've chosen to block</strong> — lets the
          Extension know which sites to redirect you away from
        </li>
        <li className="project-bullet">
          <strong>Your chosen redirect destination</strong> — determines where
          you're sent when you visit a blocked site
        </li>
        <li className="project-bullet">
          <strong>Timer settings</strong> — controls the duration/schedule of
          your blocking sessions
        </li>
      </ul>
      <br />
      <p className="project-description">
        None of this data is transmitted to Us, to Google, or to any other third
        party. We have no server to receive it, and no ability to view it. It
        exists only in your local Chrome profile (and will sync via your own
        Google account only if you have Chrome Sync enabled — that sync is
        handled entirely by Google, not by Us).
      </p>
      <br />
      <p className="project-description">
        <strong>Regarding the list of blocked sites:</strong> this is limited to
        domain names you've deliberately entered to configure the blocking
        feature. The Extension does not monitor, log, or collect your actual
        browsing history — it only reads whether the current tab's URL matches
        something in the list you've configured.
      </p>
      <br />
      <h2 className="project-subheader1">How This Data Is Used</h2>
      <br />
      <p className="project-description">
        The data described above is used solely to provide the Extension's core,
        disclosed function: detecting when you visit a site you've asked to be
        blocked, and redirecting you accordingly. It is not used for
        advertising, profiling, analytics, or any purpose beyond this feature.
      </p>
      <br />
      <h2 className="project-subheader1">Data Sharing</h2>
      <br />
      <p className="project-description">
        We do not share, sell, rent, or transfer any user data to third parties,
        because We do not collect or have access to any user data in the first
        place. There are no Service Providers, affiliates, business partners, or
        advertisers involved in the Extension's operation.
      </p>
      <br />
      <h2 className="project-subheader1">Data Retention and Deletion</h2>
      <br />
      <p className="project-description">
        Your settings remain in local storage until you either:
      </p>
      <br />
      <ul className="project-list">
        <li className="project-bullet">
          Change or clear them yourself within the Extension, or
        </li>
        <li className="project-bullet">
          Uninstall the Extension, which removes all locally stored data
          associated with it, or
        </li>
        <li className="project-bullet">
          Manually clear your browser's extension storage/data through Chrome's
          settings.
        </li>
      </ul>
      <br />
      <p className="project-description">
        We have no copy of this data anywhere and cannot retain, restore, or
        delete it on your behalf, since it never reaches Us.
      </p>
      <br />
      <h2 className="project-subheader1">Children's Privacy</h2>
      <br />
      <p className="project-description">
        Lock Me In is not directed at children, and since the Extension collects
        no personal information at all, no data about any user — child or adult
        — is ever collected or stored by Us.
      </p>
      <br />
      <h2 className="project-subheader1">Chrome Web Store Compliance</h2>
      <br />
      <p className="project-description">
        Lock Me In's use and handling of data adheres to the Chrome Web Store
        User Data Policy, including the Limited Use requirements: any data
        handled by the Extension is limited to what is strictly necessary for
        its single, disclosed purpose (blocking and redirecting specified
        websites), is never sold, and is never used for advertising or unrelated
        purposes.
      </p>
      <br />
      <h2 className="project-subheader1">Changes to This Privacy Policy</h2>
      <br />
      <p className="project-description">
        If this policy changes — for example, if a future version of the
        Extension adds new functionality involving data collection — We will
        update this page and revise the "Last updated" date above.
      </p>
      <br />
      <h2 className="project-subheader1">Contact Us</h2>
      <br />
      <p className="project-description">
        If you have any questions about this Privacy Policy, you can contact Us
        by email: <strong>lockmein.support@gmail.com</strong>
      </p>
    </div>
  );
}
