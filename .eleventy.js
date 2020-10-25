const pluginSEO = require("eleventy-plugin-seo");
const xmlFiltersPlugin = require('eleventy-xml-plugin');
const CleanCSS = require("clean-css");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('styles');
  eleventyConfig.addPassthroughCopy('js');
  eleventyConfig.addPassthroughCopy('static');
  eleventyConfig.addPassthroughCopy('favicon.ico');
  eleventyConfig.addPlugin(xmlFiltersPlugin);
  eleventyConfig.addPlugin(pluginSEO, {
    title: "Ethical Design Guide",
    description: "TODO",
    url: "TODO",
    author: "Sarah L. Fossheim"
  });
  eleventyConfig.addFilter("minify", css => {
    return new CleanCSS({}).minify(css).styles;
  });
  eleventyConfig.addCollection("resources", collection => {
    return collection.getFilteredByGlob('library/*/*.md').sort((a, b) => {
      return b.date - a.date;
    });
  });
  eleventyConfig.addCollection("books", collection => {
    return collection.getFilteredByGlob('library/books/*.md').sort((a, b) => {
      return b.date - a.date;
    });
  });
  eleventyConfig.addCollection("articles", collection => {
    return collection.getFilteredByGlob('library/articles/*.md').sort((a, b) => {
      return b.date - a.date;
    });
  });
  eleventyConfig.addCollection("tools", collection => {
    return collection.getFilteredByGlob('library/tools/*.md').sort((a, b) => {
      return b.date - a.date;
    });
  });
  eleventyConfig.addCollection("courses", collection => {
    return collection.getFilteredByGlob('library/courses/*.md').sort((a, b) => {
      return b.date - a.date;
    });
  });
  eleventyConfig.addCollection("other", collection => {
    let other = collection.getFilteredByGlob('library/*/*.md');
    other = other.filter((resource) => {
      let category = resource.filePathStem.split("/library/")[1].split("/")[0];
      return !["books", "articles", "courses", "tools"].includes(category);
    }).sort((a, b) => {
      return b.date - a.date;
    });
    return other;
  });


  eleventyConfig.addCollection("a11y", collection => {
    let a11y = collection.getFilteredByGlob('library/*/*.md');
    a11y = a11y.filter((resource) => {
      return resource.data.categories
       && (resource.data.categories.includes("a11y")
        || resource.data.categories.includes("accessibility")
        || resource.data.categories.includes("disabilities")
        || resource.data.categories.includes("disabled"));
    }).sort((a, b) => {
      return b.date - a.date;
    });
    return a11y;
  });
  eleventyConfig.addCollection("biasai", collection => {
    let biasai = collection.getFilteredByGlob('library/*/*.md');
    
    biasai = biasai.filter((resource) => {
      return resource.data.categories
       && (
        (
          (
            resource.data.categories.includes("bias")
              || resource.data.categories.includes("racist")
              || resource.data.categories.includes("race")
              || resource.data.categories.includes("transphobia")
              || resource.data.categories.includes("gender")
              || resource.data.categories.includes("queer")
              || resource.data.categories.includes("LGBTQIA+")
              || resource.data.categories.includes("sexuality")
              || resource.data.categories.includes("sexism")
              || resource.data.categories.includes("biased")
          )
          && (
            resource.data.categories.includes("ai")
              || resource.data.categories.includes("artificial intelligence")
              || resource.data.categories.includes("algorithms")
              || resource.data.categories.includes("machine learning")
              || resource.data.categories.includes("deep learning")
              || resource.data.categories.includes("image recognition")
          )
          || resource.data.categories.includes("biased ai")
          || resource.data.categories.includes("bias in ai")
        )
       );
    }).sort((a, b) => {
      return b.date - a.date;
    });
    return biasai;
  });
  eleventyConfig.addCollection("inclusive", collection => {
    let inclusive = collection.getFilteredByGlob('library/*/*.md');
    inclusive = inclusive.filter((resource) => {
      return resource.data.categories
       && (resource.data.categories.includes("inclusive design")
        || resource.data.categories.includes("cultural design")
        || (
          (
            resource.data.categories.includes("inclusive")
            || resource.data.categories.includes("cultural")
            || resource.data.categories.includes("race")
            || resource.data.categories.includes("racism")
            || resource.data.categories.includes("diversity")
            || resource.data.categories.includes("equity")
            || resource.data.categories.includes("inclusion")
            || resource.data.categories.includes("ethics")
            || resource.data.categories.includes("queer")
            || resource.data.categories.includes("gender")
            || resource.data.categories.includes("sexuality")
            || resource.data.categories.includes("accessible")
            || resource.data.categories.includes("accessibility")
            || resource.data.categories.includes("disabilities")
            || resource.data.categories.includes("disabled")
            || resource.data.categories.includes("a11y")
          )
          && resource.data.categories.includes("design")
        ));
    }).sort((a, b) => {
      return b.date - a.date;
    });
    return inclusive;
  });
  eleventyConfig.addCollection("queer", collection => {
    let queer = collection.getFilteredByGlob('library/*/*.md');
    queer = queer.filter((resource) => {
      return resource.data.categories
       && (resource.data.categories.includes("queer")
        || resource.data.categories.includes("queer issues")
        || resource.data.categories.includes("LGBTQIA+")
        || resource.data.categories.includes("gay")
        || resource.data.categories.includes("trans")
        || resource.data.categories.includes("transgender")
        || resource.data.categories.includes("non-binary")
        || resource.data.categories.includes("gender")
        || resource.data.categories.includes("sexuality"));
    }).sort((a, b) => {
      return b.date - a.date;
    });
    return queer;
  });
  eleventyConfig.addCollection("race", collection => {
    let race = collection.getFilteredByGlob('library/*/*.md');
    race = race.filter((resource) => {
      return resource.data.categories
       && (resource.data.categories.includes("race")
        || resource.data.categories.includes("racism")
        || resource.data.categories.includes("white supremacy")
        || resource.data.categories.includes("anti-racism")
        || resource.data.categories.includes("anti-racist")
        || resource.data.categories.includes("racial justice")
        || resource.data.categories.includes("racial inequality"));
    }).sort((a, b) => {
      return b.date - a.date;
    });
    return race;
  });

  eleventyConfig.addCollection("categoryList", collection => {
    let categoryList = [];
    collection.getAll().forEach((item) => {
      if("categories" in item.data){
        const categories = item.data.categories;
        for(let category of categories){
          category = category.toLowerCase();
          if(!categoryList.includes(category) && !categoryList.includes(category.replace(" ", ""))){
            categoryList.push(category);
          }
        }
      }
    })
    return categoryList;
  });
  eleventyConfig.addFilter("consolePrint", content => {
    console.log(content);
  });
  eleventyConfig.addFilter("removeSpaces", content => {
    return content.replace(" ", "");
  });
  eleventyConfig.addFilter("getDescription", content => {
    let description = content.type + " about ";
    content.categories.forEach((category, index) => {
      description += category;
      if (index <= content.categories.length - 2) {
        description += ", ";
        if (index === content.categories.length - 2) {
          description += "and "
        }
      } else {
        description += ".";
      }
    });
    return description;
  });
  eleventyConfig.addFilter("getAuthors", content => {
    let authors = "By ";
    content.authors.forEach((author, index) => {
      authors += author;
      if (index <= content.authors.length - 2) {
        authors += ", ";
        if (index === content.authors.length - 2) {
          authors += "and "
        }
      } else {
        authors += ".";
      }
    });
    return authors;
  });
  return {
    passthroughFileCopy: true
  }
}
