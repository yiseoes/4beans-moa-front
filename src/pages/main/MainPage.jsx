export default function MainPage() {
  return (
    <>
      {/* 배너 영역 */}
      <section className="pt-20 bg-gradient-to-r from-purple-700 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 relative">
          <h2 id="mainBannerTitle" className="text-3xl font-extrabold leading-normal">
            혼자 내면 부담, 같이 내면 반값!
          </h2>

          <p id="mainBannerDesc" className="mt-4 text-lg opacity-90">
            모든 OTT를 저렴하게 함께 이용하세요.
          </p>

          <div className="mt-8 flex gap-3">
            <button className="px-6 py-3 bg-white text-gray-800 rounded-xl font-semibold shadow" role="link" data-href="/party">
              파티 찾기
            </button>
            <button className="px-6 py-3 bg-transparent border border-white rounded-xl font-semibold" role="link" data-href="/party">
              파티 만들기
            </button>
          </div>
        </div>
      </section>

      {/* 혜택 3개 */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-lg">악덕 걱정 NO</h3>
            <p className="text-sm text-gray-500 mt-2">파티원 제공 정보는 100% 검증 후 매칭됩니다.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-lg">즉시 매칭</h3>
            <p className="text-sm text-gray-500 mt-2">가입 즉시 매칭! 실시간 정보 반영.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-lg">자동 정산</h3>
            <p className="text-sm text-gray-500 mt-2">매월 자동으로 정산되어 편리하게 이용.</p>
          </div>
        </div>
      </section>

      {/* 인기 파티 리스트 */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-xl font-bold mb-4">지금 뜨는 파티</h2>

        <p id="popularLoading" className="text-gray-500">로딩 중...</p>

        <div id="popularPartyList" className="grid grid-cols-1 md:grid-cols-3 gap-6"></div>
      </section>
    </>
  );
}
