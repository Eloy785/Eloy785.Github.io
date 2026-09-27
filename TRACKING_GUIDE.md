# Portfolio Tracking Guide

## Normal workflow

Every time you make a change:

1. Run the site locally:
   `npm run dev`

2. Check what changed:
   `git status`

3. Stage your changes:
   `git add .`

4. Save a checkpoint:
   `git commit -m "feat: short description"`

5. Upload the checkpoint:
   `git push`

GitHub now becomes your timeline. Every commit is a restore point.

## Before making a large experiment

Create a branch:

```bash
git switch -c redesign/project-windows
```

Work normally, commit, and test.

When happy:

```bash
git switch main
git merge redesign/project-windows
git push
```

## Useful commands

```bash
git log --oneline
```
Shows your saved checkpoints.

```bash
git diff
```
Shows changes you have not committed yet.

```bash
git status
```
Shows what files changed.

```bash
git restore path/to/file
```
Discards uncommitted changes to one file.

## Recommended commit examples

```text
feat: add LifeOS project modal
style: refine hero spacing
content: update FinanceQuest description
fix: correct mobile navigation
feat: add project filtering
```

## Where to edit content

Project information:
`src/data/projects.js`

Experience information:
`src/data/experience.js`

Main page sections:
`src/App.jsx`

Reusable UI:
`src/components/`

Global appearance:
`src/styles.css`

This separation is intentional: you can update project text without touching the layout code.
