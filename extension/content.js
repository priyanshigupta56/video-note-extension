if (!document.getElementById("vidionotes-floating-btn")) {
  // === Floating Button ===
  const button = document.createElement("button");
  button.id = "vidionotes-floating-btn";
  button.style.position = "fixed";
  button.style.bottom = "20px";
  button.style.right = "20px";
  button.style.width = "60px";
  button.style.height = "60px";
  button.style.backgroundColor = "#f8d7da";
  button.style.border = "none";
  button.style.borderRadius = "50%";
  button.style.zIndex = "10000";
  button.style.cursor = "pointer";
  button.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.2)";
  button.style.display = "flex";
  button.style.alignItems = "center";
  button.style.justifyContent = "center";
  button.style.padding = "0";
  button.style.overflow = "hidden";

  // Add an image or icon to the button
  const logo = document.createElement("img");
  logo.src = chrome.runtime.getURL("logoimgpart2.png");
  logo.alt = "Note Logo";
  logo.style.width = "60px";
  logo.style.height = "60px";
  logo.style.objectFit = "contain";
  logo.style.borderRadius = "50%";
 
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
  modal.style.maxHeight = "80vh";
  modal.style.maxWidth = "90vw";
  modal.style.height = "400px";
  modal.style.width = "340px";
  modal.style.overflowY = "auto";
  modal.style.resize = "both";
  modal.style.overflow = "auto";

  // Add modal to DOM first
  document.body.appendChild(modal);

  function renderModalContent() {
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
        <button id="set-start-time" style="padding: 6px; background-color: #e63946; color: white; border: none; border-radius: 6px; cursor: pointer;">Set Start</button>
      </div>
      <div style="display: flex; gap: 10px; margin-bottom: 12px;">
        <input id="end-time" type="text" placeholder="End Time (e.g. 02:00)" style="flex: 1; padding: 6px; border-radius: 6px; border: 1px solid #ccc;">
        <button id="set-end-time" style="padding: 6px; background-color: #e63946; color: white; border: none; border-radius: 6px; cursor: pointer;">Set End</button>
      </div>
      <div style="text-align: right;">
        <button id="vidionotes-cancel" style="margin-right: 10px; background-color: #ccc; border: none; padding: 6px 12px; border-radius: 6px; cursor: pointer;">Cancel</button>
        <button id="vidionotes-save" style="background-color: #e63946; color: white; border: none; padding: 6px 12px; border-radius: 6px; cursor: pointer;">Save</button>
      </div>
    `;

    // Attach event listeners after content is rendered
    attachEventListeners();
  }

  function attachEventListeners() {
    const setStartTimeBtn = modal.querySelector("#set-start-time");
    const setEndTimeBtn = modal.querySelector("#set-end-time");
    const startTimeInput = modal.querySelector("#start-time");
    const endTimeInput = modal.querySelector("#end-time");
    const cancelBtn = modal.querySelector("#vidionotes-cancel");
    const saveBtn = modal.querySelector("#vidionotes-save");

    if (setStartTimeBtn) {
      setStartTimeBtn.addEventListener("click", () => {
        const video = document.querySelector("video");
        if (video) {
          const currentTime = video.currentTime;
          const hours = Math.floor(currentTime / 3600);
          const minutes = Math.floor((currentTime % 3600) / 60);
          const seconds = Math.floor(currentTime % 60);
          startTimeInput.value = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        } else {
          alert("No video found on the page.");
        }
      });
    }

    if (setEndTimeBtn) {
      setEndTimeBtn.addEventListener("click", () => {
        const video = document.querySelector("video");
        if (video) {
          const currentTime = video.currentTime;
          const hours = Math.floor(currentTime / 3600);
          const minutes = Math.floor((currentTime % 3600) / 60);
          const seconds = Math.floor(currentTime % 60);
          endTimeInput.value = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        } else {
          alert("No video found on the page.");
        }
      });
    }

    if (cancelBtn) {
      cancelBtn.addEventListener("click", () => {
        modal.style.display = "none";
      });
    }

    if (saveBtn) {
      saveBtn.addEventListener("click", async () => {
        const noteText = modal.querySelector("#note-text")?.value;
        const category = modal.querySelector("#note-category")?.value;
        const startTime = modal.querySelector("#start-time")?.value;
        const endTime = modal.querySelector("#end-time")?.value;

        // Validate input
        if (!noteText || !category || !startTime || !endTime) {
          alert("Please fill in all fields.");
          return;
        }

        // Get userId from chrome.storage
        chrome.storage.local.get(['userId'], async function(result) {
          const userId = result.userId;
          if (!userId) {
            alert('User not logged in. Please log in first.');
            return;
          }

          // Prepare data
          const noteData = {
            noteId: `note-${Date.now()}`,
            videoTitle: document.title,
            noteText: noteText,
            category,
            startTime,
            endTime,
            videoUrl: window.location.href,
            userId: userId
          };

          // Send to backend
          try {
            const response = await fetch('http://localhost:5000/note/create', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(noteData)
            });
            const result = await response.json();
            if (response.ok) {
              alert('Note saved to backend!');
              modal.style.display = "none";
              clearForm();
            } else {
              alert('Backend error: ' + (result.message || 'Unknown error'));
              // Optionally fallback to local storage
              saveToLocalStorage(noteData);
            }
          } catch (error) {
            console.error('Backend save error:', error);
            alert('Could not save to backend. Saving locally.');
            saveToLocalStorage(noteData);
          }
        });
      });
    }
  }

  function saveToLocalStorage(noteData) {
    try {
      const localNotes = JSON.parse(localStorage.getItem('videoNotes') || '[]');
      localNotes.push(noteData);
      localStorage.setItem('videoNotes', JSON.stringify(localNotes));
      alert("Note saved locally!");
      modal.style.display = "none";
      clearForm();
    } catch (error) {
      console.error('Local storage error:', error);
      alert("Unable to save note. Storage access denied.");
    }
  }

  function clearForm() {
    const noteText = modal.querySelector("#note-text");
    const category = modal.querySelector("#note-category");
    const startTime = modal.querySelector("#start-time");
    const endTime = modal.querySelector("#end-time");
    
    if (noteText) noteText.value = '';
    if (category) category.value = '';
    if (startTime) startTime.value = '';
    if (endTime) endTime.value = '';
  }

  // Initialize modal content
  renderModalContent();

  // === Show modal in top right corner ===
  button.addEventListener("click", () => {
    // Check login status before showing modal
    chrome.storage.local.get(["authToken"], (result) => {
      if (result && result.authToken) {
        // User is logged in, show the modal
        const margin = 20;
        modal.style.right = `${margin}px`;
        modal.style.top = `${margin}px`;
        modal.style.left = 'auto';
        modal.style.bottom = 'auto';
        // Toggle modal visibility
        if (modal.style.display === "none" || modal.style.display === "") {
          modal.style.display = "block";
          console.log("Modal opened");
        } else {
          modal.style.display = "none";
          console.log("Modal closed");
        }
      } else {
        // User not logged in, open login popup
        chrome.runtime.sendMessage({ type: "open_popup" });
      }
    });
  });

  // === Make Modal Draggable ===
  let isDragging = false;
  let offsetX = 0, offsetY = 0;

  // Use event delegation for dragging since content is dynamically generated
  modal.addEventListener("mousedown", (e) => {
    const header = e.target.closest("#vidionotes-header");
    if (header) {
      isDragging = true;
      const rect = modal.getBoundingClientRect();
      offsetX = e.clientX - rect.left;
      offsetY = e.clientY - rect.top;
      document.body.style.userSelect = "none";
      modal.style.cursor = "move";
    }
  });

  document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      modal.style.left = `${e.clientX - offsetX}px`;
      modal.style.top = `${e.clientY - offsetY}px`;
      modal.style.right = 'auto';
      modal.style.bottom = 'auto';
    }
  });

  document.addEventListener("mouseup", () => {
    if (isDragging) {
      isDragging = false;
      document.body.style.userSelect = "auto";
      modal.style.cursor = "auto";
    }
  });

  // Close modal when clicking outside
  document.addEventListener("click", (e) => {
    if (modal.style.display === "block" && !modal.contains(e.target) && e.target !== button && !button.contains(e.target)) {
      modal.style.display = "none";
    }
  });
}