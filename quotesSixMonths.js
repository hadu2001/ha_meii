const quotesDiv = document.querySelector(".quotes");
const fpName = document.querySelector("#fpname");
const spName = document.querySelector("#spname");

const sixMonthsQuotes = [
  `6 tháng qua là khoảng thời gian ngọt ngào và ý nghĩa nhất cuộc đời anh. Cảm ơn em đã xuất hiện và mang thế giới ngập tràn hạnh phúc đến bên anh!`,
  
  `Tròn nửa năm mình yêu nhau rồi đấy em. Cảm ơn em vì đã luôn là niềm hạnh phúc lớn nhất và là cô gái đáng yêu nhất của anh. Yêu em!`,
  
  `Nửa năm bên nhau, cùng đi qua đủ mọi buồn vui và thử thách, anh càng nhận ra mình không thể thiếu em trong đời. Anh yêu em rất nhiều!`,
  
  `Anh vẫn nhớ những chuyến đi cùng em, từ Ninh Bình thơ mộng đến vịnh Hạ Long lộng gió. Cảm ơn người bạn đồng hành tuyệt vời của anh suốt 6 tháng qua, mình cùng đi tiếp đến thật nhiều nơi nữa em nhé!`,
  
  `Mỗi ngày trôi qua bên em đều là một ngày ngập tràn niềm vui và sự ấm áp. Happy 6 months anniversary! Yêu cô gái nhỏ của anh rất nhiều.`,
  
  `Gửi đến em - cô gái đặc biệt nhất đời anh. Mong rằng chúng ta sẽ cùng nắm tay nhau đi qua thêm thật nhiều lần 6 tháng nữa nhé!`,
  
  `Yêu em không phải là một lựa chọn, đó là định mệnh ngọt ngào nhất của đời anh. Kỷ niệm 6 tháng yêu nhau thật hạnh phúc em nhé!`,
  
  `Cảm ơn em vì đã mang lại cho anh những cái ôm ấm áp, những nụ cười làm tan chảy tim anh và một tình yêu tuyệt vời suốt nửa năm qua!`
];

const sixMonthsBackgrounds = [
  "./assets/anh_6_month/IMG_1.jpg",
  "./assets/anh_6_month/IMG_20260111_235057_080.jpg",
  "./assets/anh_6_month/IMG_20260112_000822_039.jpg",
  "./assets/anh_6_month/album_MHW0075G7Pdr_output.jpg",
  "./assets/anh_6_month/z8035702974025_bcb15eddee0e530726b30a6925d6ac4c.jpg",
  "./assets/anh_6_month/z8035702980404_064d1287efc371d791e48f6a1ee426b8.jpg",
  "./assets/anh_6_month/z8035705303309_c4d3686e72b54b78802b5fbdd467a4eb.jpg",
  "./assets/anh_6_month/z8035705303420_1478876f6488cfc055a548a5f665921a.jpg",
  "./assets/anh_6_month/z8035725445396_41c70fefc64913c90fd60f9b91a10f55.jpg",
  "./assets/anh_6_month/z8035725452100_df07e292e9a6dc6caa2b5c87bff89a8f.jpg"
];

// Render quotes
sixMonthsQuotes.forEach(q => {
  const link = document.createElement("a");
  link.href = "card.html?source=six-months";

  const p = document.createElement("p");
  p.classList.add("quote");
  p.innerText = q;

  link.appendChild(p);
  quotesDiv.appendChild(link);
});

// Handle click
document.querySelectorAll(".quote").forEach(quote => {
  quote.addEventListener("click", e => {
    localStorage.setItem("chosenQuote", e.target.innerText);

    const randomBg =
      sixMonthsBackgrounds[
        Math.floor(Math.random() * sixMonthsBackgrounds.length)
      ];

    localStorage.setItem("sixMonthsBg", randomBg);
    localStorage.setItem("valentineBg", randomBg); // Fallback for card.html
  });
});

// Set names directly
fpName.innerText = "Hà";
spName.innerText = "Mai";
