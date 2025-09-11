import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  Paper,
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
    height: '100vh',   // exact viewport height
    width: '100vw',    // exact viewport width
    m: 0,              // remove margin
    p: 0,              // remove padding
    backgroundImage: "url('/faq.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}
>
      {/* Translucent container for readability */}
      <Paper
  elevation={6}
  sx={{
    maxWidth: "900px",
    width: "100%",
    p: { xs: 3, md: 5 },
    borderRadius: 3,
    backgroundColor: 'rgba(255,255,255,0.1)',
        boxShadow: 'none',
    mt: { xs: 10, md: 12 },   // 🔥 push down below navbar
  }}
>
        {/* Title */}
        <Typography variant="h3" gutterBottom align="center">
          Frequently Asked Questions
        </Typography>
        <Typography variant="body1" paragraph align="center">
          Find answers to the most common questions below.
        </Typography>

        <Divider sx={{ my: 1 }} />

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
      </Paper>
    </Box>
  );
};

export default FAQ;
