---
layout: page.liquid
pageTitle: "How to submit a new resource?"
pageId: "submit"
---

I will regularly update this directory with new resources. If you see something that's not here (yet) and should be here, you can do so yourself through GitHub. You'll need a GitHub account and limited knowledge of git ([find out how to get started]()), but no programming skills are required.

## Submission guidelines

Before adding any resource, make sure it actually belongs in this directory. The resource should be about accessibility, inclusivity, social justice, ethics, human rights, or politics in tech. It can focus on either the design, technological or human aspect, and of any skill level or about any technology or design practice. It's also ok to link to paid courses, books or tools.

Don't submit articles that are about design or technology in general, don't submit affiliate links, articles behind paywalls or sponsored posts. When it comes to books, avoid linking to Amazon unless there's no other alternative.

I do not accept racism, homophobia, transphobia, ableism, sexism, white supremacy, anti-semitism, or any other form of bigotry. Resources or authors that fit those criteria will be rejected and removed.

## Adding a resource

First, you'll need to find the project on GitHub and [fork]() it. In the `resources` folder of your copy, you can create a new markdown file (ending in `.md`) under any of the fitting type folders. The filename should be a shortened version of the resource title, and not contain spaces, eg: `weaponsofmathdestruction.md`.

Next, copy the following into the file, and fill in the blanks:

```
---
title: ""
authors: []
categories: []
link: ""
---
```

- **Title**: This is the title official title of the resource.
- **Authors**: The authors of the resource. This is passed in as a list of strings, even if there's only one author. If there are several authors, they should be separated with commas (eg. `authors: ["first author", "second author", "third author"]`).
- **Categories**: What the resource is about. You don't have to specify the type (eg. "book"), only the topics. _(for now this field is optional)_
- **Link**: A link to the resource. In case of books, please avoid linking to Amazon and use alternative links instead. Don't use link shortners or affiliate links either.

Optionally, you can list a _short_ description underneath the last `---`. In case of the book Weapons of Math Destruction by Cathy O'Neil, the path of our file would be `resources/books/weaponsofmathdestruction.md`, with the following content:

```
---
title: "Weapons of Math Destruction"
authors: ["Cathy O'Neil"]
categories: ["algorithms", "race", "gender", "artificial intelligence"]
link: "https://weaponsofmathdestructionbook.com/"
---

A former Wall Street quant sounds an alarm on the mathematical models that pervade modern life — and threaten to rip apart our social fabric.
```

After this is done, you'll need to [commit]() and [push]() your changes, and [create a pull request](). The title of the pull request should include what change is made _(eg. "Added the book Weapons of Math Destruction")_. If any context is necessary, please include it in the body of the pull request. The pull request should be labeled as `new resource`. 

## Removing a resource

If you see a resource in the list that you think doesn't belong here, you can use a similar flow as described above to remove its file. In this case, add the reasoning for why it should be removed in the description of the pull request and label it as `removed resource`. 
