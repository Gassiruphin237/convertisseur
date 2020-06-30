const monnaies = {
	EUR: {
		nom: "Euro",
		valeurs: {
			CFA: 654.40,
			USD: 1.13
		}
	},
	USD: {
		nom: "Dollard Americains",
		valeurs: {
			CFA: 581.62,
			EUR: 0.89
		}
	},
	CFA: {
		nom: "Franc-cfa",
		valeurs: {
			EUR: 0.0015,
			USD: 0.0025
		}
	}
};

function convertir(source, destination, montant) {
	return monnaies[source].valeurs[destination] * montant;
}

function initialiser() {
	const sourcesList = document.querySelector("#sources");
	const destinationList = document.querySelector("#destinations");
	const btn = document.querySelector("#convertir");
	const resultat = document.querySelector("#resultat");

	for (const [key, value] of Object.entries(monnaies)) {
		let option = document.createElement('option');
		let option_1 = document.createElement('option');

		option.value = key.toString();
		option.innerText = value.nom;

		option_1.value = key.toString();
		option_1.innerText = value.nom;

		sourcesList.options.add(option);
		destinationList.options.add(option_1);
	}


	btn.addEventListener("click", () => {
		let source = sourcesList.options[sourcesList.selectedIndex].value;
		const destination = destinationList.options[destinationList.selectedIndex].value;
		const montant = document.querySelector("#montant").value;

		resultat.value = parseFloat(convertir(source, destination, montant)).toString();
		console.log(destination)
	});

}


window.load = initialiser();