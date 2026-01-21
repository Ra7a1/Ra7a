const modalForm = document.getElementById("orderFormModal");
const serviceTypeModal = document.getElementById("serviceTypeModal");
const descriptionFieldModal = document.getElementById("descriptionFieldModal");
const successMessageModal = document.getElementById("successMessageModal");
const nameModal = document.getElementById("nameModal");
const discordModal = document.getElementById("discordModal");
const phoneModal = document.getElementById("phoneModal");
const descriptionModal = document.getElementById("descriptionModal");

serviceTypeModal.addEventListener("change", () => {
  if (serviceTypeModal.value === "بوتات مخصصة" || serviceTypeModal.value === "برمجة مواقع ويب") {
    descriptionFieldModal.classList.remove("hidden");
  } else {
    descriptionFieldModal.classList.add("hidden");
  }
});

modalForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  // هنا ممكن إرسال Webhook
  // await sendWebhook(...);

  modalForm.reset();
  descriptionFieldModal.classList.add("hidden");

  // عرض رسالة نجاح 🎉
  successMessageModal.classList.remove("hidden");
  successMessageModal.innerText = "🎉 تم استلام طلبك بنجاح!";
});
