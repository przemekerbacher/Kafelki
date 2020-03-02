class DataGetter {
	constructor() {
		this.path = "../data/products.json";
		this.data = JSON.parse(path);
	}

	get(name) {
		var result = data[name];

		return result;
	}
}

export default DataGetter;