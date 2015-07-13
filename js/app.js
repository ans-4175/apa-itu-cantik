document.addEventListener("DOMContentLoaded", function(event) {
  //install wordcloud
  var allWords = wordCloud("allWords")
  var maleWords = wordCloud("maleWords")
  var femaleWords = wordCloud("femaleWords")
  allWords.draw(data.kata_count_struct)
  maleWords.draw(data.kata_gender_count_struct[0])
  femaleWords.draw(data.kata_gender_count_struct[1])
  //highcharts
  var pandangan_chart = pieChart("pandangan", "Apakah cantik hanya dari pandangan ?", data.pandangan_count, data.pandangan_gender_count)
  var intfisik_chart = pieChart("intfisik", "Lebih milih intelektual atau fisik ?", data.intfisik_count, data.intfisik_gender_count)
  var intperilaku_chart = pieChart("intperilaku", "Lebih milih intelektual atau perilaku ?", data.intperilaku_count, data.intperilaku_gender_count)
  var fisikperilaku_chart = pieChart("fisikperilaku", "Lebih milih fisik atau perilaku ?", data.fisikperilaku_count, data.fisikperilaku_gender_count)
  var cantikgak_chart = pieChart("cantikgak", "Jika kamu wanita, merasa cantik ?", data.cantikgak_count, data.cantikgak_gender_count)

  // console.log("DOM fully loaded and parsed");
});