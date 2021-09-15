const fs = require('fs');

class Archivo {

    constructor() {

        this.urlLocal = "./models/";
    };

    readForId = async (archivo, id) => {

        const currentUrl = `${this.urlLocal}${archivo}.txt`;

        const readLocalFile = await fs.promises.readFile(currentUrl);
        const jsonFile = JSON.parse(readLocalFile.toString('utf-8'));

        if (id) {

            return jsonFile.filter(data => data.id === id)

        } else return jsonFile

    };

    download = async (archivo, data) => {

        const currentUrl = `${this.urlLocal}${archivo}.txt`;

        try {

            const readLocalFile = await fs.promises.readFile(currentUrl);
            const jsonFile = JSON.parse(readLocalFile.toString('utf-8'));

            jsonFile.push({ ...data, id: `${Date.now()}${jsonFile.length}` });

            try {

                await fs.promises.writeFile(currentUrl, JSON.stringify(jsonFile, null, '\t'));

                return jsonFile;

            } catch (error) {

                throw new Error(error)

            }

        } catch (error) {

            try {

                await fs.promises.writeFile(currentUrl, JSON.stringify([{ ...data, id: `${Date.now()}0` }]));

                return ({ ...data, id: `${Date.now()}0` })

            } catch (error) {

                throw new Error(error)

            }

        }

    };

    update = async (archivo, data, id) => {

        const currentUrl = `${this.urlLocal}${archivo}.txt`;

        const readLocalFile = await fs.promises.readFile(currentUrl);
        const jsonFile = JSON.parse(readLocalFile.toString('utf-8'));

        let currentIndex = jsonFile.findIndex(data => data.id == id)

        if (currentIndex > -1) {

            jsonFile.map((elements, indx) => {

                if (indx === currentIndex) {

                    for (let element in elements) {

                        elements[element] = data[element] || elements[element]

                    }

                } else { return elements }

            });

            try {

                await fs.promises.writeFile(currentUrl, JSON.stringify(jsonFile, null, '\t'));

                return jsonFile;

            } catch (error) {

                throw new Error(error)

            }

        } else return {}

    };

    delete = async (archivo, id) => {

        const currentUrl = `${this.urlLocal}${archivo}.txt`;

        const readLocalFile = await fs.promises.readFile(currentUrl);
        const jsonFile = JSON.parse(readLocalFile.toString('utf-8'));
  
        const currentJsonFile = jsonFile.filter(data => data.id !== id)

        try {

            await fs.promises.writeFile(currentUrl, JSON.stringify(currentJsonFile, null, '\t'));

            return currentJsonFile;

        } catch (error) {

            throw new Error(error)

        }

    };

};

module.exports = Archivo;