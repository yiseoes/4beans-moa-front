import { getPartyList, getPartyDetail } from "../api/partyApi";

export const fetchPartyList = async () => {
  const res = await getPartyList();
  return res.data.data;
};

export const fetchPartyDetail = async (id) => {
  const res = await getPartyDetail(id);
  return res.data.data;
};
