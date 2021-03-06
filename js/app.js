document.addEventListener("DOMContentLoaded", function(event) {
  //install wordcloud
  var allCantik = wordCloud("allCantik")
  var maleCantik = wordCloud("maleCantik")
  var femaleCantik = wordCloud("femaleCantik")
  allCantik.draw(data.apaitucantik_count_struct)
  maleCantik.draw(data.apaitucantik_gender_count_struct[0])
  femaleCantik.draw(data.apaitucantik_gender_count_struct[1])
  var allWords = wordCloud("allWords")
  var maleWords = wordCloud("maleWords")
  var femaleWords = wordCloud("femaleWords")
  allWords.draw(data.kata_count_struct)
  maleWords.draw(data.kata_gender_count_struct[0])
  femaleWords.draw(data.kata_gender_count_struct[1])
  //highcharts
  var pandangan_chart = pieLevelChart("pandangan", "Apakah cantik hanya dari pandangan ?", data.pandangan_count, data.pandangan_gender_count)
  var intfisik_chart = pieLevelChart("intfisik", "Lebih milih intelektual atau fisik ?", data.intfisik_count, data.intfisik_gender_count)
  var intperilaku_chart = pieLevelChart("intperilaku", "Lebih milih intelektual atau perilaku ?", data.intperilaku_count, data.intperilaku_gender_count)
  var fisikperilaku_chart = pieLevelChart("fisikperilaku", "Lebih milih fisik atau perilaku ?", data.fisikperilaku_count, data.fisikperilaku_gender_count)
  var cantikgak_chart = pieLevelChart("cantikgak", "Jika kamu wanita, merasa cantik ?", data.cantikgak_count, data.cantikgak_gender_count)
  //
  var cantikgak_bubble = bubbleChart("cantikgak_bubble", "Jika kamu cantik: ya atau tidak ?", data.cantikgak_bubble)
  var cantikgak_bubble = bubbleChart("pandangangak_bubble", "Apakah cantik dari pandangan: ya atau tidak ?", data.pandangangak_bubble)
  //
  var fisikall_chart = pieLevelChart("fisikall", "Bila fisik yang utama ?", data.fisik_all_count, data.fisik_all_gender_count)
  var perilakuall_chart = pieLevelChart("perilakuall", "Bila perilaku yang utama ?", data.perilaku_all_count, data.perilaku_all_gender_count)
  var intelektualall_chart = pieLevelChart("intelektualall", "Bila intelektual yang utama ?", data.intelektual_all_count, data.intelektual_all_gender_count)

  // console.log("DOM fully loaded and parsed");
});