export const sendEvent = (action, category, label, value) => {
    console.log("Sending event:", { action, category, label, value });
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  };