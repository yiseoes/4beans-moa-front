import axios from "axios";

export function initMainPage() {
  const title = document.getElementById("mainBannerTitle");
  const desc = document.getElementById("mainBannerDesc");
  const popularList = document.getElementById("popularPartyList");
  const loading = document.getElementById("popularLoading");

  axios
    .all([
      axios.get("/api/main/banner"),
      axios.get("/api/main/popular-parties")
    ])
    .then(
      axios.spread((bannerRes, partyRes) => {
        if (bannerRes.data.success) {
          title.innerText = bannerRes.data.data.title;
          desc.innerText = bannerRes.data.data.description;
        }

        if (partyRes.data.success) {
          loading.classList.add("hidden");

          const list = partyRes.data.data;

          popularList.innerHTML = list
            .map(
              (p) => `
            <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition" 
                 role="link" data-href="/party/${p.id}">
              <h3 class="font-bold">${p.title}</h3>
              <p class="text-sm text-gray-500 mt-1">${p.description}</p>
              <p class="mt-3 font-semibold">₩${p.price}</p>
            </div>
          `
            )
            .join("");
        }
      })
    )
    .catch(() => {
      loading.innerText = "데이터 불러오기 실패";
    });
}
