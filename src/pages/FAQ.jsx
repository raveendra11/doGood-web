import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = () => {
  const faqs = [
    {
      question: "What kind of donations do you accept?",
      answer:
        "We accept clothes, books, extra food, and other essential items. Monetary donations are not required — our focus is on sharing resources directly with those in need.",
    },
    {
      question: "How can I volunteer?",
      answer:
        "You can join our volunteer program by signing up on the website. Volunteers help with collection drives, distribution, and community events.",
    },
    {
      question: "Where do the donations go?",
      answer:
        "All donations are distributed to orphanages, elder care homes, and underprivileged communities. We ensure that everything reaches the right hands responsibly.",
    },
    {
      question: "Can I donate items in bulk?",
      answer:
        "Yes! If you have bulk donations such as clothes, books, or food items, please contact us so we can arrange proper logistics for collection and distribution.",
    },
    {
      question: "Do you provide tax receipts for donations?",
      answer:
        "Currently, we do not issue tax receipts as our focus is non-monetary contributions. However, we provide acknowledgments and regular updates on how your donations are making an impact.",
    },
  ];

  return (
    <Box
      sx={{
        p: 5,
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      {/* Title */}
      <Typography variant="h3" gutterBottom align="center">
        Frequently Asked Questions
      </Typography>
      <Typography variant="body1" paragraph align="center">
        Find answers to the most common questions below.
      </Typography>

      <Divider sx={{ my: 3 }} />

      {/* FAQ list */}
      {faqs.map((faq, index) => (
        <Accordion key={index} sx={{ mb: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle1" fontWeight="bold">
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQ;
