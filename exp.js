async function fetchExpiration() {
    let userIDElement = document.querySelector("#userID span"); // Kunin ang tamang userID
    let macElement = document.getElementById("mac"); // Kunin ang MAC address

    let userID = userIDElement ? userIDElement.textContent.trim() : ""; // Kunin lang ang UserID

    // ✅ Gamitin lang ang MAC kung WALANG laman ang userID
    if (!userID && macElement) {
        userID = macElement.textContent.trim().replace(/:/g, ""); 
    }

    if (!userID) {
        console.warn("❌ Walang userID o MAC address!");
        document.getElementById("exp12").textContent = "Not Available";
        return;
    }

    let filePath = `data/${userID}.txt`; 
    console.log("📂 Fetching file:", filePath); 

    try {
        let response = await fetch(filePath, { cache: "no-store" }); // Bypass cache
        if (!response.ok) throw new Error("File not found");

        let fileContent = await response.text();
        console.log("📄 File Content:", fileContent); 

        let expData = fileContent.split("#")[1]?.trim(); 

        // ✅ Kung walang expiration date, ipakita ang "No Expiration"
        if (!expData) {
            console.warn("❌ Walang expiration data sa file!");
            document.getElementById("exp12").textContent = "No Expiration";
            return;
        }

        // ✅ Kung oras lang ang laman, idagdag ang kasalukuyang petsa
        let formattedExp = expData.includes(":") && !expData.includes("/")
            ? convertTo12HourFormatWithDate(expData) // Oras lang
            : convertTo12HourFormat(expData); // May petsa na

        console.log("⏳ Converted Expiration:", formattedExp); 

        document.getElementById("exp12").textContent = formattedExp; 
    } catch (error) {
        console.error("⚠️ Error loading expiration data:", error);
        document.getElementById("exp12").textContent = "Not Available"; // ✅ Kung walang file
    }
}

// ✅ Function para magdagdag ng kasalukuyang petsa kung oras lang ang laman
function convertTo12HourFormatWithDate(timeText) {
    let today = new Date();
    let datePart = `${today.toLocaleString('en-US', { month: 'short' })}/${String(today.getDate()).padStart(2, "0")}`; 
    return convertTo12HourFormat(`${datePart} ${timeText}`);
}

// ✅ Function para mag-convert sa 12-hour format
function convertTo12HourFormat(dateTimeText) {
    if (!dateTimeText) return "No Expiration"; 

    let parts = dateTimeText.split(" "); 
    if (parts.length < 2) return dateTimeText; 

    let datePart = parts[0]; 
    let timePart = parts[1]; 

    let [hours, minutes, seconds] = timePart.split(":").map(Number);
    if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) return dateTimeText; 

    let period = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; 

    return `${datePart} ${hours}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")} ${period}`;
}

// ✅ Run function kada segundo
document.addEventListener("DOMContentLoaded", () => {
    fetchExpiration(); // Initial load
    setInterval(fetchExpiration, 1000); // Update every second
});











document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        let statusElement = document.getElementById("status");
        let pauseBtn = document.getElementById("pauseBtn");

        if (statusElement && pauseBtn) {
            let statusText = statusElement.textContent.trim().toLowerCase();

            if (statusText !== "disconnected") {
                pauseBtn.click(); // First click
                setTimeout(() => pauseBtn.click(), 500); // Second click after 500ms
            } else {
                console.log("Status is 'Disconnected', skipping button clicks.");
            }
        }
    }, 1000); // Wait 1 second after page load before checking and clicking
});