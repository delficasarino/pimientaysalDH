const path = require("path");
const fs = require("fs");
const category = require ("./category")

module.exports = {
    directory: path.resolve(__dirname, "../data", "products.json"),
    all: function(){
        const file = fs.readFileSync(this.directory);
        return JSON.parse(file);
    },//para leer todo el archivo categories.json como ob literal
    allWithExtra: function() {
        return this.all().map(element => {
            element.category = category.one(element.category)/*.name se queda solo con el nombre y sin el id*/;
            return element; 
        })/* .map(element => {
            element.colors = element.colors.map(colorId => color.one(colorId))
            return element;
        }) */
    },//un intermedio para agregarle algo extra. por ejemplo en este caso la categoria
    one: function(id){
        return this.all().find(element => element.id == id);
    },//para buscar por el id q estoy buscando
    oneWithExtra: function(id) {
        return this.allWithExtra().find(element => element.id == id);
        }
}