export const sendEvent = (action, category, label, value) => {
    console.log("Sending event:", { action, category, label, value });
    const eventId = Math.random().toString(36).substring(7);
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
      event_id: eventId,
    });
  };