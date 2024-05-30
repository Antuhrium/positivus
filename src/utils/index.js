export const handleClickScroll = (navLink) => {
  const element = document.getElementById(navLink);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
