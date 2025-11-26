import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchPartyDetail } from "../../services/partyService";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";

export default function PartyDetailPage() {
  const { id } = useParams();
  const [party, setParty] = useState(null);

  useEffect(() => {
    fetchPartyDetail(id).then(setParty);
  }, [id]);

  if (!party) return <p>불러오는 중…</p>;

  return (
    <div>
      <Header />

      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold">{party.title}</h1>

        <p className="mt-4 text-gray-600">{party.description}</p>

        <p className="mt-6 text-xl font-semibold">월 ₩{party.price}</p>
      </div>
    </div>
  );
}
