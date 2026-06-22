"use client";

import React, { useState } from "react";

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    const faqs = [
        {
            question: "What services does PIHNEXA Technologies provide?",
            answer: "We specialize in end-to-end digital transformation, offering Website Development, Mobile App Development, custom Hospital Software, Queue Management Solutions, and WhatsApp Automation for businesses and enterprises."
        },
        {
            question: "How long does a typical project take?",
            answer: "Timelines depend on project complexity. A standard corporate website typically takes 2–4 weeks, while complex custom software or mobile applications may take 2–4 months. We always provide a clear timeline before development begins."
        },
        {
            question: "Do you provide post-launch support?",
            answer: "Yes. We believe in long-term partnerships. We offer dedicated maintenance, security updates, and technical support packages to ensure your digital products remain fast, secure, and fully operational after launch."
        },
        {
            question: "Can you build custom software for hospitals and businesses?",
            answer: "Absolutely. We have deep expertise in building tailored enterprise solutions, including patient management systems, smart queues, and automated business workflows designed to increase operational efficiency and revenue."
        },
        {
            question: "Will my website be mobile-friendly and SEO-ready?",
            answer: "Yes. Every project we deliver is built with a mobile-first approach, ensuring a flawless user experience across all devices. We also implement foundational SEO best practices to help your business rank higher online."
        },
        {
            question: "Do I own the source code and project assets?",
            answer: "Yes. Upon final payment and project completion, the intellectual property, source code, and all digital assets are fully transferred to your complete ownership. We believe your business should own its technology."
        },
        {
            question: "How do you protect client information?",
            answer: "We prioritize data security and confidentiality. Our platforms are protected by standard HTTPS encryption, secure authentication methods, and robust server infrastructure to ensure your sensitive business and client information remains private and secure."
        },
        {
            question: "How do we get started?",
            answer: "Simply fill out our contact form or reach out via WhatsApp. Our team will schedule a free, no-obligation consultation to understand your requirements and propose the perfect digital solution for your business."
        }
    ];

    return (
        <section id="faq">
            <div className="container">
                <h2 className="section-title">Frequently Asked <span className="gradient-text">Questions</span></h2>
                <div className="faq-container" style={{ marginTop: "3rem" }}>
                    {faqs.map((faq, index) => (
                        <div 
                            key={index} 
                            className={`faq-item ${activeIndex === index ? "active" : ""}`}
                            onClick={() => toggleFaq(index)}
                        >
                            <div className="faq-question">
                                {faq.question} <i className="fa-solid fa-chevron-down"></i>
                            </div>
                            <div className="faq-answer">
                                <p style={{ paddingTop: "1rem" }}>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
