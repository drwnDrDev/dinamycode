document.addEventListener("DOMContentLoaded", () => {
  const tabWraps = Array.from(document.querySelectorAll(".tab-wrap"));
  const tabButtons = Array.from(document.querySelectorAll("[data-tab-trigger]"));

  const closeAllTabs = () => {
    tabWraps.forEach((wrap) => {
      wrap.classList.remove("open");
      const button = wrap.querySelector("button");
      if (button) {
        button.setAttribute("aria-expanded", "false");
      }
    });
  };

  const openTab = (button) => {
    const wrap = button.closest(".tab-wrap");
    if (!wrap) {
      return;
    }

    const isOpen = wrap.classList.contains("open");
    closeAllTabs();

    if (!isOpen) {
      wrap.classList.add("open");
      button.setAttribute("aria-expanded", "true");
    }
  };

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => openTab(button));
  });

  const firstButton = tabButtons[0];
  if (firstButton) {
    openTab(firstButton);
  }
});
