# Ethical Design Guide

Tech is all around us, developing fast, and not going away. Which is why ethics should be a part of the design and engineering curriculum, and a focus for everyone working in the industry.

Without it, we risk creating products that cause harm, often against people from minoritized groups, who already face a lot of injustice. Think of the predictive policing software that’s biased against Black people, products that reinforce gender stereotypes or exclude non-binary folks, or all the websites that are not accessible.

Ethical Design Guide is made to share resources on how to create ethical products that don't cause harm. More links will be added continuously. Subscribe to the [mailing list](https://www.getrevue.co/profile/ethicaldesignguide) to receive a monthly update on new resources and interesting new reads.

## Bugs, improvements, and feature requests

If you find any bugs or have feature requests, you can open an issue on GitHub, and use one of the following labels in the title:

- **[a11y]**: Accessibility bugs and improvements
- **[Bug]**: Something doesn’t seem to be working
- **[Feature]**: Requests and suggestions for new features
- **[Improvement]**: General design and code improvements

There's only one person working on this project, so more functionality will be added gradually, and accessibility improvements will be prioritized. The following issues are already on the roadmap:

- Improving the list design
- Improving recommended filters
- Adding dark mode

Future additions may also include our own blog posts, guides and checklists.

If you see a resource that shouldn’t be here or want to add one of your own, it's preferred to create a pull request with the change instead. More information on that can be found in the [submission guidelines](/submit).


# How to submit a new resource

Currently the only way to submit a resource is through [GitHub](https://github.com/sarahfossheim/ethicaldesign.guide). You'll need an account, and optionally basic [knowledge of git](https://guides.github.com/introduction/git-handbook/), but no programming skills are required.

## Submission guidelines

Before suggesting a resource, make sure it actually belongs in this directory. You can look at what's already in our [library](/) to get an idea of some of the topics that are covered. It can be a book, article, tool, podcast, or any other format. But it should provide education, awareness, or guidance around making tech more ethical and reducing harm.

We do not accept racism, homophobia, transphobia, ableism, sexism, white supremacy, anti-semitism, or any other form of bigotry. Resources or authors that fit those criteria will be rejected and removed.

## Suggesting a resource through GitHub issues

The easiest way to suggest a new resource is by [creating an issue](https://github.com/sarahfossheim/ethicaldesign.guide/issues/new) on GitHub and adding `[resource]` to the start of the title. The title should be the title of the resource, and the description should at least contain a link, and optional context.

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

After this is done, you'll need to commit and push your changes, and create a pull request. The title of the pull request should include what change is made _(eg. "Added the book Weapons of Math Destruction")_. If any context is necessary, please include it in the body of the pull request. The pull request should be labeled with `[resource]` in the title.

## Removing a resource

If you see a resource in the list that you think doesn't belong here, you can use a similar flow as described above to remove its file. In this case, add the reasoning for why it should be removed in the description of the pull request and label it with `[removed resource]`.


## About the creator

[Sarah Fossheim](https://fossheim.io/) ([@liatrisbian](https://twitter.com/liatrisbian)) is a multidisciplinary developer and designer focused on creating inclusive and accessible products. They created Ethical Design Guide in December 2020, with the goal of making it easier to create more ethical products.

It originally started with a Notion document in June 2020, but was moved over to its own self-hosted platform in fall. This allows others to submit resources in a supervised way without allowing trolls to misuse the functionality, by creating a pull request on GitHub.
