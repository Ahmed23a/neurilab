"use client";
import React from "react";
import ReactMarkdown from "react-markdown";

export default function Markdown({ children }) {
  return <ReactMarkdown>{children}</ReactMarkdown>;
}
