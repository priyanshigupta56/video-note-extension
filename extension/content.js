if (!document.getElementById("vidionotes-floating-btn")) {
  // === Floating Button ===
  const button = document.createElement("button");
  button.id = "vidionotes-floating-btn";
  button.style.position = "fixed";
  button.style.bottom = "20px";
  button.style.right = "20px";
  button.style.width = "60px";
  button.style.height = "60px";
  button.style.backgroundColor = "#f8d7da"; // Light reddish background for better visibility
  button.style.border = "none";
  button.style.borderRadius = "50%";
  button.style.zIndex = "10000";
  button.style.cursor = "pointer";
  button.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.2)";
  button.style.display = "flex";
  button.style.alignItems = "center";
  button.style.justifyContent = "center";

  // Add an image or icon to the button
  const logo = document.createElement("img");
  logo.src = chrome.runtime.getURL("logoimg.png"); // Ensure this path is correct
  logo.alt = "Note Logo";
  logo.style.width = "70px"; // Adjusted width to fit the button
  logo.style.height = "70px"; // Adjusted height to fit the button
  logo.style.borderRadius = "50%"; // Optional: Make the logo circular if needed
  button.appendChild(logo);

  document.body.appendChild(button);

  // === Modal (Draggable + Resizable) ===
  const modal = document.createElement("div");
  modal.id = "vidionotes-modal";
  modal.style.position = "fixed";
  modal.style.zIndex = "10001";
  modal.style.display = "none";
  modal.style.backgroundColor = "#fff";
  modal.style.border = "1px solid #ccc";
  modal.style.borderRadius = "10px";
  modal.style.padding = "10px";
  modal.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.3)";
  modal.style.width = "340px";
  modal.style.height = "auto";
  modal.style.minHeight = "240px";

  modal.style.resize = "both";
  modal.style.overflow = "auto";
  modal.style.cursor = "move";

  modal.innerHTML = `
  <div id="vidionotes-header" style="cursor: move; font-weight: bold; color: #e63946; padding: 8px 0;">
    Add Timestamped Note
  </div>
  <textarea id="note-text" style="width: 100%; height: 60px; margin-bottom: 10px; padding: 8px; border-radius: 6px; border: 1px solid #ccc;" placeholder="Write your note..."></textarea>

  <label style="font-size: 14px; font-weight: 500; display: block; margin-bottom: 4px;">Select Category</label>
  <select id="note-category" style="width: 100%; padding: 6px; margin-bottom: 12px; border: 1px solid #ccc; border-radius: 6px;">
    <option value="">-- Choose Category --</option>
    <option value="Important">Important</option>
    <option value="Doubt">Doubt</option>
    <option value="Rewatch">Rewatch</option>
  </select>

  <div style="display: flex; gap: 10px; margin-bottom: 12px;">
    <input id="start-time" type="text" placeholder="Start Time (e.g. 01:20)" style="flex: 1; padding: 6px; border-radius: 6px; border: 1px solid #ccc;">
    <button id="set-start-time" style="padding: 6px; background-color: #e63946; color: white; border: none; border-radius: 6px;">Set Start</button>
  </div>
  <div style="display: flex; gap: 10px; margin-bottom: 12px;">
    <input id="end-time" type="text" placeholder="End Time (e.g. 02:00)" style="flex: 1; padding: 6px; border-radius: 6px; border: 1px solid #ccc;">
    <button id="set-end-time" style="padding: 6px; background-color: #e63946; color: white; border: none; border-radius: 6px;">Set End</button>
  </div>

  <div style="text-align: right;">
    <button id="vidionotes-cancel" style="margin-right: 10px; background-color: #ccc; border: none; padding: 6px 12px; border-radius: 6px;">Cancel</button>
    <button id="vidionotes-save" style="background-color: #e63946; color: white; border: none; padding: 6px 12px; border-radius: 6px;">Save</button>
  </div>
`;

  document.body.appendChild(modal);

  // === Show modal above the button ===
  button.addEventListener("click", () => {
    const btnRect = button.getBoundingClientRect();
    modal.style.left = `${btnRect.left}px`;
    modal.style.top = `${btnRect.top - 150}px`;
    modal.style.display = modal.style.display === "none" ? "block" : "none";
  });

  // === Close modal ===
  modal.querySelector("#vidionotes-cancel").addEventListener("click", () => {
    modal.style.display = "none";
  });

  // === Set Start and End Times ===
  const setStartTimeBtn = modal.querySelector("#set-start-time");
  const setEndTimeBtn = modal.querySelector("#set-end-time");
  const startTimeInput = modal.querySelector("#start-time");
  const endTimeInput = modal.querySelector("#end-time");

  setStartTimeBtn.addEventListener("click", () => {
    const video = document.querySelector("video");
    if (video) {
      const currentTime = video.currentTime;
      startTimeInput.value = new Date(currentTime * 1000).toISOString().substr(11, 8);
    } else {
      alert("No video found on the page.");
    }
  });

  setEndTimeBtn.addEventListener("click", () => {
    const video = document.querySelector("video");
    if (video) {
      const currentTime = video.currentTime;
      endTimeInput.value = new Date(currentTime * 1000).toISOString().substr(11, 8);
    } else {
      alert("No video found on the page.");
    }
  });

  // === Make Modal Draggable ===
  const dragHeader = modal.querySelector("#vidionotes-header");
  let isDragging = false;
  let offsetX = 0, offsetY = 0;

  dragHeader.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - modal.offsetLeft;
    offsetY = e.clientY - modal.offsetTop;
    document.body.style.userSelect = "none";
  });

  document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      modal.style.left = `${e.clientX - offsetX}px`;
      modal.style.top = `${e.clientY - offsetY}px`;
    }
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
    document.body.style.userSelect = "auto";
  });

  // === Save Note ===
  document.getElementById("vidionotes-save").addEventListener("click", async () => {
    const noteText = document.getElementById("note-text").value;
    const category = document.getElementById("note-category").value;
    const startTime = document.getElementById("start-time").value;
    const endTime = document.getElementById("end-time").value;

    // Validate input
    if (!noteText || !category || !startTime || !endTime) {
      alert("Please fill in all fields.");
      return;
    }

    // Prepare data to send to the backend
    const noteData = {
      noteId: `note-${Date.now()}`, // Generate a unique note ID
      userId: "user123", // Replace with the actual user ID (if available)
      videoTitle: document.title, // Use the current page's title as the video title
      category,
      startTime,
      endTime,
    };

    try {
      // Send data to the backend
      const response = await fetch("http://localhost:5000/note/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(noteData),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Note saved successfully!");
        modal.style.display = "none"; // Close the modal
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  });
}
