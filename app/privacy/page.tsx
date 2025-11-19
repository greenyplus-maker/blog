export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">개인정보 보호방침</h1>
      
      <div className="prose prose-lg max-w-none space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. 개인정보의 처리 목적</h2>
          <p className="text-gray-700 leading-relaxed">
            본 블로그는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 
            이용 목적이 변경되는 경우에는 개인정보 보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>홈페이지 회원 가입 및 관리</li>
            <li>재화 또는 서비스 제공</li>
            <li>마케팅 및 광고에의 활용</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. 개인정보의 처리 및 보유기간</h2>
          <p className="text-gray-700 leading-relaxed">
            본 블로그는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 
            개인정보를 처리·보유합니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. 정보주체의 권리·의무 및 행사방법</h2>
          <p className="text-gray-700 leading-relaxed">
            정보주체는 개인정보주체로서 다음과 같은 권리를 행사할 수 있습니다.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>개인정보 처리정지 요구권</li>
            <li>개인정보 열람요구권</li>
            <li>개인정보 정정·삭제요구권</li>
            <li>개인정보 처리정지 요구권</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. 처리하는 개인정보의 항목</h2>
          <p className="text-gray-700 leading-relaxed">
            본 블로그는 다음의 개인정보 항목을 처리하고 있습니다.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>필수항목: 이메일, 이름</li>
            <li>선택항목: 전화번호</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. 개인정보의 파기</h2>
          <p className="text-gray-700 leading-relaxed">
            본 블로그는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. 개인정보 보호책임자</h2>
          <p className="text-gray-700 leading-relaxed">
            개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 
            아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mt-4">
            <p className="text-gray-700">
              <strong>개인정보 보호책임자</strong><br />
              연락처: contact@example.com
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. 개인정보 처리방침 변경</h2>
          <p className="text-gray-700 leading-relaxed">
            이 개인정보 처리방침은 2024년 1월 1일부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 
            변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
          </p>
        </section>
      </div>
    </div>
  )
}

