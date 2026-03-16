import { useDarkMode } from "../context/DarkModeContext";
import AuroraBackground from "../components/Aurora";

function Technical() {
  const { darkMode } = useDarkMode();

  return (
    <div className="min-h-screen py-20 px-6 relative overflow-hidden"
      style={{
        background: darkMode 
          ? "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)"
          : "linear-gradient(135deg, #eef2ff 0%, #ede9fe 50%, #faf5ff 100%)",
      }}
    >
      {/* Aurora Background */}
      <AuroraBackground />

      <div className="max-w-6xl mx-auto relative" style={{ zIndex: 10 }}>
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 dark:text-blue-700 text-center drop-shadow-lg mb-2">
            Technical Report
          </h1>
          <p className={`text-base ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>
            Technical proficiencies applied in digital marketing campaigns at HIT Digital Marketing.
          </p>
        </div>

        <hr className="w-full border-t-4 border-blue-400 mb-14" />

        {/* Single Main Glass Card matching other pages */}
        <div className={`backdrop-blur-xl border rounded-3xl shadow-2xl p-8 md:p-12 hover:shadow-blue-200 transition-all duration-300 w-full max-w-6xl mx-auto ${
          darkMode ? 'bg-gray-800/30 border-gray-600/30' : 'bg-white/30 border-white/40'
        }`}>
          
          <div className="space-y-12">
            
            {/* Introduction */}
            <section>
              <p className={`leading-relaxed text-base ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                During the industrial training period at HIT Digital Marketing, the main scope of work assigned focused on managing digital 
                marketing campaigns. The implementation of these tasks involved the direct application of technical knowledge, particularly 
                in handling bulk message distribution systems using WA Toolbox, managing and maintaining customer databases, and preparing 
                creative visual and textual content. This training provided comprehensive exposure to the digital marketing ecosystem, 
                starting from strategic planning to the technical implementation of marketing automation.
              </p>
            </section>

            <hr className="w-full border-t border-blue-400 opacity-50 my-8" />

            {/* Section 1 */}
            <section>
              <h2 className={`text-2xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Customer Database Management
              </h2>
              <p className={`leading-relaxed text-base mb-5 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                Efficient database management is the backbone of any successful digital marketing campaign. This task requires 
                high accuracy to ensure the integrity and quality of customer data used in the bulk messaging distribution system.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-blue-700 dark:text-blue-400">
                Technical Execution
              </h3>
              <ul className={`space-y-4 ml-4 list-none ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                <li className="leading-relaxed text-base">
                  <span className="font-semibold">Data Extraction and Cleansing</span>: Processed raw data across multiple sources utilizing spreadsheet applications (Microsoft Excel). 
                  This procedure prioritized the systematic removal of inactive records, elimination of duplicate entries, 
                  and the rectification of corrupted or incomplete data structures.
                </li>
                <li className="leading-relaxed text-base">
                  <span className="font-semibold">Telecommunication Format Standardization</span>: Executed text manipulation algorithms to ensure all contact numbers were uniformly updated 
                  to comply with international dialing standards (appending the +60 country code). This was an essential preventive measure to mitigate 
                  delivery failure errors within the automation software.
                </li>
                <li className="leading-relaxed text-base">
                  <span className="font-semibold">Strategic Data Segmentation</span>: Filtered and categorized data into precise segments based on defined parameters, such as financial thresholds 
                  or potential client value, thereby enabling highly targeted and efficient marketing initiatives.
                </li>
                <li className="leading-relaxed text-base">
                  <span className="font-semibold">Import File Configuration</span>: Exported the authenticated and sanitized datasets into system-compatible formats (e.g., CSV) to ensure 
                  seamless data migration and integration into the WhatsApp Blasting platform.
                </li>
              </ul>
            </section>

            <hr className="w-full border-t border-blue-400 opacity-50 my-8" />

            {/* Section 2 */}
            <section>
              <h2 className={`text-2xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Creative Content Creation
              </h2>

              <p className={`leading-relaxed text-base mb-5 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                The development of digital promotional materials was carried out to support the marketing campaigns conducted. 
                Multimedia elements and persuasive writing were combined to ensure that marketing messages could be delivered 
                effectively to the target audience.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-blue-700 dark:text-blue-400">
                Technical Execution
              </h3>
              <ul className={`space-y-4 ml-4 list-none ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                <li className="leading-relaxed text-base">
                  <span className="font-semibold">Campaign Objective Formulation</span>: Analyzed and defined the primary directive of each campaign prior to the design phase 
                  (e.g., seasonal Ramadan promotions, CSR awareness for marginalized communities, or institutional fundraising).
                </li>
                <li className="leading-relaxed text-base">
                  <span className="font-semibold">Visual Conceptualization</span>: Drafted core messaging and aesthetic frameworks that strictly aligned with the brand identity and corporate 
                  guidelines of the represented clients.
                </li>
                <li className="leading-relaxed text-base">
                  <span className="font-semibold">Digital Graphic Production</span>: Leveraged graphic design platforms, such as Canva, to engineer high-resolution visual collateral 
                  (posters and infographics) optimized specifically for mobile interface rendering.
                </li>
                <li className="leading-relaxed text-base">
                  <span className="font-semibold">Strategic Copywriting</span>: Formulated concise, strategic, and engaging promotional copy. Emphasis was placed on integrating prominent 
                  Call-to-Action (CTA) directives to drive user engagement and maximize conversion rates.
                </li>
                <li className="leading-relaxed text-base">
                  <span className="font-semibold">Systematic Asset Management</span>: Implemented stringent directory management protocols by archiving all project outputs, source files, 
                  and finalized assets within the organizational server or cloud storage infrastructure, adhering to standardized taxonomy.
                </li>
              </ul>
            </section>

            <hr className="w-full border-t border-blue-400 opacity-50 my-8" />

            {/* Section 3 */}
            <section>
              <h2 className={`text-2xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Operation of WhatsApp Blasting System (WA Toolbox)
              </h2>

              <p className={`leading-relaxed text-base mb-5 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                This task requires technical understanding of the WA Toolbox automation plugin and message delivery algorithms 
                to ensure campaigns run smoothly without system restrictions or account bans.
              </p>
              

              <h3 className="text-xl font-semibold mb-3 text-blue-700 dark:text-blue-400">
                Technical Execution
              </h3>
              <ul className={`space-y-4 ml-4 list-none ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                <li className="leading-relaxed text-base">
                  <span className="font-semibold">System Configuration and Parameter Setup</span>: Calibrated the broadcasting software according to designated server specifications and the 
                  unique technical parameters of each campaign.
                </li>
                <li className="leading-relaxed text-base">
                  <span className="font-semibold">Database Integration and Variable Mapping</span>: Imported the sanitized customer databases into the automated environment, ensuring the 
                  accurate mapping of dynamic variables (e.g., personalized client names) to the corresponding database fields.
                </li>
                <li className="leading-relaxed text-base">
                  <span className="font-semibold">Automated Scheduling and Distribution</span>: Compiled broadcast packages copywriting, hyperlinks, and media attachments. 
                  Deployments were strategically scheduled during peak engagement hours tailored to the client's specific target demographic.
                </li>
                <li className="leading-relaxed text-base">
                  <span className="font-semibold">Real-Time Analytical Monitoring</span>: Evaluated live campaign performance by monitoring critical key performance indicators (KPIs), 
                  including delivery rates, open rates, and system diagnostic errors.
                </li>
                <li className="leading-relaxed text-base">
                  <span className="font-semibold">Strategic Retargeting Initiatives</span>: Isolated non-responsive prospect lists and developed automated follow-up sequences utilizing 
                  diversified linguistic variations. This approach successfully increased interaction metrics while strictly avoiding spam-flagging algorithms.
                </li>
              </ul>
            </section>

            <hr className="w-full border-t border-blue-400 opacity-50 my-12" />

            {/* Conclusion */}
            <section>
              <h2 className={`text-2xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Conclusion
              </h2>
              <p className={`leading-relaxed text-base ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                In summary, the industrial training at HIT Digital Marketing provided invaluable practical exposure to the application of digital 
                technologies within a commercial landscape. Hands-on involvement in database administration, WhatsApp automation protocols, 
                and digital content generation has substantially fortified my foundational IT competencies. This experience has successfully 
                cultivated a rigorous professional ethic, enhanced systematic problem-solving capabilities, and instilled a profound sense of 
                accountability in managing proprietary client data while fulfilling organizational objectives.
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Technical;

