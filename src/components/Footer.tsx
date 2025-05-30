import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';

const Footer = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [ethicsOpen, setEthicsOpen] = useState(false);

  return (
  <footer className="w-full py-4 px-2 bg-black border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-gray-400 z-50">
    <div className="flex items-center gap-2">
      <span className="font-bold text-white">Okra</span>
      <span className="hidden md:inline">© {new Date().getFullYear()} All rights reserved.</span>
        <span className="hidden md:inline mx-2">|</span>
        <a
          href="https://neuralarc.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-white transition"
        >
          <span>A thing by Neural Arc</span>
          <img src="/neural-footer.png" alt="Neural Arc Logo" style={{ height: 20 }} className="ml-1" />
        </a>
    </div>
    <div className="flex items-center gap-4">
        <button className="underline hover:text-white transition" onClick={() => setPrivacyOpen(true)}>Privacy Policy</button>
        <button className="underline hover:text-white transition" onClick={() => setEthicsOpen(true)}>Responsible AI & Disclaimer</button>
      </div>
      {/* Privacy Policy Modal */}
      <Dialog open={privacyOpen} onOpenChange={setPrivacyOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-black/90 text-white/80 border-white/10">
          <DialogHeader>
            <DialogTitle className="text-white">Privacy Policy</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-sm">
            <p className="text-white/90">Effective Date: May 2, 2025</p>
            <p>Okra ("Platform," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our Platform, including any AI-based tools or services we provide.</p>
            <div className="space-y-2">
              <h4 className="text-white font-medium">1. Information We Collect</h4>
              <p>We may collect the following types of information:</p>
              <h5 className="text-white/90">a. Personal Information</h5>
              <p>Information you voluntarily provide, such as:</p>
              <ul className="list-disc list-inside ml-4">
                <li>Name</li>
                <li>Email address</li>
                <li>Any additional contact details</li>
                <li>Content or inputs provided to AI tools (if associated with a user identity)</li>
              </ul>
              <h5 className="text-white/90">b. Usage Data</h5>
              <p>Automatically collected information such as:</p>
              <ul className="list-disc list-inside ml-4">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Date and time of your visit</li>
                <li>Pages viewed and time spent</li>
                <li>Referring/exit pages</li>
                <li>Clickstream data</li>
              </ul>
              <h5 className="text-white/90">c. Cookies and Tracking Technologies</h5>
              <p>We use cookies, pixels, and similar technologies for analytics and functionality. You can disable cookies through your browser settings.</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-white font-medium">2. How We Use Your Information</h4>
              <p>We use collected information for the following purposes:</p>
              <ul className="list-disc list-inside ml-4">
                <li>To operate, manage, and maintain the Platform.</li>
                <li>To improve the performance and accuracy of AI systems.</li>
                <li>To personalize your experience.</li>
                <li>To respond to queries or support requests.</li>
                <li>For data analysis and system monitoring.</li>
                <li>To comply with legal obligations.</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-white font-medium">3. Sharing and Disclosure</h4>
              <p>We do not sell your data. However, we may share your data in the following situations:</p>
              <ul className="list-disc list-inside ml-4">
                <li>With service providers who support our infrastructure, under strict data protection agreements.</li>
                <li>With law enforcement or government agencies when required by law.</li>
                <li>In case of business transitions, such as mergers or acquisitions.</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-white font-medium">4. Data Storage and Security</h4>
              <p>We employ industry-standard security practices including:</p>
              <ul className="list-disc list-inside ml-4">
                <li>SSL encryption</li>
                <li>Access control protocols</li>
                <li>Regular vulnerability scans</li>
              </ul>
              <p>Despite our efforts, no digital transmission or storage system is completely secure. Use at your own discretion.</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-white font-medium">5. Your Rights</h4>
              <p>Depending on your jurisdiction, you may have the following rights:</p>
              <ul className="list-disc list-inside ml-4">
                <li>Access to your data</li>
                <li>Correction of inaccurate data</li>
                <li>Deletion or restriction of processing</li>
                <li>Data portability</li>
                <li>Withdrawal of consent</li>
                <li>Lodging a complaint with a regulatory authority</li>
              </ul>
            </div>
            <p>For inquiries, contact us at: support@neuralarc.ai</p>
          </div>
        </DialogContent>
      </Dialog>
      {/* Responsible AI Modal */}
      <Dialog open={ethicsOpen} onOpenChange={setEthicsOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-black/90 text-white/80 border-white/10">
          <DialogHeader>
            <DialogTitle className="text-white">Responsible AI & Disclaimer</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-sm">
            <h3 className="text-white font-medium">Responsible AI Use Policy</h3>
            <p>We are committed to developing and deploying AI responsibly. AI technologies hosted on https://okra-woad.vercel.app are designed to augment human decision-making, not replace it.</p>
            <div className="space-y-2">
              <h4 className="text-white font-medium">Our Principles</h4>
              <ol className="list-decimal list-inside ml-4 space-y-2">
                <li>
                  <span className="text-white/90">Transparency</span>
                  <ul className="list-disc list-inside ml-4">
                    <li>Clear communication when users are interacting with AI.</li>
                    <li>Explanation of how results are generated wherever feasible.</li>
                  </ul>
                </li>
                <li>
                  <span className="text-white/90">Human Oversight</span>
                  <ul className="list-disc list-inside ml-4">
                    <li>AI suggestions or outputs should be reviewed by a qualified human.</li>
                    <li>Critical or sensitive decisions (e.g., legal or health matters) must not be made solely based on AI output.</li>
                  </ul>
                </li>
                <li>
                  <span className="text-white/90">Robustness and Safety</span>
                  <ul className="list-disc list-inside ml-4">
                    <li>We test AI systems to identify and minimize errors and unintended consequences.</li>
                    <li>Feedback mechanisms are built to report inappropriate or harmful behavior.</li>
                  </ul>
                </li>
                <li>
                  <span className="text-white/90">Privacy-Aware Design</span>
                  <ul className="list-disc list-inside ml-4">
                    <li>Minimal collection of personal data.</li>
                    <li>Short-term retention of user inputs (only if necessary).</li>
                  </ul>
                </li>
                <li>
                  <span className="text-white/90">Purpose Limitation</span>
                  <ul className="list-disc list-inside ml-4">
                    <li>AI tools are deployed only for clearly defined, ethical, and socially beneficial use cases.</li>
                  </ul>
                </li>
              </ol>
            </div>
            <div className="space-y-2">
              <h4 className="text-white font-medium">Ethical AI Guidelines</h4>
              <p>We believe AI should benefit all users and be governed by principles that uphold fairness, accountability, and human dignity.</p>
              <h4 className="text-white font-medium">Key Values</h4>
              <ol className="list-decimal list-inside ml-4 space-y-2">
                <li>
                  <span className="text-white/90">Fairness & Non-Discrimination</span>
                  <ul className="list-disc list-inside ml-4">
                    <li>Our AI models are evaluated to reduce bias and promote inclusive use.</li>
                    <li>Discriminatory or harmful content generation is actively monitored and filtered.</li>
                  </ul>
                </li>
                <li>
                  <span className="text-white/90">Accountability</span>
                  <ul className="list-disc list-inside ml-4">
                    <li>We accept responsibility for the behavior and consequences of our AI systems.</li>
                    <li>We encourage users to report concerns via support@neuralarc.ai</li>
                  </ul>
                </li>
                <li>
                  <span className="text-white/90">Autonomy</span>
                  <ul className="list-disc list-inside ml-4">
                    <li>Users are empowered to understand and control their interaction with AI.</li>
                    <li>AI should never manipulate, coerce, or deceive.</li>
                  </ul>
                </li>
                <li>
                  <span className="text-white/90">Do No Harm</span>
                  <ul className="list-disc list-inside ml-4">
                    <li>We design AI tools with safeguards to prevent misuse, harm, or exploitation.</li>
                    <li>Malicious use of AI tools is prohibited.</li>
                  </ul>
                </li>
                <li>
                  <span className="text-white/90">Accessibility</span>
                  <ul className="list-disc list-inside ml-4">
                    <li>We strive to make the Platform accessible and usable by people of all backgrounds and abilities.</li>
                  </ul>
                </li>
              </ol>
            </div>
            <div className="space-y-2">
              <h4 className="text-white font-medium">Disclaimer</h4>
              <p>Please read this Disclaimer carefully before using the Platform.</p>
              <p>The tools and content available at https://okra-woad.vercel.app are provided "as is" and are intended for informational and experimental purposes only. By using the Platform, you acknowledge and agree to the following:</p>
              <ol className="list-decimal list-inside ml-4 space-y-2">
                <li>
                  <span className="text-white/90">No Professional Advice</span>
                  <p>The AI-generated outputs are not a substitute for professional advice in:</p>
                  <ul className="list-disc list-inside ml-4">
                    <li>Legal</li>
                    <li>Medical</li>
                    <li>Financial</li>
                    <li>Psychological</li>
                  </ul>
                  <p>or any other regulated domain. Always consult a licensed professional.</p>
                </li>
                <li>
                  <span className="text-white/90">Limitation of Liability</span>
                  <p>We shall not be held liable for:</p>
                  <ul className="list-disc list-inside ml-4">
                    <li>Any direct or indirect loss or damage arising from reliance on AI outputs.</li>
                    <li>Errors, inaccuracies, or omissions in the AI-generated content.</li>
                    <li>Unintended consequences or misuse of AI tools.</li>
                  </ul>
                </li>
                <li>
                  <span className="text-white/90">User Responsibility</span>
                  <p>You are solely responsible for:</p>
                  <ul className="list-disc list-inside ml-4">
                    <li>The content you input into the system.</li>
                    <li>How you use and interpret the output.</li>
                    <li>Ensuring your use complies with applicable laws and ethical norms.</li>
                  </ul>
                </li>
                <li>
                  <span className="text-white/90">AI Limitations</span>
                  <p>Our AI tools may:</p>
                  <ul className="list-disc list-inside ml-4">
                    <li>Generate incorrect or misleading results.</li>
                    <li>Fail to understand context or nuance.</li>
                    <li>Produce biased or inappropriate content.</li>
                  </ul>
                </li>
              </ol>
              <p>Use discretion and critical judgment when using the Platform.</p>
            </div>
    </div>
        </DialogContent>
      </Dialog>
  </footer>
);
};

export default Footer; 