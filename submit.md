---
layout: page.liquid
pageId: "submit"
---

# How to submit a new resource

Currently the only way to submit a resource is through [GitHub](https://github.com/sarahfossheim/ethicaldesign.guide). You'll need an account, and optionally basic [knowledge of git](https://guides.github.com/introduction/git-handbook/), but no programming skills are required.

## Submission guidelines

Before suggesting a resource, make sure it actually belongs in this directory. You can look at what's already in our [library](/) to get an idea of some of the topics that are covered. It can be a book, article, tool, podcast, or any other format. But it should provide education, awareness, or guidance around making tech more ethical and reducing harm.

We do not accept racism, homophobia, transphobia, ableism, sexism, white supremacy, anti-semitism, or any other form of bigotry. Resources or authors that fit those criteria will be rejected and removed.

## Suggesting a resource through GitHub issues

The easiest way to suggest a new resource is by [creating an issue](https://github.com/sarahfossheim/ethicaldesign.guide/issues/new) on GitHub and adding the `resource` label. The title should be the title of the resource, and the description should at least contain a link, and optional context.

## Alternative: Submitting a resource by creating a pull request

First, you'll need to find the project on GitHub and fork it.

In the `resources` folder of your copy, you can create a new markdown file (ending in `.md`) under any of the fitting type folders. The filename should be a shortened version of the resource title, and not contain spaces, eg: `weaponsofmathdestruction.md`.

Next, copy the following into the file, and fill in the blanks:

```MD
---
title:
authors:
    -
type:
categories:
    -
link:
---
```

Optionally, a date field can be added here as well. You can also write a short description after the `---` if you like, although this is not currently displayed anywhere in the interface.

In case of the book Weapons of Math Destruction by Cathy O'Neil, the path of our file would be `resources/books/weaponsofmathdestruction.md`, with the following content:

```MD
---
title: Weapons of Math Destruction
authors:
    - Cathy O'Neil
type: book
categories:
    - race
    - algorithms
    - artificial intelligence
    - gender
link: https://www.goodreads.com/book/show/28186015-weapons-of-math-destruction?ac=1&from_search=true&qid=dN1hL0r66S&rank=1
---

A former Wall Street quant sounds an alarm on the mathematical models that pervade modern life — and threaten to rip apart our social fabric.
```

After this is done, you'll need to commit and push your changes, and create a pull request. The title of the pull request should include what change is made _(eg. "Added the book Weapons of Math Destruction")_. If any context is necessary, please include it in the body of the pull request. The pull request should be labeled with `resources`.

## Removing a resource

If you see a resource in the list that you think doesn't belong here, you can use a similar flow as described above to remove its file. In this case, add the reasoning for why it should be removed in the description of the pull request and label it as `removed resource`.
