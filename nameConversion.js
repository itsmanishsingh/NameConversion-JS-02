
function myFunction() {
  const word = document.getElementById("text").value;

  document.getElementById("camel-case").innerHTML = camelCase(word);

  function camelCase(str) {
    return str
      .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index == 0 ? word.toLowerCase() : word.toUpperCase();
      })
      .replace(/\s+/g, "");
  }

  document.getElementById("pascal-case").innerHTML = PascalCase(word);

  function PascalCase(str) {
    return (' ' + str).toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => {
        return chr.toUpperCase()});
  }

  document.getElementById("snake-case").innerHTML = SnakeCase(word);

  function SnakeCase(str){
    return str.replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
  }
 
  
  document.getElementById("screaming-snake-case").innerHTML = ScreamingSnakeCase(word);

  function ScreamingSnakeCase(str){
    return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => '-' + chr).trim();
  }

  document.getElementById("kebab-case").innerHTML = KebabCase(word);

  function KebabCase(str){
    return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => '-' + chr).trim();
  }
    function ScreamingkebabCase(str){
      return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => '-' + chr).trim();
    }
  document.getElementById("screaming-kebab-case").innerHTML = ScreamingkebabCase(word);


}
