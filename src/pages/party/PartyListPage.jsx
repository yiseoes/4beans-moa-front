import { useEffect, useState } from "react";
import { fetchPartyList } from "../../services/partyService";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";

export default function PartyListPage() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetchPartyList().then(setList);
  }, []);

  return (
    <div>
      <Header />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">파티 찾기</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {list.map((item) => (
            <div key={item.id} className="p-6 bg-white rounded-lg shadow">
              <h3 className="font-bold">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>

              <button
                role="link"
                data-href={`/party/${item.id}`}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
              >
                상세보기
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
