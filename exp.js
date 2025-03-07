async function fetchExpiration() {
    let userIDElement = document.querySelector("#userID span"); // Kunin ang tamang userID
    let macElement = document.getElementById("mac"); // Kunin ang MAC address

    let userID = userIDElement ? userIDElement.textContent.trim() : ""; // Kunin lang ang UserID
    let macID = macElement ? macElement.textContent.trim().replace(/:/g, "") : ""; // Convert MAC

    async function getExpiration(id) {
        if (!id) return null; // Walang ID, return agad

        let filePath = `data/${id}.txt`;
        console.log("📂 Fetching file:", filePath);

        try {
            let response = await fetch(filePath, { cache: "no-store" }); // Bypass cache
            if (!response.ok) throw new Error("File not found");

            let fileContent = await response.text();
            console.log("📄 File Content:", fileContent);

            let expData = fileContent.split("#")[1]?.trim();
            return expData || null; // Return expiration data kung meron
        } catch (error) {
            console.warn(`⚠️ File not found for ${id}, trying fallback...`);
            return null; // Walang file, balik `null`
        }
    }

    // 🔄 Step 1: Subukan munang gamitin ang userID
    let expData = await getExpiration(userID);

    // 🔄 Step 2: Kung walang expiration data, subukan ang MAC address
    if (!expData && macID) {
        expData = await getExpiration(macID);
    }

    // 🔄 Step 3: Kung wala pa rin, ipakita ang "Not Available"
    if (!expData) {
        document.getElementById("exp12").textContent = "Not Available";
        return;
    }

    // ✅ Kung oras lang ang laman, idagdag ang kasalukuyang petsa
    let formattedExp = expData.includes(":") && !expData.includes("/")
        ? convertTo12HourFormatWithDate(expData) // Oras lang
        : convertTo12HourFormat(expData); // May petsa na

    console.log("⏳ Converted Expiration:", formattedExp);
    document.getElementById("exp12").textContent = formattedExp; 
}
