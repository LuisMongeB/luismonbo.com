---
title: "AI Gateway"
description: "A Rust API gateway that unifies LLM providers behind an OpenAI-compatible interface"
accentColor: "#CE422B"
repoUrl: "https://github.com/LuisMongeB/ai-gateway"
techStack: ["Rust", "Actix-web", "Tokio", "Reqwest", "SSE"]
status: "In Progress"
pubDate: 2026-02-01
draft: false
---

Building AI applications means dealing with a fragmented ecosystem. Every provider has its own API format, its own authentication scheme, its own way of handling streaming. Swap from Ollama to OpenAI and you're rewriting your client code. Add Azure and you're maintaining three integrations.

The AI Gateway solves this with a single Rust service that sits between your application and any LLM provider. Send requests using the OpenAI chat completions format — the gateway handles the rest.

## Why Rust

This could have been a Python FastAPI service in 50 lines. But a gateway is infrastructure — it sits in the hot path of every request. Rust gives you predictable latency, minimal memory footprint, and the confidence that if it compiles, the type transformations between provider formats are correct.

Actix-web handles the HTTP layer, Tokio powers the async runtime, and Reqwest manages outbound requests to providers. The stack is intentionally minimal.

## The Streaming Problem

The hardest part wasn't routing requests — it was streaming. OpenAI sends Server-Sent Events natively, but Ollama streams newline-delimited JSON. The gateway has to consume one format and emit the other in real time, chunk by chunk, without buffering the entire response.

This required building a transformation layer that reads from a Reqwest streaming response and writes SSE frames to the Actix response as they arrive. Getting backpressure right across two async streams was the most interesting challenge in the project.

## Provider Abstraction

Each provider implements a common trait that handles format transformation. Adding a new provider means implementing that trait — the routing, auth, and streaming infrastructure stays unchanged. The design keeps the gateway extensible without touching existing code.

Currently supports Ollama (local inference) and OpenAI, with Azure OpenAI planned next.
