// ============================================================
// FORMS — Web3Forms submission
// ============================================================

document.querySelectorAll("form[data-w3f]").forEach((form) => {
	const btn = form.querySelector('button[type="submit"]');

	form.addEventListener("submit", async (e) => {
		e.preventDefault();
		if (!form.checkValidity()) {
			form.reportValidity();
			return;
		}

		btn.disabled = true;
		btn.textContent = "Sending…";

		const data = Object.fromEntries(new FormData(form));

		try {
			const res = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify(data),
			});

			const json = await res.json();

			if (res.ok && json.success) {
				const card = form.closest(".form-card") || form.parentElement;
				const success = card.querySelector(".form-success");
				form.style.display = "none";
				if (success) success.classList.add("show");
			} else {
				throw new Error(json.message || "Submission failed");
			}
		} catch {
			btn.disabled = false;
			btn.innerHTML =
				'Request Consultation <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
			alert(
				"Sorry, your request could not be sent. Please try again or email us directly at consultant@nialegalsolutions.co.za",
			);
		}
	});
});
