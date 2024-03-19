document.addEventListener("DOMContentLoaded", function() {
  
    const quotes = [
      {
        arabic: "العِلْمُ طَرِيقُ النُّوْرِ الَّذِي يُنِيرُ حَيَاتَنَا وَيُزْرِعُ الْأَمَلَ فِي قُلُوبِنَا",
        english: "Knowledge is the path of light that illuminates our lives and instills hope in our hearts."
      },
      {
        arabic: "التَّعَلُّمُ لَيْسَ مُجَرَّدَ اكْتِسَابِ مَعْرِفَةٍ، بَلْ هُوَ رِحْلَةٌ تَشْكِلُ شَخْصِيَّتِنَا وَتُمْهِدُ طَرِيقَ النَّجَاحِ لَنَا",
        english: "Learning is not just acquiring knowledge, but it's a journey that shapes our character and paves the way for our success."
      },
      {
        arabic: "الصَّبْرُ وَالْعَزْمُ هُمَا الْمَفَتَاحَانِ الرَّئِيسَيَّانِ لِتَحْقِيقِ الْأَهْدَافِ وَتَحْقِيقِ النَّجَاحِ فِي الْحَيَاةِ",
        english: "Patience and determination are the two main keys to achieving goals and attaining success in life."
      },
      {
        arabic: "لَا تَيَأْسَ أَبَدًا، فَالْفَشَلُ هُوَ جُزْءٌ لَا يَتَجَزَّأُ مِنْ رِحْلَةِ النَّجَاحِ، وَكُلُّ خُطْوَةٍ نَقْطَعُهَا تُقْرِبُنَا أَكْثَرَ مِنْ أَحْلَامِنَا",
        english: "Never despair, for failure is an integral part of the journey to success, and every step we take brings us closer to our dreams."
      },
      {
        arabic: "التَّعْلِيمُ هُوَ السِّلَاحُ الْأَقْوَى الَّذِي يُمْكِنُنَا اسْتِخْدَامَهُ لِتَغْيِيرِ الْعَالَمِ وَتَحْقِيقِ التَّقَدُّمِ فِي الْمُجْتَمَعِ",
        english: "Education is the most powerful weapon we can use to change the world and make progress in society."
      },
      {
        arabic: "الْعِلْمُ الَّذِي لَا يُطَبَّقُ يَبْقَى فِي الْكُتُبِ",
        english: "Knowledge that is not applied remains in books."
      },
      {
        arabic: "الْجِهَدُ الْمُتَوَاصِلُ هُوَ الْمَفْتَاحُ الَّذِي يَفْتَحُ أَبْوَابَ النَّجَاحِ",
        english: "Continuous effort is the key that opens the doors to success."
      },
      {
        arabic: "التَّحَدِّيَاتُ تَجْعَلُ الْحَيَاةَ مُثِيرَةً وَتُمْنَحُنَا فُرْصَةً لِلنَّمُوِّ وَالتَّطْوُّرِ",
        english: "Challenges make life exciting and give us the opportunity to grow and develop."
      },
      {
        arabic: "لَا شَيْءَ يُمْكِنُ أَنْ يُغْنِيَكَ عَنِ الْتَّعَلُّمِ، فَالْمَعْرِفَةُ هِيَ الْقُوَّةُ",
        english: "Nothing can replace learning, for knowledge is power."
      },
      {
        arabic: "الثِّقَةُ بِالنَّفْسِ هِيَ الْمَفْتَاحُ الْأَسَاسِيُّ لِتَحْقِيقِ النَّجَاحِ فِي الْحَيَاةِ",
        english: "Self-confidence is the fundamental key to achieving success in life."
      },
      {
        arabic: "الْعَقْلُ الَّذِي يَفْتَحُ لِلتَّعَلُّمِ يَفْتَحُ لِلنَّجَاحِ",
        english: "A mind open to learning is open to success."
      },
      {
        arabic: "الْحَيَاةُ لَيْسَتْ مَسَارًا مُسْتَقِيمًا، بَلْ هِيَ رِحْلَةٌ مُلِيئَةٌ بِالتَّحَدِّيَاتِ وَالتَّجَارِبِ",
        english: "Life is not a straight path, but a journey full of challenges and experiences."
      },
      {
        arabic: "الْقُوَّةُ الْحَقِيقِيَّةُ تَأْتِي مِنَ الصَّبْرِ وَالتَّفَانِي فِي تَحْقِيقِ الْأَهْدَافِ",
        english: "True strength comes from patience and dedication to achieving goals."
      },
      {
        arabic: "كُلُّ يَوْمٍ هُوَ فُرْصَةٌ جَدِيدَةٌ لِتَحْقِيقِ النَّجَاحِ وَبَنَاءِ الْمُسْتَقْبَلِ",
        english: "Every day is a new opportunity to achieve success and build the future."
      },
      {
        arabic: "الْحِكْمَةُ تَكْمُنُ فِي قُدْرَتِنَا عَلَى الِاسْتِفَادَةِ مِنَ الْأَخْطَاءِ وَتَحْوِيلِهَا إِلَى تَجَارِبَ تَعْلِيمِيَّةٍ",
        english: "Wisdom lies in our ability to learn from mistakes and turn them into learning experiences."
      },
      {
        arabic: "النَّجَاحُ هُوَ نَتِيجَةٌ لِلْعَمَلِ الْجَادِ وَالْإِصْرَارِ عَلَى تَحْقِيقِ الْأَهْدَافِ",
        english: "Success is the result of hard work and determination to achieve goals."
      },
      {
        arabic: "الْابْتِكَارُ وَالْإِبْدَاعُ يَنْشَأَانِ مِنْ رَغْبَتِنَا فِي التَّعَلُّمِ وَاكْتِسَابِ مَهَارَاتٍ جَدِيدَةٍ",
        english: "Innovation and creativity arise from our desire to learn and acquire new skills."
      },
      {
        arabic: "الْحَيَاةُ مُلِيئَةٌ بِالْفُرُصِ وَالتَّحَدِّيَاتِ، وَكُلُّ يَوْمٍ هُوَ فُرْصَةٌ جَدِيدَةٌ لِلنَّجَاحِ",
        english: "Life is full of opportunities and challenges, and every day is a new chance for success."
      },
      {
        arabic: "النَّجَاحُ يَتَطَلَّبُ عَزْمًا وَإِصْرَارًا، وَعَدَمَ الِانْكِسَارِ أَمَامَ التَّحَدِّيَاتِ",
        english: "Success requires determination, perseverance, and not giving in to challenges."
      }
    ];
    
    // Add more quotes here
  

  let currentQuoteIndex = 0;
  const quoteArabic = document.querySelector(".quote-arabic");
  const quoteEnglish = document.querySelector(".quote-english");
  
  function slideQuote() {
    quoteArabic.textContent = quotes[currentQuoteIndex].arabic;
    quoteEnglish.textContent = quotes[currentQuoteIndex].english;
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
  }
  
  slideQuote(); // Show first quote immediately

  setInterval(slideQuote, 35000); // Change quote every 20 seconds
});
