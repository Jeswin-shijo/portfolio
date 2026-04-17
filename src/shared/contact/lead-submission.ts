import type { Dayjs } from "dayjs";

export type LeadFormPayload = {
  name: string;
  email: string;
  whatsapp: string;
  phone: string;
  destination: string;
  travelDate: Dayjs | null;
  people: string;
  vacationType: string;
};

export type LeadSubmitStatus = {
  type: "success" | "error";
  message: string;
};

type LeadSubmitConfig = {
  emailJsServiceId?: string;
  emailJsTemplateId?: string;
  emailJsPublicKey?: string;
  whatsappApiUrl?: string;
};

type LeadSubmitResult = {
  status: LeadSubmitStatus;
  shouldReset: boolean;
};

const sanitizePhone = (value?: string) => (value || "").replace(/\D/g, "");

export const buildLeadTemplateParams = (payload: LeadFormPayload) => ({
  name: payload.name.trim(),
  email: payload.email.trim() || "Not provided",
  whatsapp: sanitizePhone(payload.whatsapp),
  phone: sanitizePhone(payload.phone) || "Not provided",
  destination: payload.destination.trim(),
  date_of_travel: payload.travelDate
    ? payload.travelDate.format("DD MMM YYYY")
    : "Not provided",
  no_of_people: payload.people.trim() || "Not provided",
  vacation_type: payload.vacationType.trim() || "Not provided",
  submitted_at: new Date().toLocaleString(),
});

const sendEmailLead = async (
  payload: LeadFormPayload,
  config: LeadSubmitConfig
) => {
  const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      service_id: config.emailJsServiceId,
      template_id: config.emailJsTemplateId,
      user_id: config.emailJsPublicKey,
      template_params: buildLeadTemplateParams(payload),
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Unable to send email lead.");
  }
};

const sendWhatsappLead = async (
  payload: LeadFormPayload,
  config: LeadSubmitConfig
) => {
  if (!config.whatsappApiUrl) {
    throw new Error("WhatsApp API URL is not configured.");
  }

  const response = await fetch(config.whatsappApiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(buildLeadTemplateParams(payload)),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Unable to send WhatsApp lead.");
  }
};

export const submitLeadForm = async (
  payload: LeadFormPayload,
  config: LeadSubmitConfig
): Promise<LeadSubmitResult> => {
  const isEmailConfigured = Boolean(
    config.emailJsServiceId && config.emailJsTemplateId && config.emailJsPublicKey
  );
  const isWhatsappApiConfigured = Boolean(config.whatsappApiUrl);

  if (!isEmailConfigured && !isWhatsappApiConfigured) {
    return {
      status: {
        type: "error",
        message: "Form channels are not configured yet.",
      },
      shouldReset: false,
    };
  }

  let emailSent = false;
  let whatsappSent = false;

  if (isEmailConfigured) {
    try {
      await sendEmailLead(payload, config);
      emailSent = true;
    } catch {
      emailSent = false;
    }
  }

  if (isWhatsappApiConfigured) {
    try {
      await sendWhatsappLead(payload, config);
      whatsappSent = true;
    } catch {
      whatsappSent = false;
    }
  }

  if (emailSent && whatsappSent) {
    return {
      status: {
        type: "success",
        message:
          "Thanks! Your enquiry was submitted successfully. Our team will reach you shortly on WhatsApp.",
      },
      shouldReset: true,
    };
  }

  if (emailSent || whatsappSent) {
    return {
      status: {
        type: "success",
        message:
          "Thanks! Your enquiry was submitted successfully. Our team will reach you shortly on WhatsApp.",
      },
      shouldReset: true,
    };
  }

  return {
    status: {
      type: "error",
      message:
        "Submission failed. Please verify your EmailJS or WhatsApp configuration and try again.",
    },
    shouldReset: false,
  };
};
