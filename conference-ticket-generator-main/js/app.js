document.addEventListener("DOMContentLoaded", () => {
  const avatar = document.getElementById("avatar");
  const preload_content = avatar.parentNode;
  const img = document.getElementById("img-loaded");
  const content_img = img.parentNode;
  const btn_change = document.getElementById("change-img");
  const btn_remove = document.getElementById("remove-img");
  avatar.addEventListener(
    "change",
    (evt) => {
      evt.preventDefault();
      const myFile = evt.target.files[0];
      preload_content.style.display = "none";
      img.src = URL.createObjectURL(myFile);
      content_img.style.display = "flex";
    },
    false,
  );
  btn_remove.addEventListener("click", (evt) => {
    evt.preventDefault();
    URL.revokeObjectURL(img.src);
    preload_content.style.display = "";
    content_img.style.display = "none";
  });
});
