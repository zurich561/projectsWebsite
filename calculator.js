

  function toggleTab(tabNumber) {
    // Verberge alle Tab-Inhalte
    var tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(function (content) {
      content.classList.remove('active');
    });

    // Zeige den ausgewählten Tab-Inhalt an
    var selectedTab = document.getElementById('tab' + tabNumber);
    selectedTab.classList.add('active');
  }