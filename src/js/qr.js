const qrImage = document.getElementById("qrCode");
const genButton = document.getElementById("qrGenerate");

genButton.addEventListener("click", async () =>{

    genButton.style.display = "none";

    const currURL = `${window.location.origin}/src/attendance-form.html`
    console.log("URL:", currURL);

    const qrCodeImage = await QRCode.toDataURL(currURL);
    qrImage.src = qrCodeImage;


});
