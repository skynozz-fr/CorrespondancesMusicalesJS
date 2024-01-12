window.addEventListener("load", function () {

    const title = document.createElement("h1");
    title.textContent = "Les correspondances des notes de musique";
    title.classList.add("display-4", "text-center", "my-4");

    function createOption(value, text) {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = text;
        return option;
    }

    function createForm() {
        const form = document.createElement("form");
        form.classList.add("container", "my-4");
        const select = document.createElement("select");
        select.classList.add("form-select", "mb-3");
        const notes = ["do", "re", "mi", "fa", "sol", "la", "si"];
        const correspondancesNotes = {
            do: "C",
            re: "D",
            mi: "E",
            fa: "F",
            sol: "G",
            la: "A",
            si: "B"
        };

        select.appendChild(createOption("", "Choisissez une note"));

        notes.forEach(function (note) {
            select.appendChild(createOption(note, note));
        });

        form.appendChild(select);

        const resultParagraph = document.createElement("p");
        resultParagraph.classList.add("lead", "text-center", "fw-bold", "text-primary");
        form.appendChild(resultParagraph);

        select.addEventListener("change", function () {
            const noteChoisie = select.value;

            if (noteChoisie !== "") {
                const valeurCorrespondante = correspondancesNotes[noteChoisie];

                if (valeurCorrespondante !== undefined) {
                    console.log(`La notation américaine pour la note ${noteChoisie} est ${valeurCorrespondante}.`);

                    resultParagraph.innerHTML = `La notation américaine pour la note <span class="text-danger">${noteChoisie}</span> est <span class="text-success">${valeurCorrespondante}</span>.`;
                } else {
                    console.log("Il y a un problème. La note choisie n'a pas de correspondance définie.");
                    resultParagraph.innerHTML = "Il y a un problème. La note choisie n'a pas de correspondance définie.";
                }
            } else {
                resultParagraph.innerHTML = "";
            }
        });

        return form;
    }

    document.body.appendChild(title);
    document.body.appendChild(createForm());
});
