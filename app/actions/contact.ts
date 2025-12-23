'use server'

export async function submitContactForm(prevState: any, formData: FormData) {
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  
  if (!webhookUrl) {
    console.error("CONTACT_WEBHOOK_URL is not defined");
    return { success: false, message: "System configuration error. Please try again later." };
  }

  const data = {
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    acceptedTerms: formData.get('terms') === 'on',
    timestamp: new Date().toISOString(),
    source: 'Blyton Bungalow Contact Form'
  };

  // Basic validation
  if (!data.firstName || !data.email) {
     return { success: false, message: "Please fill in all required fields." };
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Webhook failed: ${response.status} ${response.statusText}`);
    }

    return { success: true, message: "Thank you! We have received your message and will get back to you shortly." };
  } catch (error) {
    console.error("Form submission error:", error);
    return { success: false, message: "Something went wrong. Please try again later." };
  }
}
