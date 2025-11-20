export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-black">Privacy Policy</h1>
      
      <div className="prose prose-lg max-w-none space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-black">1. Purpose of Processing Personal Information</h2>
          <p className="text-black leading-relaxed">
            This blog processes personal information for the following purposes. The personal information being processed 
            is not used for any purpose other than the following, and if the purpose of use changes, we will take 
            necessary measures such as obtaining separate consent in accordance with Article 18 of the Personal Information Protection Act.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-black">
            <li>Website membership registration and management</li>
            <li>Provision of goods or services</li>
            <li>Use for marketing and advertising</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-black">2. Processing and Retention Period of Personal Information</h2>
          <p className="text-black leading-relaxed">
            This blog processes and retains personal information within the period of retention and use of personal information 
            in accordance with laws and regulations, or within the period of retention and use of personal information 
            agreed upon when collecting personal information from the information subject.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-black">3. Rights and Obligations of Information Subjects and How to Exercise Them</h2>
          <p className="text-black leading-relaxed">
            As a personal information subject, information subjects can exercise the following rights.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-black">
            <li>Right to request suspension of personal information processing</li>
            <li>Right to request access to personal information</li>
            <li>Right to request correction or deletion of personal information</li>
            <li>Right to request suspension of personal information processing</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-black">4. Personal Information Items to be Processed</h2>
          <p className="text-black leading-relaxed">
            This blog processes the following personal information items.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-black">
            <li>Required items: Email, Name</li>
            <li>Optional items: Phone number</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-black">5. Destruction of Personal Information</h2>
          <p className="text-black leading-relaxed">
            This blog destroys the personal information without delay when the retention period of personal information has elapsed 
            or the purpose of processing has been achieved, making the personal information unnecessary.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-black">6. Personal Information Protection Officer</h2>
          <p className="text-black leading-relaxed">
            To be in overall charge of personal information processing and to handle complaints and remedy damages related to 
            personal information processing, we have designated a personal information protection officer as follows.
          </p>
          <div className="bg-white border border-gray-300 p-4 rounded-lg mt-4">
            <p className="text-black">
              <strong>Personal Information Protection Officer</strong><br />
              Contact: contact@example.com
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-black">7. Changes to Privacy Policy</h2>
          <p className="text-black leading-relaxed">
            This privacy policy is effective from January 1, 2024, and if there are additions, deletions, or corrections 
            to the contents in accordance with laws and policies, we will notify you through the notice board 7 days before 
            the implementation of the changes.
          </p>
        </section>
      </div>
    </div>
  )
}
