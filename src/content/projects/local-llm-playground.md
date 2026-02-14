---
title: "Local LLM Playground"
description: "A lightweight framework for testing and evaluating local Large Language Models"
accentColor: "#3572A5"
repoUrl: "https://github.com/LuisMongeB/local-llm-playground"
techStack: ["Python", "PyTorch", "Transformers", "uv"]
status: "In Progress"
pubDate: 2026-01-15
draft: false
---

Every time a new open-source model drops — Qwen3, T5Gemma, Apple's CLaRa — I want to answer the same questions: How does it run on my hardware? How does it actually perform? Is it worth integrating into a real project?

I kept writing throwaway scripts to test each one. Same boilerplate every time: load the model, figure out the right device, generate some outputs, eyeball the results. The Local LLM Playground is what happened when I got tired of repeating myself.

## A Framework for Curiosity

The core idea is simple: a modular Python framework that handles the boring parts — device detection, model loading, memory cleanup — so I can focus on the interesting part: running experiments.

Each experiment is a standalone script in the `experiments/` directory. Load a model, point it at a dataset, get graded results. The framework handles whether you're on CUDA, Apple Silicon, or CPU. You just pick the model and ask the questions.

## LLM-as-Judge

The most interesting design decision was evaluation. How do you grade open-ended LLM outputs at scale without manually reading hundreds of responses?

The answer: use GPT-4 as a judge. The framework sends each model's output to OpenAI's API with a grading rubric and gets back structured scores. It's not perfect — there's well-documented bias in LLM self-evaluation — but it's fast, consistent, and good enough for comparing models against each other.

## Keeping It Light

This could have been a full MLOps platform with dashboards and experiment tracking. Instead, it's a handful of Python modules and a `uv run` command. The experiments are scripts, not configurations. The results are printed, not stored in a database.

Sometimes the right tool is the one you can understand in five minutes and modify in ten.
