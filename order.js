function xor(input, key) {
  let output = "";
  for (let i = 0; i < input.length; i++) {
    output += String.fromCharCode(input.charCodeAt(i) ^ key.charCodeAt(i % key.length));
  }
  return output;
}

function base64Decode(str) {
  return atob(str);
}

const key = "RA7A_SECRET_KEY";
const encryptedBase64 = "OjVDMSxpamwiMTZxLywqMS5FJXEwKi59JCQ2ZDI8MClYLjQganJmc2drenNqZHRwMzI3a2pndnI1ajhmdm1tYzBvNmJ0N2VnczBndmV5MTR0cGk4cWk3dHlyajJ1bGoxdnA0c3A0aWZyY3Q0M3Y3YzQwZDJ4M3NqZmQ3dWZ3b2E1Z2F2MTV0";
const WEBHOOK_URL = xor(base64Decode(encryptedBase64), key);

const form = document.getElementById("orderForm");
const serviceType = document.getElementById("serviceType");
const descriptionField = document.getElementById("descriptionField");
const successMessage = document.getElementById("successMessage");
const nameInput = document.getElementById("name");
const discordInput = document.getElementById("discord");
const phoneInput = document.getElementById("phone");
const descriptionInput = document.getElementById("description");

serviceType.addEventListener("change", () => {
  if (serviceType.value === "بوتات مخصصة" || serviceType.value === "برمجة مواقع ويب") {
    descriptionField.classList.remove("hidden");
  } else {
    descriptionField.classList.add("hidden");
  }
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const payload = {
    username: "RA7A Store",
    embeds: [
      {
        title: "📩 طلب خدمة جديد",
        color: 0x4a2f5a,
        fields: [
          { name: "🔧 نوع الطلب", value: serviceType.value, inline: false },
          { name: "👤 الاسم", value: nameInput.value, inline: true },
          { name: "💬 ديسكورد", value: discordInput.value, inline: true },
          { name: "📱 الجوال", value: phoneInput.value, inline: false },
          { name: "📝 الوصف", value: descriptionInput.value || "لا يوجد", inline: false }
        ],
        footer: { text: "RA7A Store" },
        timestamp: new Date()
      }
    ]
  };

  await fetch(WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  form.reset();
  descriptionField.classList.add("hidden");
  successMessage.classList.remove("hidden");
});
