import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";

export default function MyPage() {
  return (
    <div>
      <Header />

      <div className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold">마이페이지</h2>

        <p className="mt-4 text-gray-600">
          사용자 정보, 가입 파티, 결제 정보 등을 표시할 예정
        </p>
      </div>
    </div>
  );
}
