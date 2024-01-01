// Custom Event to change tab
export default function handleChangeTab(tabName) {
  const changeTabEvent = new CustomEvent("changeTab", {
    detail: {
      tabName: tabName,
    },
  });
  dispatchEvent(changeTabEvent);
}
