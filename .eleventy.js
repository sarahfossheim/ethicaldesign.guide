const pluginSEO = require("eleventy-plugin-seo");
const xmlFiltersPlugin = require('eleventy-xml-plugin');

const getSimilarCategories = function(categoriesA, categoriesB) {
  return categoriesA.filter(Set.prototype.has, new Set(categoriesB)).length;
}

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
  eleventyConfig.addCollection("resources", collection => {
    return collection.getFilteredByGlob('resources/*/*.md').reverse();
  });
  eleventyConfig.addCollection("books", collection => {
    return collection.getFilteredByGlob('resources/books/*.md').reverse();
  });
  eleventyConfig.addCollection("articles", collection => {
    return collection.getFilteredByGlob('resources/articles/*.md').reverse();
  });
  eleventyConfig.addCollection("tools", collection => {
    return collection.getFilteredByGlob('resources/tools/*.md').reverse();
  });
  eleventyConfig.addCollection("courses", collection => {
    return collection.getFilteredByGlob('resources/courses/*.md').reverse();
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
    console.log("category list is", categoryList);
    return categoryList;
  });
  eleventyConfig.addFilter('consolePrint', content => {
    console.log(content);
  });
  eleventyConfig.addFilter('removeSpaces', content => {
    return content.replace(" ", "");
  });
  return {
    passthroughFileCopy: true
  }
}
